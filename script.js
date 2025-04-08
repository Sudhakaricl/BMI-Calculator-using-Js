const form = document.getElementById("myform");
const resultText = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultText.textContent = "Please enter valid weight and height.";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  
  resultText.textContent = `Your BMI is ${bmi}`;
});
