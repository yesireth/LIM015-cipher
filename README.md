# Cifrado César

    Cesar encryption

En este proyecto cree un programa que cifra y descifra un mensaje por medio de la sustitución de caracteres.Este proyecto va dirigido especialmente a los usuarios que quieren tener como password algun tipo de nombre en sus cuentas ya sean: bancarias, email, facebook, instagram, linkedin  y para no ser tan evidentes lo cifran y descifran. 

    Utilidad

Cifrar mensajes 🔒
Descifrar mensajes 🔓

     Cifrado

Llama a la function fnEncriptar() 

  const cipher: {
    encode: (txtllave: any, txtEntrada: any) => string;
}
import cipher

Declaro las variables

 Asigno el valor de las variables para que selecione los datos que voy a necesitar en este caso la caja de texto( donde escribo el texto que quiero cifrar) y  la llave ( que es el numero de espacio que quiero que corra la letra) convirtiendolo en entero con parseInt.

Llama a la function encode

Donde la importo de cipher, con los datos de la llave ( que es el numero de espacio que quiero que corra la letra) y el texto que quiero cifrar convirtiendolo en mayuscula (toUpperCase).
  
Apliqué el bucle for 
  
Recorri los elementos del texto para que me de el numero la posición [i] donde le asigné el charCodeAt.

Uso de condicional if, else

 If = Si el numero es menor que 65 o mayo que 90 me lo tomara.
 Else = Me apliacara la formula: (posicion_act - 65 + txtllave) % 26 + 65; y me la diera en letra StringfromCharCode.

        Descifrado


 Llama a la function  fnDesencriptar()
 
  const cipher: {
    decode: (txtllave: any, txtEntrada: any) => string;
}
import cipher

Declaro las variables:

 Asigno el valor de las variables para que selecione los datos que voy a necesitar en este caso la caja de texto( donde escribo el texto que quiero descifrar) y  la llave ( que es el numero de espacio que quiero que corra la letra) convirtiendolo en entero con parseInt.

Llama a la function decode:

Donde la importo de cipher, con los datos de la llave ( que es el numero de espacio que quiero que corra la letra) y el texto que quiero descifrar convirtiendolo en mayuscula (toUpperCase).
  
Apliqué el bucle for 
  
Recorri los elementos del texto para que me de el numero la posición [i] donde le asigné el charCodeAt.

Uso de condicional if, else

 If = Si el numero es menor que 65 o mayo que 90 me lo tomará.
 Else = Me apliacara la formula: (posicion_act + 65 - txtllave) % 26 + 65; y el resultado del numero me lo diera en letra StringfromCharCode.

 Plan de acción

Investigar sobre los temas de:
HTML y CSS
DOM
JavaScript
Testing
Git y GitHubJavaScript
UX
Implementar sobre lo aprendido en el Git y GitHubJavaScript luego, HTML,JavaScript,DOM, UX dejando por ultimo el CSS, los Testing y README.


