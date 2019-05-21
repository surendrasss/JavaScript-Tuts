function calc(){

    //parseInt is used to convert the datatype from one form to the other
    //The value property sets or returns the value of the value attribute of a text field.
    //Get Element by ID helps us manipulate HTML tags with Id name
    var a = parseInt(document.getElementById('value1').value);
    var b = parseInt(document.getElementById('value2').value);

    var op = document.getElementById('operator').value;

    //This is a global variable
    var calculate;

    //conditional Statement

    if (op == "Add"){
        calculate = a+b;
    } else if (op == "Min") {
        calculate = a - b;
    } else if (op == "Mul") {
        calculate = a * b;
    } else if (op == "Div") {
        calculate = a/b;
    }


    //displaying the result in console and Html
    console.log(calculate);
    document.querySelector('#result').innerHTML = calculate;
}