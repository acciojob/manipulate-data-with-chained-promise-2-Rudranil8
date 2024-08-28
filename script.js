//your JS code here. If required.
// let arr=[1, 2, 3, 4];
// let s=arr.filter((x)=>x%2===0);
// let x=document.getElementById("output");
// function getNumbers() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4]);
//     }, 3000);
//   });

getNumbers()
.then(numbers => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // filter out odd numbers
      const evenNumbers = numbers.filter(number => number % 2 === 0);
      resolve(evenNumbers);
    }, 1000);
  });
})
.then(evenNumbers => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // multiply even numbers by 2
      const multipliedNumbers = evenNumbers.map(number => number * 2);
      resolve(multipliedNumbers);
    }, 2000);
  });
})
.then(result => {
  // update the HTML element with the result
  document.getElementById('output').innerHTML = result.join(', ');
});
}