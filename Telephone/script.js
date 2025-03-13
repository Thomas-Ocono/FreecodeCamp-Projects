const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const userInput = document.getElementById("user-input");

check.addEventListener("click", () => {
  let input = userInput.value;
  let isValid = false;

  if (input == "") {
    alert("Please provide a phone number");
  }
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (regex.test(input)) {
    isValid = true;
  }

  if (isValid) {
    let result = document.createElement("h2");
    result.innerHTML = "Valid US number: " + input;
    results.appendChild(result);
  } else {
    let result = document.createElement("h2");
    result.innerHTML = "invalid US number: " + input;
    results.appendChild(result);
  }
});
clear.addEventListener("click", () => {
  results.innerHTML = "";
});
