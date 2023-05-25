var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-munieco")
var h3 = document.querySelector(".contenedor-h3")
var parrafo = document.querySelector(".contenedor-parrafo")
var resultado = document.querySelector(".texto-resultado")
var copiado = document.querySelector(".copiado");
var mensa = document.querySelector(".miVentana");
var resul = document.querySelector(".resul");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;



function encriptar(){

    ocultarAdelante();

    var area = recuperarTexto()    

    resultado.textContent = encriptarTexto(area);

}

function desencriptar(){
    ocultarAdelante();
    var area = recuperarTexto()
    resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto(){
    resul.classList.add("animacion");
    var area = document.querySelector(".area");

    return area.value;
}

function ocultarAdelante(){
    
    var mensaje = recuperarTexto(); // Recuperar el mensaje
    
    if (mensaje === "") {
        alert("La casilla está vacía, por favor introduzca un texto.")
    } else {
        munieco.classList.add("ocultar");
        h3.classList.add("ocultar");
        parrafo.classList.add("ocultar");
    }

}
function mostrarMensaje() {
    document.getElementById("miVentana").style.display = "block";
    
    setTimeout(function(){
        document.getElementById("miVentana").style.display="none"
    }, 2000);
}



function encriptarTexto(mensaje){
    var texto = mensaje.toLowerCase();
    var textoFinal = "";


    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }  
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "ai"){
            textoFinal = textoFinal + "a"
    
        }
        else if(texto[i] == "enter"){
            textoFinal = textoFinal + "e"
          
        }
        else if(texto[i] == "imes"){
            textoFinal = textoFinal + "i"
        
        }
        else if(texto[i] == "ober"){
            textoFinal = textoFinal + "o"
        }

        else if(texto[i] == "ufat"){
            textoFinal = textoFinal + "u"
         
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    mostrarMensaje();

})