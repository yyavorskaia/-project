let money = prompt("Ваш бюджет на месяц?", " " );
let time = prompt("Введите дату в формате YYYY-MM-DD", " " );

let appData = {
  moneyData: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let article = prompt("Введите обязательную статью расходов в этом месяце", " " );
let cost = prompt("Во сколько обойдется ?", " " );

let article1 = prompt("Введите обязательную статью расходов в этом месяце", " " );
let cost1 = prompt("Во сколько обойдется ?", " " );

appData.expenses[article] = cost;
appData.expenses[article1] = cost1;

alert(appData.moneyData / 30);
