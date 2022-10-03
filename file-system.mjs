import fs from "fs/promises";

const buffer = await fs.readFile("temp.txt");

console.info(buffer.toString());

await fs.writeFile("temp.txt","Hello Nodejs");