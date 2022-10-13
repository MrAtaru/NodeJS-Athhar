import { Url } from "url";

const rkrl = new URL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

rkrl.host = "www.smkassalaambandung.sch.id";
rkrl.searchParams.append("status","premium")

console.info(rkrl.toString());
console.info(rkrl.href);
console.info(rkrl.protocol);
console.info(rkrl.host);
console.info(rkrl.pathname);
console.info(rkrl.searchParams);