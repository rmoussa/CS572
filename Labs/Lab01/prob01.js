//ES6
let uniqArr = [4, 1, 5, 7, 2, 3, 1, 4, 4, 6, 5, 2].filter(
  (elem, pos, arr) => pos === arr.indexOf(elem)
);
console.log(uniqArr);


//Promise
var promise = new Promise(function(resolve, reject) {
  if (arr.length) {
    resolve([...new Set(arr)]);
  } else {
    reject(Error("It empty"));
  }
});

function removeDuplicateByPromise(arr) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    if (arr.length) {
      // Resolve the promise with the unique array
      const uniq = [...new Set(arr)];
      resolve(uniq);
    } else {
      reject(Error("Array is Empty"));
    }
  });
}

removeDuplicateByPromise([1, 8, 2, 3, 4, 5, 6, 6, 6, 7, 8, 8]).then(
  function(result) {
    console.log("Success!", result);
  },
  function(error) {
    console.error("Failed!", error);
  }
);

//Async/Await
async function removeForMe(pureArr) {
  try {
    console.log("I'll try to remove deplicate");
    let result = await removeDuplicateByPromise(pureArr);
    console.log(result);
    console.log("Now Duplicates run away :)");
  } catch (error) {
    console.log(error);
  }
}
const arry = [1, 2, 3, 3, 4, 1, 2, 3, 5, 6, 7];
removeForMe(arry);
console.log("Finish");

//Observable