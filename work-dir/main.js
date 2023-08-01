let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", 0);
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", 0);
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExprnses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    do {
      question = confirm("Хотите добавить обязательную статью расходов?");
      if (question) {
        let ques_expenses = prompt(
            "Введите обязательную статью расходов в этом месяце"
          ),
          answ_expenses = +prompt("Во сколько обойдется?");
  
        if (
          typeof ques_expenses === "string" &&
          typeof answ_expenses === "number" &&
          typeof ques_expenses != null &&
          typeof answ_expenses != null &&
          ques_expenses != "" &&
          answ_expenses != ""
        ) {
          appData.expenses[ques_expenses] = answ_expenses;
        }
      } else break;
    } while (true);
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let answ_expenses = prompt(
        "Введите статью необязательного расхода №" + (i + 1)
      );
  
      if (
        typeof answ_expenses != null &&
        answ_expenses != "" &&
        typeof answ_expenses === "string"
      ) {
        appData.optionalExprnses[i] = answ_expenses;
      } else i--;
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log('Ошибка');
    }
  },
  checkSavings: function () {
    if (appData.savings) {
      let save = +prompt("Какова сумма накопелний?"),
        percent = +prompt("Под какой процент?");
  
      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseIncome: function () {
    let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
    do{
      if (typeof(items) === 'string' && typeof(items) != null && items != '') {
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        let message = 'Способы заработка: ';
        appData.income.forEach((item, index) => {
          message += ((index + 1) + ': ' + item + ', ');
        });
        alert(message);
        break;
      }
    } while (true);
  }
};

console.log('Наша программа включает в себя данные: ');
for (let i in appData) {
  console.log(i + ': ' + appData[i]);
}