//Prompt for which calculator

var answer = prompt("Which calculator do you want to use? Enter (b) for basic, (a) for advanced, (bmi) to calculate your Body Mass Index, or (q) to quit.");

while(answer !== "b" && answer !== "a" && answer !== "q" && answer !== "bmi" && answer !== null) {
  answer = prompt("Invalid selection. Which calculator do you want to use? Enter (b) for basic, (a) for advanced, (bmi) to calculate your Body Mass Index, or (q) to quit.");
};

console.log(answer)

//Basic Calculator
if (answer === "b") { 
  var basicRepeat = true;
  while(basicRepeat === true) {
    var basicFunction = prompt("Do you want to add (+), subtract (-), divide (/) or multiply (*)?");

    while(basicFunction !== "+" && basicFunction !== "-" && basicFunction !== "/" && basicFunction !== "*"){
      basicFunction = prompt("You must select add (+), subtract (-), divide (/) or multiply (*).");
    }

    var firstNo = parseFloat(prompt("What is your first number?"));
    while (isNaN(firstNo)) {
      firstNo = parseFloat(prompt("You must enter a number."));
    };

    var secondNo = parseFloat(prompt("What is your second number?"));
    while (isNaN(secondNo)) {
      secondNo = parseFloat(prompt("You must enter a number."));
    }

    switch(basicFunction) {
      case "+" : alert("Your answer is: " + (Math.round((firstNo + secondNo) * 100)/100));
      break;
      case "-" : alert("Your answer is: " + (Math.round((firstNo - secondNo) * 100)/100));
      break;
      case "/" : alert("Your answer is: " + (Math.round((firstNo / secondNo) * 100)/100));
      break;
      case "*" : alert("Your answer is: " + (Math.round((firstNo * secondNo) * 100)/100));
      break;
      default: alert("Invalid selection!");
    }
    basicRepeat = confirm("Do you want to use the basic calculator again? Select OK to use again or Cancel to exit.");  
  }
}
//Advanced calculator
else if (answer === "a") {
  var advancedRepeat = true;
  while (advancedRepeat === true) {
    var advancedFunction = prompt("Do you want square root (r) or power (p) your number?");
    if (advancedFunction === "r") {
      var firstNo = parseFloat(prompt("What is your number?"));
      while (isNaN(firstNo)) {
        firstNo = parseFloat(prompt("You must enter a number."));
      };
      alert("Your answer is: " + (Math.round((Math.sqrt(firstNo)) * 100)/100)); 
    }
    else if (advancedFunction === "p") {
      var firstNo = parseFloat(prompt("What is your number?"));
      while (isNaN(firstNo)) {
        firstNo = parseFloat(prompt("You must enter a number."));
      };
      var secondNo = parseFloat(prompt("What power do you want to raise your number to?"));
      while (isNaN(secondNo)) {
        secondNo = parseFloat(prompt("You must enter a number."));
      };
      alert("Your answer is: " + (Math.round((Math.pow(firstNo, secondNo)) * 100)/100)); 
    }
    
    else {
      alert("Invalid selection!");
    }
    advancedRepeat=confirm("Do you want to use the advanced calculator again? Click OK to use again or Cancel to exit."); 
  }
 }

 else if (answer === "bmi") { 
    var measureType = prompt("Enter (m) for Metric or (i) for Imperial?");
    if (measureType === "m") {
      var bmiRepeat = true;
      while(bmiRepeat === true) {
        var weight = parseFloat(prompt("What is your weight in kilograms?"));
        while (isNaN(weight)) {
          weight = parseFloat(prompt("You must enter a number."));
        };

        var height = parseFloat(prompt("What is your height in meters?"));
        while (isNaN(height)) {
          height = parseFloat(prompt("You must enter a number."));
        };

        var bmi = (Math.round((weight/(height*height)) * 100)/100);
    
        if (bmi <= 15) {
          alert("Your bmi is " + bmi + " which is very severely underweight.");
        }
        else if (bmi <= 16) {
          alert("Your bmi is " + bmi + " which is severely underweight.");
        }
        else if (bmi <= 18.5) {
          alert("Your bmi is " + bmi + " which is underweight.");
        }
        else if (bmi <= 25) {
          alert("Your bmi is " + bmi + " which is normal.");
        }
        else if (bmi <= 30) {
          alert("Your bmi is " + bmi + " which is overweight.");
        }
        else {
          alert("Your bmi is " + bmi + " which is obese.");
        }
      bmiRepeat = confirm("Do you want to use the bmi calculator (metric) again? Click OK to use again or Cancel to exit."); 
      }
     }

    else if (measureType === "i") {
      var bmiRepeat = true;
      while(bmiRepeat === true) {
        var weight = parseFloat(prompt("What is your weight in pounds (lbs)?"));
        while (isNaN(weight)) {
          weight = parseFloat(prompt("You must enter a number."));
        };

        var height = parseFloat(prompt("What is your height in inches?"));
        while (isNaN(height)) {
          height = parseFloat(prompt("You must enter a number."));
        };

        var bmi = (Math.round(((weight/(height*height))*703) * 100)/100);
    
        if (bmi <= 15) {
          alert("Your bmi is " + bmi + " which is very severely underweight.");
        }
        else if (bmi <= 16) {
          alert("Your bmi is " + bmi + " which is severely underweight.");
        }
        else if (bmi <= 18.5) {
          alert("Your bmi is " + bmi + " which is underweight.");
        }
        else if (bmi <= 25) {
          alert("Your bmi is " + bmi + " which is normal.");
        }
        else if (bmi <= 30) {
          alert("Your bmi is " + bmi + " which is overweight.");
        }
        else {
          alert("Your bmi is " + bmi + " which is obese.");
        }
      bmiRepeat = confirm("Do you want to use the bmi calculator (imperial) again? Click OK to use again or Cancel to exit."); 
      }
     }

    else {
      alert("Invalid selection.")
    }

    }
else if (answer === "q" || answer === null) {
  alert("Goodbye!");
}