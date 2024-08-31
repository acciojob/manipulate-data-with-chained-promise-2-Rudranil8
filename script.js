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

function processData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 1000);
  });
}

processData()
  .then(array => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(array.filter(num => num % 2 === 0)), 1000);
    });
  })
  .then(array => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(array.map(num => num * 2)), 1000);
    });
  })
  .then(result => {
    document.getElementById('output').innerText = result.join(', ');
  });