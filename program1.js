//___FUNCTIONS___

function showFirstMessage(text)
{
    alert(text);
}

function Calc(a, b)
{
    return a + b;
}

let sqr = (a) => a * a;
let q = sqr(6);
console.log(q);

function power (a, n)
{
    if (n == 0) {return 1;}
    return a * power(a, n - 1);
}
console.log(power(7, 6));

showFirstMessage("Hello there");
console.log(Calc(3, 4));

let str = "yolo", tw = "12.4";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//console.log(Math.round(tw));
console.log(parseInt(tw));
console.log(parseFloat(tw));


//___CALLBACK___

function first()
{
    setTimeout( function() {
        console.log(1);
        second();
    }, 500);
}
function second()
{
    console.log(2);
}
first();


//___OBJECTS___

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);
options.bool = false;
options.colcors = {
    border: "black",
    background: "red",
};
console.log(options);
delete options.bool;
console.log(options);
for (let now in options)
{
    console.log("Свойства " + now + " имеет значеине " + options[now]);
}
console.log(Object.keys(options).length);

//___ARRAYS___

let arr = [1, 6, "three", 0, 66];
var arr2 = arr.slice(); // создать копию
arr.pop(); // удвлить послелний
arr.splice(1, 1); // удалить итый
console.log(arr);
console.log(arr2);
arr.push(99); // доавить в конец
console.log(arr);
arr.shift(); // удалить первый
console.log(arr);
arr.unshift(33); // добавить в начало
console.log(arr);

for (var i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
arr.forEach(function(item, i, r){
    console.log(i + ': ' + item + " (массив " + r + ")");
});
var r = [2, 8, 0, 5, 7, 4];
for (var now of r)
{
    console.log(now);
}

let ans = prompt("", ""), a = [];
a = ans.split(", ");
console.log(a);

let h = ['sbr', 'ergtw', 'vre', 'itoub'], k = h.join(', ');
console.log(h);
console.log(k);
h.sort();
console.log(h);
let p = [4, 8, -3, 9, 0];
p.sort(function nm(a, b){return a - b;});
console.log(p);


//___OOP___

let soldier = {health: 400, armor: 200},
    john = {health: 100};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

/*if (2 * 4 == 9) {
    console.log("That's right!");
}
else {
    console.log("That's wrong!");
}
var n = 10;
//(n == 10) ? console.log("It is 10") : console.log("not 10");

switch (n) {
    case n < 9 : console.log("Less than needed");
    break;
    case n > 11 : console.log("More than needed");
    break;
    case 10 : console.log("That's ok");
    break;
    default : console.log("Something is wrong......");
}
var n = 10;
while (n < 15)
{
    console.log(n);
    n++;
}

for (var i = 1; i < n; i++)
{
    if (i % 2 != 0) 
    {
        continue;
    }
    console.log(i);
}
for (i = 0; i < n; i++)
{
    if (i == 7)
    {
        break;
    }
    console.log(i);
}
for (i = 0; i < n; i++)
{
    if (i % 2 == 0)
    {
        console.log(i);
    }
}*/

let poi1 = [1, 2, 3];
let poi2 = [1, 2, 3];
console.log("Ёжик" > "аблоко");