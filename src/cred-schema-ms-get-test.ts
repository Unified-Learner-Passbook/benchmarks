import { SharedArray } from "k6/data";
import http from "k6/http";
import { Options } from "k6/options";
import papaparse from './papaparse.min.js';

export let options:Options = {
    ext: {

        loadimpact: {
    
          projectID: 3627304,
    
        },
    
      },
    scenarios: {
        get_scenario:{
            executor: 'shared-iterations',

            startTime: '0s',
            gracefulStop: '5s',
            tags: {serviceTag: 'Cred-Schema'},

            vus: 10,
            iterations: 50,
            maxDuration:'10s',

            exec: 'default'
        }

    }
};

const csvRead = new SharedArray("credentials", function() {
    return papaparse.parse(open('../assets/templateIDs.csv'), {header: true}).data;
});

export default () => {
    const schemaTags = '[marks]';
    console.log(csvRead);
    
    //get schema by did
    http.get(`http://${__ENV.HOST='64.227.185.154:3001'}/schema/jsonld?id=${__ENV.SCHEMA_ID='did:example:evfeb1f712ebc6f1a276e12ec21'}`);
    //get schema by tags
    http.get(`http://${__ENV.HOST='64.227.185.154:3001'}/schema/tags?tags=`+schemaTags);
    //get template by schema id
    http.get(`http://${__ENV.HOST='64.227.185.154:3001'}/rendering-template/${__ENV.SCHEMA_ID='did:example:evfeb1f712ebc6f1a276e12ec21'}`)
    //get template by template id
    //http.get('http://${__ENV.HOST}/rendering-template?id=')
};


