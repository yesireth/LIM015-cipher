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
    
  }
}


/*/ variable contenedora de letras codificadas
var textConvert = [];
// itera en textArr
for (var number = 0; number < posicion_act.length; number++) {
  // si el índice es = a espacio, mételo a textConvert
  if (posicion_act[number] === ' ') {
    textConvert.push(posicion_act[number]);
  // si no, cámbialo de letra a número.
  } else {
    textConvert.push(String.fromCharCode(posicion_act[number]));
  }

  var textJoin = textConvert.join('');

  
}
   return textJoin;*/

export default cipher;