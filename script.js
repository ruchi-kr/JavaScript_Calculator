// this function is linked to input fields using onchange and oninput.
function clearResult() {
    document.getElementById('answer').value = " ";
    document.getElementById('success').style.display = "none";
    document.getElementById('undef').style.display = "none";
    document.getElementById('warning1').style.display = "none";
    document.getElementById('warning2').style.display = "none";
    document.getElementById('warning3').style.display = "none";
    document.getElementById('useme').style.display = "none";

}
// this function is linked to submit button using onclick

function calculate() {
    var value1 = parseInt(document.getElementById('num1').value);
    var value2 = parseInt(document.getElementById('num2').value);
    var op = document.getElementById('operator').value;

    // to check if input and operator field is blank or not

    if ((document.getElementById('num1').value == "" || document.getElementById('num2').value == "") && op === "select") {

        document.getElementById('warning1').style.display = "block";
        document.getElementById('useme').style.display = "none";

    }
    // To check if values field is blank or not

    else if (document.getElementById('num1').value == "" || document.getElementById('num2').value == "") {
     
        document.getElementById('warning2').style.display = "block";

    }
    //used switch to go through all the operators one by one.
    else {
        switch (op) {

            case "+":
                document.getElementById('answer').value = value1 + value2;
                document.getElementById('success').style.display = "block";
                break;

            case "-":
                document.getElementById('answer').value = value1 - value2;
                document.getElementById('success').style.display = "block";
                break;

            case "*":
                document.getElementById('answer').value = value1 * value2;
                document.getElementById('success').style.display = "block";
                break;

            case "/":
                if (value2 == 0) {
                    document.getElementById('undef').style.display = "block";
                }
                else {
                    document.getElementById('answer').value = value1 / value2;
                    document.getElementById('success').style.display = "block";
                }
                break;

            default:
                document.getElementById('answer').value = " ";
                document.getElementById('warning3').style.display = "block";
                break;
        }
    }

}
// this function is linked to ac(all clear)button using onclick
function clearData() {
    document.getElementById('num1').value = " ";
    document.getElementById('num2').value = " ";
    document.getElementById('operator').value = "select";
    document.getElementById('answer').value = " ";
    document.getElementById('success').style.display = "none";
    document.getElementById('undef').style.display = "none";
    document.getElementById('warning1').style.display = "none";
    document.getElementById('warning2').style.display = "none";
    document.getElementById('warning3').style.display = "none";
    document.getElementById('useme').style.display = "block";
}


// jquery code for tooltip ONLY
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });