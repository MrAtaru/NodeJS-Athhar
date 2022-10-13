import fs from "fs";
import Zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs");
const result = Zlib.gzipSync(source);

fs.writeFileSync("zlib-compress.mjs.txt", result);