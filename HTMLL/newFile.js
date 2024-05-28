document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally


    // Incrementar el contador de intentos
    attempts++;

    // Verificar si se ha alcanzado el límite de intentos
    if (attempts > 3) {
        document.getElementById('login-message').innerText = 'Has excedido el límite de intentos de inicio de sesión';
        document.getElementById('username').disabled = true; // Deshabilitar el campo de usuario
        document.getElementById('password').disabled = true; // Deshabilitar el campo de contraseña
        document.querySelector('button[type="submit"]').disabled = true; // Deshabilitar el botón de enviar
        return;
    }


    function registroCalculator() {
        document.getElementById('inicioCalculator').style.display = 'none';
        document.getElementById('inicioCalculator').style.display = 'block';
    }


    document.getElementById('registration-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally


        // Obtener los valores del formulario
        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var age = document.getElementById('age').value;

        // Generar el correo electrónico
        var email = firstname.toLowerCase() + '.' + lastname.toLowerCase() + age + '@example.com';

        // Mostrar el mensaje de registro
        document.getElementById('registration-message').innerText = 'Correo electrónico generado: ' + email;
    });

    // Obtener los valores del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Realizar validación simple
    if (username === 'usuario' && password === 'contraseña') {
        document.getElementById('login-message').innerText = 'Inicio de sesión exitoso';
    } else {
        document.getElementById('login-message').innerText = 'Usuario o contraseña incorrectos. Intento ' + attempts + ' de 3';
    }
});
