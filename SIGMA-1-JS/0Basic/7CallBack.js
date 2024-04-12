// setTimeout(() => {
//   console.log("HI BABY");
// }, 1000);

// const button = document.querySelector("button");

// addClickEventListener(button, () => {
//   console.log("clicked");
// });

// function addClickEventListener(element, callback) {
//   element.addEventListener("click", callback);
// }


//example of callback function 
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  function myDisplayer(result) {
    console.log("The result is: " + result);
  }
  
  myCalculator(5, 5, myDisplayer);
  

