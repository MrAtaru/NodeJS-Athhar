import net from "net";

const client = net.createConnection({
    port: 3000,
    host: "Localhost"
});

client.addListener("data",(data) => {
    console.info(`Receive data from server : ${data.toString()}`)
});

setInterval(() => {
    client.write("Athhar\r\n");
},2000);