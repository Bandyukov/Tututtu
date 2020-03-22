let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    rect = document.querySelectorAll('.rect'),
    oneRect = document.querySelector('.rect'),
    wrapper = document.querySelector('.wrapper');

console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(circle[2]);
console.log(rect[1]);
console.log(oneRect);

box.style.backgroundColor = 'pink';
for (let i = 0; i < btn.length; i++) {
    btn[i].style.borderRadius = '100%';
}


/*rect.forEach(function(item, i, arr) {
    item.style.backgroundColor = 'white';
});*/ // Этот способ подходит только для document.querySelectorAll()

let div = document.createElement('div'),
    text = document.createTextNode('Here we go again...');

div.classList.add('black');

//div.innerHTML = "<h1>hello guys</h1>"; вставить текст внутрь чего-то
//div.textContent = "hello gyus"; // тоже самое, но тут именно текст добавится

//document.body.appendChild(div); // добавляет в самый конец body
//wrapper.appendChild(div); // обавляем в конец класса wrapper
//document.body.insertBefore(div, rect[1]); // всталяем элемент перед rect[1]
//document.body.removeChild(btn[0]); // удаляем элемент в body
//wrapper.removeChild(circle[1]);
//document.body.replaceChild(btn[1], rect[0]); // заменяем первый элемент на второйб который удалится

console.log(div);