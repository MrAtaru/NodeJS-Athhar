import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.addListener("message",(message) => {
    console.info(`thread-${threadId} receive from worker 1 : ${message}\n`);
})

worker2.addListener("message",(message) => {
    console.info(`thread-${threadId} receive from worker 2 : ${message}\n`);
})

worker1.postMessage(11);
worker2.postMessage(11);