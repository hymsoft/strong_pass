(function() {
    console.clear()

    // Variables y objetos generales
    let app = document.getElementById('app')
    let inputCaracteres = document.getElementById('password-length')
    let configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        simbolos: true,
        numeros: true,
        mayusculas: true,
        minusculas: true
    }
    let caracteres = {
        simbolos: '\ ! · $ % & / ( ) = ? ¿ @ # ~ ¡ [ ] + * { } - _',
        numeros: '0 1 2 3 4 5 6 7 8 9',
        mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    }

    // Eventos
    app.addEventListener('submit', e => e.preventDefault())
    app.elements.namedItem('btn-more').addEventListener('click', () => btnMore())
    app.elements.namedItem('btn-minus').addEventListener('click', () => btnMinus())
    app.elements.namedItem('symbols').addEventListener('click', () => btnToggle(symbols, 'simbolos'))
    app.elements.namedItem('numbers').addEventListener('click', () => btnToggle(numbers, 'numeros'))
    app.elements.namedItem('upper_case').addEventListener('click', () => btnToggle(upper_case, 'mayusculas'))
    app.elements.namedItem('btn-generate').addEventListener('click', () => generatePassword())
    app.elements.namedItem('input-password').addEventListener('click', () => copyPassword())


    // Funciones
    function btnMore() { inputCaracteres.value = ++configuracion.caracteres }

    function btnMinus() {
        (configuracion.caracteres > 4) ? inputCaracteres.value = --configuracion.caracteres: ""
    }

    function btnToggle(elemento, key) {
        elemento.classList.toggle('false');
        elemento.childNodes[1].classList.toggle('fa-check')
        elemento.childNodes[1].classList.toggle('fa-times')
        configuracion[key] = !configuracion[key]
    }

    function generatePassword() {
        alert('Password Creada')
    }
}())