// DOM elements
const balanceElement = document.getElementById("balance");
const transactionForm = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const transactionList = document.getElementById("transaction-list");

// Array to store transactions
let transactions = [];

// Load transactions from localStorage
function loadTransactions() {
  const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
  transactions = storedTransactions;
  updateUI();
}

// Save transactions to localStorage
function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Add a new transaction
function addTransaction(description, amount, type) {
  const transaction = {
    id: Date.now(),
    description,
    amount: +amount, // Convert to number
    type,
  };
  transactions.push(transaction);
  saveTransactions();
  updateUI();
}

// Update the UI
function updateUI() {
  // Calculate balance
  const balance = transactions.reduce((total, transaction) => {
    return transaction.type === "income" ? total + transaction.amount : total - transaction.amount;
  }, 0);
  balanceElement.textContent = `$${balance.toFixed(2)}`;

  // Clear transaction list
  transactionList.innerHTML = "";

  // Add transactions to the list
  transactions.forEach((transaction) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${transaction.description}</span>
      <span class="${transaction.type}">${transaction.type === "income" ? "+" : "-"}$${Math.abs(transaction.amount).toFixed(2)}</span>
      <button onclick="deleteTransaction(${transaction.id})">X</button>
    `;
    transactionList.appendChild(li);
  });
}

// Delete a transaction
function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  saveTransactions();
  updateUI();
}

// Event listener for the form
transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const description = descriptionInput.value;
  const amount = amountInput.value;
  const type = document.querySelector('input[name="type"]:checked').value;
  addTransaction(description, amount, type);
  descriptionInput.value = "";
  amountInput.value = "";
});

// Load transactions when the app starts
loadTransactions();