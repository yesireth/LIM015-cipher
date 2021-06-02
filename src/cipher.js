const cipher = { encode:(txtllave,txtEntrada)=>{
//INICIO FUNCION
console.log(txtEntrada + txtllave);
   let entrada = txtcaja1.value;
   // entrada ------> AMOR

    let array_caracteres=[entrada.length]

    for (let i=0; i<entrada.length; i++){
        console.log(entrada[i].charCodeAt()-64);
        array_caracteres[i]=entrada[i].charCodeAt()-64;
    }

    console.log(array_caracteres)

    //FIN FUNCION
  }
};

export default cipher;
