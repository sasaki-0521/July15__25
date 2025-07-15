let box1= document.querySelector('.box1');
let body = document.body;

box1.addEventListener('click',()=>{
    alert('こんにちはがクリック済み');
    body.classList.add('blue');
    box2.classList.add('show');
});