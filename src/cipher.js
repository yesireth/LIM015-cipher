const cipher = {
  encode: (txtllave, txtEntrada) => {
    //INICIO FUNCION
    let salida="";
    console.log(txtEntrada + txtllave);
    let entrada = txtcaja1.value;

    //entrada ------> AMOR

    let array_caracteres = [entrada.length]

    for (let i = 0; i < entrada.length; i++) {


      let posicion_act = entrada[i].charCodeAt();

      posicion_act = (posicion_act - 65 + txtllave) % 26 + 65;

      array_caracteres= posicion_act;
      console.log(posicion_act);
      
      salida = salida+ String.fromCharCode(posicion_act);
      //salida=salida+
    }
    return salida;
    
  },
  decode: (txtllave, txtEntrada) => {
    let salida="";
    console.log(txtEntrada + txtllave);

    for (let i = 0; i < txtEntrada.length; i++) {
      let posicion_act = txtEntrada[i].charCodeAt();
      posicion_act = (posicion_act + 65- txtllave) % 26 + 65;

      console.log(posicion_act);
      
      salida = salida+ String.fromCharCode(posicion_act);
    }
    return salida;
   }

}
 





export default cipher;