import http from "k6/http";
import { Options } from "k6/options";
import{check, sleep} from "k6";

export let options:Options = {
    vus: 50,
    duration: '10s'
};

export default () => {
  const res = http.get('http://64.227.185.154:3001/schema/jsonld?id=did:example:evfeb1f712ebc6f1a276e12ec21');
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};