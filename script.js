var botonEncriptar = document.querySelector(".BOTON_ENCRIPTAR");
var botonDesencriptar = document.querySelector(".BOTON-DESENCRIPTAR");
var muñeco = document.querySelector(".Monito");
var ContenedorParrafos = document.querySelector(".Parrafo");
var resultado = document.querySelector(".RESULTADO");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    OcultarAdelante();
    var CajaDeTexto = RecuperarTexto();
    resultado.textContent = encriptarTexto(CajaDeTexto);


}

function desencriptar(){
    OcultarAdelante();
    var CajaDeTexto = RecuperarTexto();
    resultado.textContent = desencriptarTexto(CajaDeTexto);
    
}

function RecuperarTexto(){
    var CajaDeTexto = document.querySelector(".CajaDeTexto");
    return CajaDeTexto.value;

}

function OcultarAdelante(){
    muñeco.classList.add("ocultar")
    ContenedorParrafos.classList.add("ocultar")

}

function encriptarTexto(mensaje){
    var reemplazos = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    return mensaje.split('').map(function(caracter) {
        return reemplazos[caracter] || caracter;
    }).join('');
}

function desencriptarTexto(mensaje){
    var reemplazos = {
            'ai': 'a',
            'enter': 'e',
            'imes': 'i',
            'ober': 'o',
            'ufat': 'u'
    };
    
    return mensaje.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        return reemplazos[match];
    });
}    

let botonCopiar = document.querySelector(".BOTON_COPIAR input"); 
botonCopiar.addEventListener("click", () => {
    let contenido = document.querySelector(".RESULTADO").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});




