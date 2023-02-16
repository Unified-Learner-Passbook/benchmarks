import http from "k6/http";
import { Options } from "k6/options";
import{check, sleep} from "k6";

export let options:Options = {
    scenarios: {
        get_scenario:{
            executor: 'shared-iterations',

            startTime: '0s',
            gracefulStop: '5s',
            tags: {serviceTag: 'Cred-Schema'},

            vus: 50,
            iterations: 100,
            maxDuration: '10s',

            exec: 'default'
        }

    }
};

export default () => {
    //get schema by did
    http.get('http://64.227.185.154:3001/schema/jsonld?id=did:example:evfeb1f712ebc6f1a276e12ec21');
    //get schema by tags
    http.get('http://64.227.185.154:3001/schema/tags?tags=[marks]')
};
