document.addEventListener('DOMContentLoaded', () => {
    const listaUsuarios = document.getElementById('listaUsuarios');

    
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
        
            const usuariosConEdadEImagen = users.map(usuario => ({
                ...usuario,
                edad: Math.floor(Math.random() * 40) + 16, 
                imagen: `assets/img/${usuario.id}.jpeg` 
            }));

            
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

