import http from "k6/http";
import { Options } from "k6/options";
import requestBody from './postReqBody/cred-schema-post-body';
import { uuid } from "uuidv4";

export let options:Options = {
    scenarios: {
        get_scenario:{
            executor: 'shared-iterations',

            startTime: '0s',
            gracefulStop: '5s',
            tags: {serviceTag: 'Cred-Schema'},

            vus: 5,
            iterations: 5,
            maxDuration: '10s',

            exec: 'default'
        }

    }
};

export default () => {
    requestBody.addSchemaBody.schema.id = requestBody.addSchemaBody.schema.id + uuid() 

    http.post(`http://${__ENV.HOST}/rendering-template`, requestBody.addTemplateBody)
    http.post(`http://${__ENV.HOST}/schema`,JSON.stringify(requestBody.addSchemaBody),{
    headers: { 'Content-Type': 'application/json' },
  })

}