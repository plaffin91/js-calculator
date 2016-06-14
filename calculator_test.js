function calcNumbers(calcMethod) { // calcMethod = the value of the button
	var firstNumber = document.getElementById("firstInput").value; // first input box
	var secondNumber = document.getElementById("secondInput").value; // second input box
	if (isNaN(firstNumber) || isNaN(secondNumber)) { // stop the calculation if there is a non-number input
		window.alert("Invalid input!");
	} else {
		switch (calcMethod) {
		case "+": // if you clicked add
			document.getElementById("finalOutput").innerHTML = parseInt(firstNumber) + parseInt(secondNumber);
			break;
		case "-": // if you clicked subtract
			document.getElementById("finalOutput").innerHTML = parseInt(firstNumber) - parseInt(secondNumber);
			break;
		case "*": // if you clicked multiply
			document.getElementById("finalOutput").innerHTML = parseInt(firstNumber) * parseInt(secondNumber);
			break;
		case "/": // if you clicked divide
			document.getElementById("finalOutput").innerHTML = parseInt(firstNumber) / parseInt(secondNumber);
			break;
		default: // should never run
			document.getElementById("finalOutput").innerHTML = "ERROR LMAO";
		};	
	};	
};