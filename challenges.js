const num = 7;
if (num >= 11) {
  console.log("High");
} else if (num < 3) {
  console.log("Low");
} else if (num === 7) {
  console.log("Exact");
} else {
  console.log("Medium");
}

//challenge 2
for (let i = 1; i <= 30; i++) {
  if (i < 10) {
    console.log("A");
  } else if (i > 20) {
    console.log("C");
  } else {
    console.log("B");
  }
}

// challenge 3

const farewell = (name) => {
  return `Goodbye forever, ${name}`;
};

console.log(farewell("Shubhra"));
// challenge 4
const printingOutput = (start, stop, final) => {
  for (let i = start; i < stop; i++) {
    console.log(i);
  }
  console.log(final);
};
printingOutput(1, 10, "Blastoff!!");

//challenge 5
const countTarget = (arr, target) => {
  let count = 0;
  let success = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
      success = true;
    }
    return {
      success: success,
      count: count,
    };
  }
};
console.log(countTarget([1, 2, 3, 2, 1], 2));
