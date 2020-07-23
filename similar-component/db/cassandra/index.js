const cassandra = require('cassandra-driver');
const executeConcurrent = cassandra.concurrent.executeConcurrent;
const Uuid = cassandra.types.Uuid;
var faker = require('faker');

// const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' });

/**
 * Inserts multiple rows in a table from an Array using the built in method <code>executeConcurrent()</code>, limiting the amount of parallel requests.
 */
async function test() {

  const args = process.argv;

  if (args.length < 5){
    console.log('Usage: node execute-concurrent-promise-way.js contactPoint_IP dataCenter desired_concurrency_level');
  }

  const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' });

  await client.connect();
  await client.execute(`CREATE KEYSPACE IF NOT EXISTS sdc
                        WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1' }`);
  await client.execute(`USE sdc`);
  await client.execute(`CREATE TABLE IF NOT EXISTS appsdb (id int, appId int, name text, logo text, company text, rating decimal, description text, PRIMARY KEY (id))`);
  
  // The maximum amount of async executions that are going to be launched in parallel at any given time
  const concurrencyLevel = 32;
  const promises = new Array(concurrencyLevel);

  const info = {
    totalLength: 10000000,
    counter: 0
  };

  // Use an Array with 10000 different values
  //const values = Array.from(new Array(1000000).keys()).map(x => [ Uuid.random(), Math.round(Math.random() * (100 - 1) + 1), faker.name.findName(), faker.image.imageUrl(), "Fake Co.", (Math.random() * (5 - 1) + 1).toFixed(2), faker.lorem.sentence() ]);

  for (let i = 0; i < concurrencyLevel; i++) {
    promises[i] = executeOneAtATime(client,info);
  }


  try {
    // const query = 'INSERT INTO apps (id, appId, name, logo, company, rating, description) VALUES (?, ?, ?, ?, ?, ?, ?)';
    // await executeConcurrent(client, query, values);

    // The n promises are going to be resolved when all the executions are completed.
    await Promise.all(promises);

    console.log(`Finished executing ${info.totalLength} queries with a concurrency level of ${concurrencyLevel}.`);

  } finally {
    await client.shutdown();
  }
}

async function executeOneAtATime(client,info) {
  const query = 'INSERT INTO appsdb (id, appId, name, logo, company, rating, description) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const options = { prepare: true, isIdempotent: true };

  while (info.counter++ < info.totalLength) {
    const params = [ info.counter , Math.round(Math.random() * (100 - 1) + 1), faker.name.findName(), faker.image.imageUrl(), "Fake Co.", (Math.random() * (5 - 1) + 1).toFixed(2), faker.lorem.sentence() ];
    await client.execute(query, params, options);
  }
}

test();

// Exit on unhandledRejection
process.on('unhandledRejection', (reason) => { throw reason; });