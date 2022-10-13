import fs from "fs";
import Zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs.txt");
const result = Zlib.unzipSync(source);

console.info(result.toString());