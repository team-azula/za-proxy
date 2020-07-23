import http from 'k6/http';
import { sleep } from 'k6';

var id = Math.floor(Math.random() * 1000) + 2;

export let options = {
  vus: 500,
  duration: '240s',
};
export default function() {
  http.get(`http://localhost:3001/api/apps/${id}`);
  sleep(1);
}