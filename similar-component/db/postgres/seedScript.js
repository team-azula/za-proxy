const fs = require('fs');
const faker = require('faker');


const writer = fs.createWriteStream('applications.csv', {flags: 'w'})
  .on('finish', ()=> {
    console.log('Finished Writing');
  })
  .on('error', (err)=> {
    console.log(err);
  });

var start = Date.now();

for ( var i = 1; i <= 10000000; i++) {
  let entry = '';
  entry += `${Math.round(Math.random() * (1000000 - 1) + 1)},`;
  entry += `${faker.name.findName()},`;
  entry += `${faker.image.imageUrl()},`;
  entry += 'Fake.co,';
  entry += `${(Math.random() * (5 - 1) + 1).toFixed(2)},`;
  entry += `${faker.lorem.sentence()}`;
  entry += `\n`;
  writer.write(entry);
}

writer.end();
console.log('Done');

var end = Date.now();
var diff = end - start;
console.log('Start - ', start);
console.log('End - ', end);

console.log('Diff (ms) - ', diff);
console.log('Diff (sec) - ', diff / 1000);