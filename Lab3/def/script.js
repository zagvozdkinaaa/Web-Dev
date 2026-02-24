const input = document.getElementById("num");
const btn = document.getElementById("check");
const result = document.getElementById("result");

function checkEvenOdd() {
  const n = Number(input.value);

  if (!Number.isFinite(n)) {
    result.textContent = "";
    return;
  }
  if (!Number.isInteger(n)) {
    result.textContent = "Enter an integer";
    return;
  }

  result.textContent = n % 2 === 0 ? "even" : "odd";
}

input.addEventListener("input", checkEvenOdd);
