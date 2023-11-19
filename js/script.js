document.addEventListener('DOMContentLoaded', () => {
    const listaUsuarios = document.getElementById('listaUsuarios');

    // Obtiene datos simulados de usuarios desde JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Agrega una edad aleatoria y una imagen a cada usuario
            const usuariosConEdadEImagen = users.map(usuario => ({
                ...usuario,
                edad: Math.floor(Math.random() * 40) + 16, // Edad aleatoria entre 18 y 67 años
                imagen: `assets/img/${usuario.id}.jpeg` // Ruta de la imagen basada en el ID del usuario
            }));

            // Muestra los detalles de los usuarios en la lista HTML
            usuariosConEdadEImagen.forEach(usuario => {
                const li = document.createElement('li');
                li.classList.add('usuario');
                li.innerHTML = `
                    <img src="${usuario.imagen}" alt="Imagen de ${usuario.name}">
                    <strong>${usuario.name}</strong>
                    <p>Username: ${usuario.username}</p>
                    <p>Email: ${usuario.email}</p>
                    <p>Edad: ${usuario.edad}</p>
                    <p>Phone: ${usuario.phone}</p>
                    <p>Catchphrase:<p> ${usuario.company.catchPhrase}</p>
                    <p>City.Address:<p> ${usuario.address.city}</p>
                   
                 `;
                listaUsuarios.appendChild(li);
            });
        })
        
});

