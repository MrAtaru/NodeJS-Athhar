function samplePromise(){
    return Promise.resolve("Athhar");
}


    const name = await samplePromise();
    console.info(name);
