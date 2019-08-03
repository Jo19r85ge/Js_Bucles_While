var playNumber = true;

/* Declaracion dentro de bucle for es más limpio
var contador= 0;*/

var numSecret = 5;
var maxIntentos = 3;

while(playNumber)
{
    //bucle for desde 1 a 3
    /* uso de variable "let" si querremos que el contador sea variable local de for
    o poner var si puede tener un uso fuera del bucle*/

    for (let contador = 1; contador <=3; contador++)
    {
        //pedir el numero elegido por el usuario :

        var numUsuario = prompt("Escoja su número")

        // Comparar si los dos númweros coinciden

        if (numUsuario==numSecret)
        {
            alert("You Win !!");
            // break para salir del bucle
            break;
        } 

        else
        {
        //si no coinciden mostrar el número de intentos restantes que le queda

        var numIntentos = maxIntentos-contador;

        if (numIntentos==0)
        {
            //si ha agotado todos los intentos mostrar mensaje
            alert("You Louse.... ");
        } 
        else
        {
            alert(`No ha acertado, le queda ${numIntentos} intento(s)`);
        }
    }
        
}
    playNumber = confirm('Quiere seguir jugando? Apretar "confirmar" o "cancelar"')
}

	
