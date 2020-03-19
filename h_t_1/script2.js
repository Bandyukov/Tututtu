var money, time;

function strart() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
 

//__MAIN__//

strart();

var appData = {budget: money, timeData: time,
    expences: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpences: function()
    {
        for (var i = 0; i < 2; i++)
        {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("ВО сколько обходится?");

            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50)
            {
                console.log(i + 1, "done");
                appData.expences[a] = b;
            }
            else
            {
                i -= 1;
            }
        }
    },
    detectDayBudget: function()
    {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        console.log(appData.moneyPerDay);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function()
    {
        if( appData.moneyPerDay < 100)
        {
            console.log("Минимальный уровень достатка");
        }
        else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000)
        {
            console.log("Средний уровень достатка");
        }
        else if (appData.moneyPerDay >= 2000)
        {
            console.log("Высокий уровень достатка");
        }
        else
        {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function()
    {  
        if (appData.savings)
        {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save / 12 * (percent / 100); 
        alert("Доход в месяц с вашего депозиат: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function()
    {
        for (let j = 0; j < 3; j++)
        {
            let answer = prompt("Статья необязательных расходов?");
    
            appData.optionalExpenses[j + 1] = answer;
        }
    },
    chooseIncome: function()
    {
        let items = prompt("Что принесёт дополнительный доход?");

        while (items === 'string' || items == "" || items == null)
        {
            items = prompt("Что принесёт дополнительный доход?");
        }

        appData.income = items.split(', ');
        appData.income.push(prompt("Может что-то ещё?"));
        appData.income.sort();

        appData.income.forEach(function(item, i){console.log(i + 1 + ': ' + item);});
    }, 
    explaining: function()
    {
        console.log("Наша программа включает в себя данные: ");
        for (var now in appData)
        {
            console.log(now);
        }
    }
};
