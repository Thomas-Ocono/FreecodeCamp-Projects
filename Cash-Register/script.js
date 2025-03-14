let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];
// code from freeCodeCamp, no touching

const showPrice = document.getElementById("price");
showPrice.innerHTML = "<h2>Price: " + price + "</h2>";

const drawer = document.getElementById("drawer");
const purchase = document.getElementById("purchase-btn");
const output = document.getElementById("output");

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

purchase.addEventListener("click", () => {});
