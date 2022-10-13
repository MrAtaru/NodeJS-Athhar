import util from "util";

const firstName = "Muhammad Athhar";
const lastName = "Malika Putra";

//tidak memakai util
console.info(`Hello ${firstName} ${lastName}`);
//memakai util
console.info(util.format("Hello %s %s", firstName , lastName));

const person = {
    firstName: "Muhammad Athhar",
    lastName: "Malika Putra"
};

//tidak memakai util
console.info(`Person : ${JSON.stringify(person)}`);
//memakai util
console.info(util.format("Person : %j", person));