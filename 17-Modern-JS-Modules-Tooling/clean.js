const budget = [
  { value: 250, description: "Sold old TV 📺", user: "zain" },
  { value: -45, description: "Groceries 🥑", user: "zain" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "zain" },
  { value: 300, description: "Freelancing 👩‍💻", user: "zain" },
  { value: -1100, description: "New iPhone 📱", user: "zain" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "zain" },
];

const spendingLinmits = {
  zain: 1500,
  matilda: 100,
};
const getLimit = (user) => spendingLinmits?.[user] ?? 0;
const Expense = function (value, description, user = "zain") {
  user = user.toLowerCase();

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });
  }
};
Expense(10, "Pizza 🍕");
Expense(100, "Going to movies 🍿", "Matilda");
Expense(200, "Stuff", "Jay");

const checkExpense = function () {
  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) entry.flag = "limit";
  }
};
checkExpense();

const logBigExpenses = function (bigLimit) {
  let output = "";
  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(1000);
