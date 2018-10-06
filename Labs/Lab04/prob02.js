const os = require("os");
const fs = require("fs");
const { from } = require("rxjs");

var checkSystem = function() {
  console.log("Checking your system…");
  return new Promise(function(resolve, reject) {
    if (os.cpus().length >= 2) {
      if (os.freemem() >= 4e9) {
        resolve("System ischecked successfully. :)");
      } else {
        reject("This app needs at least 4 GB of RAM!!! :(");
      }
    } else {
      reject("Processor is not supported! :(");
    }
  });
};

// 1st i'll use promise
checkSystem()
  .then(msg => console.log(msg))
  .catch(error => console.log(error));

// Then using obervable
const checkByObservable = from(checkSystem());
checkByObservable.subscribe(
  msg => console.log(msg),
  error => console.log(error)
);
