const { Worker } = require('worker_threads');
const worker_detectDMrequest = new Worker('./detectDMrequest.js');
const worker_autoFollow = new Worker('./autoFollow.js');