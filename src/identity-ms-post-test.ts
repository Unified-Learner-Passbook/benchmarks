import http from "k6/http";
import { Options } from "k6/options";
import requestBody from './postReqBody/identity-ms-post-body';
import { uuid } from "uuidv4";

export let options:Options = {
    scenarios: {
        get_scenario:{
            executor: 'shared-iterations',

            startTime: '0s',
            gracefulStop: '5s',
            tags: {serviceTag: 'Cred-Schema'},

            vus: 1,
            iterations: 1,
            maxDuration: '10s',

            exec: 'default'
        }

    }
};

let params = {
    headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json'
    }
}

export default () => {
    http.post('http://localhost:3332/did/generate', JSON.stringify(requestBody.generateDIDBody), {
        headers: { 'Content-Type': 'application/json' },
      })
}