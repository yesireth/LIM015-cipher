import cipher from './cipher.js';
let btnEncriptar = document.getElementById("fnEncriptar")
let btnDesencriptar = document.getElementById("fnDesencriptar")
function fnEncriptar(){
    let txtEntrada = document.getElementById("txtcaja1").value;
    let txtcaja2 = document.getElementById("txtcaja2");
    let txtllave = document.getElementById("txtllave").value;
 
    cipher.encode(txtllave, txtEntrada);
}


 btnEncriptar.addEventListener("click", fnEncriptar)

console.log(cipher);
