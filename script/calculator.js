const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnButton) => {
    if(btnButton === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    } else if(btnButton === "AC") {
        output = "";
    } else if(btnButton === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if(output === "" && specialChars.includes(btnButton)) return;
        output += btnButton;
    }

    display.value = output;
}

buttons.forEach((button) =>{
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})