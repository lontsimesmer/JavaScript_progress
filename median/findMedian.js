// Method 1

const arr = [0, 1, 2, 4, 6, 5, 3];

function findTheMedian(arr) {
  let array = arr.sort((a, b) => a - b);
  let n = array.length / 2;
  if (array.length % 2 === 0) {
    let median = (array[n - 1] + array[n]) / 2;
    console.log(median);
  } else if (array.length % 2 !== 0) {
    let median = Math.floor(n);
    console.log(median);
  }
}
findTheMedian(arr);

// Method 2

function getTheMedian(arr) {
  let array = arr.sort((a, b) => a - b);
  let n = array.length / 2;
  if (array.length % 2 == 0) {
    let m = (array[n - 1] + array[n]) / 2;
    console.log(m);
  } else {
    let m = Math.floor(n);
    console.log(m);
  }
}
getTheMedian([0, 1, 2, 4, 6, 5, 3]);
