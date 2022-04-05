const fs = require("fs");
const csv = require("fast-csv");
const events = require("events");

const read_csv = (file) => {

  const e = new events.EventEmitter();
  let data = new Array();

  fs.createReadStream(file)
    .pipe(csv.parse({ headers: true }))
    .on("error", error => console.error(error))
    .on("data", row => data.push(row))
    .on("end", () => e.emit("end", data));
  
  return e;
}

module.exports = read_csv;
