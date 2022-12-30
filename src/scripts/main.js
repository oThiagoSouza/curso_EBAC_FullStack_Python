document.addEventListener('DOMContentLoaded', function(e){
    
    document.getElementById('num-aleatorio').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('aleatorio').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        alert(numeroAleatorio);
    })
})