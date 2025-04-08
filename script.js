const form = document.getElementById("myform");
const resultText = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  // Input validation
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultText.textContent = "Please enter valid weight and height.";
    return;
  }

  // Convert height to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Determine category
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Display result
  resultText.textContent = `Your BMI is ${bmi} (${category})`;
});
