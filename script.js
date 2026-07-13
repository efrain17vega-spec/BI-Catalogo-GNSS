function ingresar(){

    let usuario=document.getElementById("usuario").value;

    let password=document.getElementById("password").value;

    if(usuario==="admin" && password==="1234"){

        window.location.href="dashboard.html";

    }else{

        document.getElementById("mensaje").innerHTML="Usuario o contraseña incorrectos";

    }

}

function cerrarSesion(){

    window.location.href="index.html";

}

function mostrarSeccion(id, boton){

    document.querySelectorAll(".section").forEach(function(sec){
        sec.classList.remove("active");
    });

    document.querySelectorAll(".menu-item").forEach(function(item){
        item.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
    boton.classList.add("active");

    if(id === "dashboard"){
        let frame = document.getElementById("biFrame");
        if(frame && !frame.src){
            frame.src = frame.dataset.src;
        }
    }
}

function iniciarCarrusel(id, intervalo){
    const contenedor = document.getElementById(id);
    if(!contenedor) return;

    const imagenes = contenedor.querySelectorAll(".carousel-img");
    let actual = 0;

    setInterval(function(){
        imagenes[actual].classList.remove("active");
        actual = (actual + 1) % imagenes.length;
        imagenes[actual].classList.add("active");
    }, intervalo);
}

iniciarCarrusel("carouselUbinas", 4000);
iniciarCarrusel("carouselSabancaya", 4000);

function generarEmbers(){
    const contenedor = document.getElementById("embers");
    if(!contenedor) return;

    const total = 22;

    for(let i = 0; i < total; i++){
        const ember = document.createElement("span");
        ember.className = "ember";
        ember.style.left = (Math.random() * 100) + "%";
        ember.style.animationDuration = (6 + Math.random() * 8) + "s";
        ember.style.animationDelay = (Math.random() * 10) + "s";
        ember.style.width = ember.style.height = (3 + Math.random() * 4) + "px";
        contenedor.appendChild(ember);
    }
}

generarEmbers();
