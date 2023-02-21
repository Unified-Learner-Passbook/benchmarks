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

            vus: 5,
            iterations: 10,
            maxDuration: '100s',

            exec: 'default'
        }

    }
};


export default () => {
    http.post(`${__ENV.HOST}/did/generate`, JSON.stringify(requestBody.generateDIDBody), {
        headers: { 'Content-Type': 'application/json' },
      })
}