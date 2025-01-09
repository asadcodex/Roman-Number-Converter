const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function convertToRoman() {
  const value = parseInt(input.value);
  if (input.value === "" || isNaN(value)) {
    output.innerText = "Please enter a valid number";
    return;
  } else if (value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  } else if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";
  let remaining = value;

  for (const { value: numValue, symbol } of romanNumerals) {
    while (remaining >= numValue) {
      result += symbol;
      remaining -= numValue;
    }
  }

  output.innerText = result;
}