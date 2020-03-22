var btn = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu');

console.log(menu);
console.log(btn);


let btnNew = document.createElement('li'),
    btnExchange = document.createElement('li');

btnNew.classList = 'menu-item';
btnExchange.classList = 'menu-item';

// добавляем пятый элемент
btnNew.textContent = "Пятый пункт";
menu.appendChild(btnNew);

//обмен
btnExchange.textContent = btn[1].textContent;
btn[1].textContent = btn[2].textContent;
btn[2].textContent = btnExchange.textContent;

// меняем фон
document.body.style.backgroundImage = "url(img/apple_true.jpg)";

// всталяем слово, а точнее полностью заменяем на дргую строчку
let h = document.querySelector('.title');
h.textContent = "Мы продаем только подлинную технику Apple";

// удаляем рекламу
document.querySelector('.adv').remove();

// спрашиваем и выводим ответ 
document.getElementById('prompt').textContent = prompt("Как вы отнситесь к технике apple?");
