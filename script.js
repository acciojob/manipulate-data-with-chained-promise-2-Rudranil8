// function getNumbers() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve([1, 2, 3, 4]);
//         }, 3000);
//       });
//     }
//     getNumbers().then(numbers => {
//       return numbers.filter(number => number % 2 === 0);
//     }).then(evenNumbers => {
//       return evenNumbers.map(number => number * 2);
//     }).then(finalNumbers => {
//       document.getElementById('output').innerText = finalNumbers.join(', ');
//     });

// function processData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve([1, 2, 3, 4]), 1000);
//   })
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(array.filter(num => num % 2 === 0)), 2000);
//     });
//   })
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(array.map(num => num * 2)), 3000);
//     });
//   });
// }

// processData().then(result => {
//   document.getElementById('output').innerText = result.join(', ');
// });

// function processData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve([1, 2, 3, 4]), 3000);
//   });
// }

// processData()
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(array.filter(num => num % 2 === 0)), 1000);
//     });
//   })
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(array.map(num => num * 2)), 2000);
//     });
//   })
//   .then(result => {
//     document.getElementById('output').innerText = result.join(', ');
//   });

// function processData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve([1, 2, 3, 4]), 1000);
//   });
// }

// processData()
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(array.filter(num => num % 2 === 0)), 1000);
//     });
//   })
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(array.map(num => num * 2)), 1000);
//     });
//   })
//   .then(result => {
//     document.getElementById('output').innerText = result.join(', ');
//   });

// function processData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve([1, 2, 3, 4]), 3000); // Change this to 3000
//   });
// }

// processData()
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() =>{
// 		 let ans= array.filter(num => num % 2 === 0)), 1000;
// 		document.getElementById('output').innerText = result.join(', ');
// 	  }
//     });
//   })
//   .then(array => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(array.map(num => num * 2)), 2000); // Change this to 2000
//     });
//   })
//   .then(result => {
//     document.getElementById('output').innerText = result.join(', ');
//   });

function manipulateArray(inputArray) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(inputArray);
        }, 3000);
    });
}
function filterOddNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredArray = array.filter(num => num % 2 === 0);
            resolve(filteredArray);
        }, 1000);
    });
}
 
// Function to multiply even numbers by 2 and update the output div after 2 seconds
function multiplyEvenNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedArray = array.map(num => (num % 2 === 0) ? num * 2 : num);
            resolve(multipliedArray);
        }, 2000);
    });
}
function updateOutputText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}
 
// Initial array
const inputArray = [1, 2, 3, 4];
 
// Chain promises to manipulate the array and update the output div
manipulateArray(inputArray)
    .then(filterOddNumbers)
    .then(multiplyEvenNumbers)
    .then(resultArray => {
        // Update the text of the HTML element with ID "output"
        updateOutputText("output", JSON.stringify(resultArray));
    })
    .catch(error => {
        console.error("Error:", error);
    });