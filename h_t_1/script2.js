
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {budget : money, timeData : time,
    expences : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

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
        while (typeof(a) !== 'string' || a == '' || a.length >= 50)
        {
            a = prompt("Введите обязательную статью расходов в этом месяце");
        }
        while (b == '')
        {
            b = prompt("Во сколько обходится?");
        }
        console.log(i + 1, "done");
        appData.expences[a] = b;
    }
}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

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
