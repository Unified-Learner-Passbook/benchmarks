import http from "k6/http";
import { Options } from "k6/options";

export let options:Options = {
    scenarios: {
        get_scenario:{
            executor: 'shared-iterations',

            startTime: '0s',
            gracefulStop: '5s',
            tags: {serviceTag: 'Cred-Schema'},

            vus: 50,
            iterations: 1000,
            maxDuration: '100s',

            exec: 'default'
        }

    }
};

export default () => {
    http.get(`http://${__ENV.HOST}/did/resolve/did:ulp:0bc51dad-885c-44a8-8e95-e3d160060bd2`)
}