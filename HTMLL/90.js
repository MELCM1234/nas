document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var message = document.getElementById('message');
    
    if (password !== confirmPassword) {
        message.textContent = 'Las contraseñas no coinciden';
        return;
    }

    var data = {
        username: username,
        email: email,
        password: password
    };

    fetch('https://tu-servidor.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .then(data => {
        message.style.color = 'green';
        message.textContent = 'Registro exitoso';
        console.log('Éxito:', data);
    })
    .catch((error) => {
        message.style.color = 'red';
        message.textContent = 'Error en el registro';
        console.error('Error:', error);
    });
});

