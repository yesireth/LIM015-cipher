const cipher = {
  encode: (txtllave, txtEntrada) => {
    
    let salida="";
    let entrada=txtEntrada.toUpperCase();
 
    for (let i = 0; i < entrada.length; i++) {

      let posicion_act = entrada[i].charCodeAt();
      
      if(posicion_act<65 || posicion_act>90){
      
        salida= salida+entrada[i];
      }
      else{
        posicion_act = (posicion_act - 65 + txtllave) % 26 + 65;
        salida = salida+ String.fromCharCode(posicion_act);
      }


    }
    return salida;
  },
  decode: (txtllave, txtEntrada) => {
    let salida="";
    let entrada=txtEntrada.toUpperCase();
    console.log(txtEntrada + txtllave);

    for (let i = 0; i < entrada.length; i++) {
      let posicion_act = entrada[i].charCodeAt();
      if(posicion_act<65 || posicion_act>90){
        salida= salida+entrada[i];
      }
      else{
        posicion_act = (posicion_act + 65- txtllave) % 26 + 65;
        salida = salida+ String.fromCharCode(posicion_act);
      }
      console.log(posicion_act);
    }
    return salida;
   }

}

export default cipher;