// Declare main variables
let money, time;

// Get main variables from user
function start() {
    money = + prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = + prompt("Ваш бюджет на месяц?");
    }
}
start();

// Define appData variable
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// Get MAIN expenses from user
function getExpenses() {
    for (let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце (" + (i+1) + ")"),
            b = + prompt("Сколько это будет стоить?");
        if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            console.log("New expense added (" + (i+1) + ")");
        } else {
            alert("Статья расходов указана неверно. Попробуйте ещё раз.");
            i--;
        }
    }
}
getExpenses();

// Get OPTIONAL expenses from user
function getOptExpenses() {
    for (let i=0; i<3; i++) {
        let a = prompt("Введите НЕобязательную статью расходов в этом месяце (" + (i+1) + ")"),
            b = + prompt("Сколько это будет стоить?");
        if ( typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.optionalExpenses[a] = b;
            console.log("New opt. expense added (" + (i+1) + ")");
        } else {
            alert("Статья расходов указана неверно. Попробуйте ещё раз.");
            i--;
        }
    }
}
getOptExpenses();

// Display moneyPerDay
function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на один день: " + appData.moneyPerDay);
}
detectDayBudget();

// Poor/OK/Rich
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minial wage");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
        console.log("Medium wage");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High wage");
    } else {
        console.log("Error occured...");
    }
}
detectLevel();

// Calculate savings interest
function checkSavings() {
    if (appData.savings == true) {
        let deposit = +prompt("Укажите объём сбережений"),
            interest = +prompt("Укажите годовую ставку по депозиту");
        // Display month income
        appData.monthIncome = deposit/100/12*interest;
        alert("Доход с депозита в месяц: " + appData.monthIncome);
    } 
}
checkSavings();