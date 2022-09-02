function samplePromise(){
    return Promise.resolve("Athhar");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();