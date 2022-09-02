import path, { basename } from "path";

const file = "User/Athhar/contoh.txt";

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));