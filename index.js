// let string = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML == "C") {
//       string = "";
//       document.querySelector("input").value = string;
//     } else {
//       string = string + e.target.innerHTML;
//       document.querySelector("input").value = string;
//     }
//   });
// });

let outputScreen = document.getElementById("input");

function operation(num){
    outputScreen.value += num;

}
function calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert("Invalid Input")
    }
}
function Clear(){
    outputScreen.value = ""
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1)
}