import { SharedArray } from "k6/data";
import http from "k6/http";
import { Options } from "k6/options";
import papaparse from './papaparse.min.js';

export let options:Options = {
    scenarios: {
        get_scenario:{
            executor: 'shared-iterations',

            startTime: '0s',
            gracefulStop: '5s',
            tags: {serviceTag: 'Cred-Schema'},

            vus: 100,
            iterations: 500,
            maxDuration:'10s',

            exec: 'default'
        }

    }
};

const csvRead = new SharedArray("credentials", function() {
    return papaparse.parse(open('../assets/templateIDs.csv'), {header: true}).data;
});

export default () => {
    
    const schemaDID = 'did:example:evfeb1f712ebc6f1a276e12ec21';
    const schemaTags = '[marks]';
    // var csv = papaparse.parse(open('assets/templateIDs.csv'),{
    //     download:false,
    // });
    console.log(csvRead);
    
    //get schema by did
    http.get(`http://${__ENV.HOST}/schema/jsonld?id=`+schemaDID);
    //get schema by tags
    http.get(`http://${__ENV.HOST}/schema/tags?tags=`+schemaTags);
    //get template by schema id
    http.get(`http://${__ENV.HOST}/rendering-template/`+schemaDID)
    //get template by template id
    //http.get('http://${__ENV.HOST}/rendering-template?id=')
};


