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
}*/
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
}
