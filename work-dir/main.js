let money = prompt('Ваш бюджет на месяц?', 0),
    time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExprnses: {},
    income: [],
    savings: false
};

let ques_expenses = prompt('Введите обязательную статью расходов в этом месяце'),
    answ_expenses = prompt('Во сколько обойдется?');

appData.expenses[ques_expenses] = answ_expenses;

alert('Ваш бюджет на 1 день: ' + (appData.budget / 30));
console.log(appData);

