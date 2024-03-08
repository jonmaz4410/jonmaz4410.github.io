// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function(event) {
  
    
    //Get the reference to all elements for input and output
  var num1Input = document.getElementById("num1");
  var num2Input = document.getElementById("num2");
  var num3Input = document.getElementById("num3");
  var outputMean = document.getElementById("outputMean");
  var outputMin = document.getElementById("outputMin");
  var outputMax = document.getElementById("outputMax");
  var outputMedian = document.getElementById("outputMedian");
  var outputRange = document.getElementById("outputRange");
  var calcBtn = document.getElementById("calc");

    //Add a listener for when the calc button is clicked
  calcBtn.addEventListener("click", function() {

      //Store the numbers as floats for calculations
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    var num3 = parseFloat(num3Input.value);

      //Perform output calculations
    var mean = (num1 + num2 + num3) / 3;
    var min = Math.min(num1, num2, num3);
    var max = Math.max(num1, num2, num3);
    var sortedNums = [num1, num2, num3].sort(function(a, b) { return a - b; });
    var median = sortedNums[1];
    var range = max - min;
      
      //Output values to the spot reserved for them in the HTML

    outputMean.value = mean.toFixed(2);
    outputMin.value = min;
    outputMax.value = max;
    outputMedian.value = median;
    outputRange.value = range;
  });

});