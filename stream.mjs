import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Muhammad\n");
writer.write("Athhar\n");
writer.write("Malika\n");
writer.write("Putra\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data",(data) => {
    console.info(data.toString());
});