
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}
document.addEventListener("DOMContentLoaded", function () {
    const registrarBtn = document.getElementById("registrarBtn");

    registrarBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;

        if (nombre && correo && usuario && contrasena) {
            const user = {
                nombre: nombre,
                correo: correo,
                usuario: usuario,
                contrasena: contrasena
            };

            localStorage.setItem("user", JSON.stringify(user));

            alert("Se registro exitosamente");
        } else {
            alert("porfavor completa todos los espacios en blanco");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const entrarbtn = document.getElementById("entrarbtn");

    entrarbtn.addEventListener("click", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("coreo").value;
        const correo = document.getElementById("password").value;
        
        if (coreo && password) {
            const user = {
                
                coreo: coreo,
                password: password,
            };

            localStorage.setItem("user", JSON.stringify(user));

            alert("Sesion iniciada");
            window.location.href = 'index.html';
        } else {
            alert("Verificar contraseña y correo");
        }
    });
});
