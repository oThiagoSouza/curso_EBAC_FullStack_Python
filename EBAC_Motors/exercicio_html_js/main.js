var n1 = document.querySelector('#num1');
var n2 = document.querySelector('#num2');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    let num1 = n1.valueAsNumber;
    let num2 = n2.valueAsNumber;

if (num2 > num1 === false) {
    alert('O segundo valor precisa ser maior')
} else {
    alert('Tudo certo por aqui')
}
})