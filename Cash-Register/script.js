let price = 1;
let cid = [
  ["PENNY", 0.02],
  ["NICKEL", 0.05],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
//Code from freecodecamp, no touching

//display price on page
const showPrice = document.getElementById("price");
showPrice.innerText = "Price: $" + price.toFixed(2);

const purchase = document.getElementById("purchase-btn");
const inputCash = document.getElementById("cash");
let changeDue = document.getElementById("change-due");
const drawer = document.getElementById("drawer");

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
  for (let i = 0; i < moneyTypes.length; i++) {
    let drawerEle = document.createElement("p");
    drawerEle.innerText = moneyTypes[i] + ": $" + Number(cid[i][1]).toFixed(2);
    drawer.appendChild(drawerEle);
  }
}
updateDrawer();

function getTotal() {
  let total = 0;
  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }
  return parseFloat(total).toFixed(2);
}

function getChange(change) {
  let total = change;
  let count = 0;
  let cidCopy = [...cid];
  cidCopy = cidCopy.reverse();
  const denomAmount = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let changeText = "<p id='showStatus'>Status: OPEN</p>";

  for (let i = 0; i < denomAmount.length; i++) {
    count = 0;
    while (Number(total).toFixed(2) >= denomAmount[i] && cidCopy[i][1] > 0) {
      total = (total - denomAmount[i]).toFixed(2);
      cidCopy[i][1] = (cidCopy[i][1] - denomAmount[i]).toFixed(2);
      count += 1;
    }
    if (count > 0) {
      changeText +=
        "<p>" + cidCopy[i][0] + ": $" + denomAmount[i] * count + "</p>";
    }
    changeDue.innerHTML = changeText;
  }
  if (total > 0) {
    changeDue.innerHTML = "<p>Status: INSUFFICIENT_FUNDS</p>";
  } else {
    cidCopy = cidCopy.reverse();
    cid = [...cidCopy];
    updateDrawer();
  }
}

purchase.addEventListener("click", () => {
  let cash = inputCash.value;
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (cash == price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
    return;
  }
  getChange(cash - price);

  let cidTotal = getTotal();
  console.log(cidTotal);
  if (cidTotal == 0) {
    document.getElementById("showStatus").innerText = "Status: CLOSED";
  }
});
