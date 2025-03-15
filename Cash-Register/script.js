let price = 1.87;
let cid = [
  ["PENNY", 0.33],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0.5],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
// code from freeCodeCamp, no touching

const showPrice = document.getElementById("price");
showPrice.innerHTML = "<h2>Price: " + price + "</h2>";

const drawer = document.getElementById("drawer");
const purchase = document.getElementById("purchase-btn");
const output = document.getElementById("output");
const inputCash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");

function updateDrawer() {
  drawer.innerHTML = "";
  const moneyTypes = [
    "Pennies",
    "Nickels",
    "Dimes",
    "Quarters",
    "Ones",
    "Fives",
    "Tens",
    "Twenties",
    "Hundreds",
  ];
  for (let i = 0; i < cid.length; i++) {
    let newEle = document.createElement("p");
    newEle.innerText = moneyTypes[i] + ": $" + cid[i][1];
    drawer.appendChild(newEle);
  }
}
updateDrawer();

function getTotal() {
  let total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }
  return total.toFixed(2);
}

function getChange(change) {
  const denom = [
    "Hundreds",
    "Twenties",
    "Tens",
    "Fives",
    "Ones",
    "Quarters",
    "Dimes",
    "Nickels",
    "Pennies",
  ];
  const denomAmount = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let amount = change;
  let count = 0;
  let cidCopy = [...cid];
  cidCopy.reverse();

  for (let i = 0; i < denom.length; i++) {
    count = 0;
    while (amount >= denomAmount[i] && cidCopy[i][1] > 0) {
      amount = (amount - denomAmount[i]).toFixed(2);
      cidCopy[i][1] = (cidCopy[i][1] - denomAmount[i]).toFixed(2);
      count += 1;
    }
    console.log(denom[i] + " : " + count);
  }
  if (amount > 0) {
    changeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
  } else {
    cidCopy = cidCopy.reverse();
    cid = [...cidCopy];
    updateDrawer();
  }
}

purchase.addEventListener("click", () => {
  if (inputCash.value < price) {
    alert("Customer does not have enough money to purchase the item");
    inputCash.value = "";
    return;
  }
  if (inputCash.value == price) {
    changeDue.innerHTML =
      "<p>No change due - customer paid with exact cash</p>";
    inputCash.value = "";
    return;
  }
  if (inputCash.value == "") {
    return;
  }
  getChange(inputCash.value - price);
  inputCash.value = "";
});
