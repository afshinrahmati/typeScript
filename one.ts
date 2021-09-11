var button = document.querySelector("button");
//!==> never null
// as HTMLInputElement ==> type innerHtml
var input1 = document.getElementById("num1")! as HTMLInputElement;
var input2 = document.getElementById("num2")! as HTMLInputElement;
function add(num1: number, num2: number) {
    return num1 + num2;
}
// + ==> change string to number
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});