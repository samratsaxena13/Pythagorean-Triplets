var inputVal = 0;
var firstNumVal = 0;
var secondNumVal = 0;
var thirdNumVal = 0;
var answerVal = "";
var explanationVal = "";
var formulaTxt = "2x, x² - 1, x² + 1";

function calculateTriplet() {
    inputVal = document.getElementById("inputComp").value;
    firstNumVal = 2 * inputVal;
    secondNumVal = inputVal * inputVal - 1;
    thirdNumVal = inputVal * inputVal + 1;
    answerVal = firstNumVal + ", " + secondNumVal + ", " + thirdNumVal;
    document.getElementById("outputLbl").innerHTML = answerVal;

    explanationVal = 2 + " x " + inputVal + ", " + inputVal + "² - 1, " + inputVal + "² + 1";
    document.getElementById("explanationBox").innerHTML = 
    formulaTxt + 
    "\n ---------------------------------- \n" + 
    explanationVal + 
    "\n ---------------------------------- \n" + 
    answerVal;
}