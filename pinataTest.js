// const pinataSDK = require('@pinata/sdk');

import pinataSDK from "@pinata/sdk";

const key1 = "";
const key2 = "";

const pinata = new pinataSDK(key1, key2);

// pinata.testAuthentication().then((result) => {
//     //handle successful authentication here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });

const sourcePath = './geo_1.png';
pinata.pinFromFS(sourcePath).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});