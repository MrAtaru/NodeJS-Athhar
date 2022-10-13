import https from "https";

const endpoint = "https://eoghfueaileaojp.m.pipedream.net";
const request = https.request(endpoint,{
    method: "POST",
    header: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
},(response) => {
    response.addListener("data",(data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Muhammad Athhar",
    lastName: "Malika Putra"
})

request.write(body);
request.end();