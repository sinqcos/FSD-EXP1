let balance = 0;

const balanceEl = document.getElementById("balance");
const amountEl = document.getElementById("amount");
const messageEl = document.getElementById("message");

function updateBalance() {
  balanceEl.textContent = `Balance: $${balance}`;
}

function getAmount() {
  return Number(amountEl.value);
}

function showMessage(text, color) {
  messageEl.textContent = text;
  messageEl.style.color = color;
}

function deposit() {
  const amount = getAmount();

  if (amount <= 0 || isNaN(amount)) {
    showMessage("Invalid amount!", "red");
    return;
  }

  balance += amount;
  updateBalance();
  showMessage("Deposit successful", "green");
  amountEl.value = "";
}

function withdraw() {
  const amount = getAmount();

  if (amount <= 0 || isNaN(amount)) {
    showMessage("Invalid amount!", "red");
    return;
  }

  if (amount > balance) {
    showMessage("Insufficient balance!", "red");
    return;
  }

  balance -= amount;
  updateBalance();
  showMessage("Withdrawal successful", "green");
  amountEl.value = "";
}
