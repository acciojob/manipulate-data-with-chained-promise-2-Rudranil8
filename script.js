//your JS code here. If required.
// let arr=[1, 2, 3, 4];
// let s=arr.filter((x)=>x%2===0);
// let x=document.getElementById("output");
function getNumbers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}