import cipher from './cipher.js';

let btnEncriptar = document.getElementById("fnEncriptar")
let btnDesencriptar = document.getElementById("fnDesencriptar")

function fnEncriptar(){
    let txtEntrada = document.getElementById("txtcaja1").value;
    let txtcaja2 = document.getElementById("txtcaja2");
    let txtllave = parseInt(document.getElementById("txtllave").value);
    

    let resultado= cipher.encode(txtllave, txtEntrada);
    txtcaja2.value=resultado;
}

function fnDesencriptar(){
    let txtEntrada = document.getElementById("txtcaja1").value;
    let txtcaja2 = document.getElementById("txtcaja2");
    let txtllave =parseInt(document.getElementById("txtllave").value);

    let resultadoDesifrado= cipher.decode(txtllave, txtEntrada);
    txtcaja2.value= resultadoDesifrado; 
}

btnEncriptar.addEventListener("click", fnEncriptar);
btnDesencriptar.addEventListener("click",fnDesencriptar);