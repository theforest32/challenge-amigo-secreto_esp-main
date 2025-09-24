// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

console.log("Bienvenido a la lista de amigos");
console.log(amigos);

//Realiza la lógica para agregar los amigos a la lista
function agregarAmigo(){
    const valor = document.getElementById('amigo');
    const nombreAmigo = valor.value.trim();

    if(nombreAmigo === ""){
        alert("El campo no puede estar vacio");
        return;
    }
    
    if(amigos.includes(nombreAmigo)){
        alert(`el amigo ${nombreAmigo} ya se encuentra en la lista, encuentra otro amigo :D`);
        limpiarCaja();
        return;
    }

    amigos.push(nombreAmigo);
    console.log(amigos);
    limpiarCaja();
    listaAmigos();
    
    return;
}


//Realiza la lógica para mostrar la lista de amigos
function listaAmigos(){
    let lista = document.getElementById('listaAmigos');

    //limpiamos lista
    lista.innerHTML= "";

    //agregamos amigos
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = `${i + 1} - ${amigos[i]}`;
        lista.appendChild(li);
    }


    return;
}
function limpiarCaja(){
    //limpiamos caja
    document.querySelector('#amigo').value = "";
}

function sortearAmigo(){
    //Realiza la lógica para sortear un amigo
    if(amigos.length < 1){
        alert("No hay amigos en la lista para sortear");
        return;
    }

    //generamos numero aleatorio
    const sorteo = parseInt(Math.floor(Math.random() * amigos.length));
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es : ${amigos[sorteo]}`;
}


