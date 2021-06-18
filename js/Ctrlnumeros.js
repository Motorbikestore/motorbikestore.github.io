"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,0",
    // salidas impresion en pantalla
    forma = document.getElementById("forma"),
    salidaRaiz= document.getElementById("salidaRaiz");
   

function procesa(){  
    

        try{
// entradas de numeros 
       var numero1 = parseInt(forma["numero1"].value),
        error = false;
        if(isNaN(numero1)){
              throw new Error("Haz colocado un numero invalido");
        }
            try{
                if(numero1<0){
                    throw new Error("No Soporta numero negativos");
                }
                if(!error){
                    var resultadoRaiz = BigNumber(numero1).pow(2);
                    }
            }
            catch(error){
                alert(error);
            }
        }
        catch(error){
             alert(error);
        }

        salidaRaiz.value = "Raiz : "+ numeral(resultadoRaiz).format(FMT_ENTERO);


    console.log(numero1);
    console.log(salidaRaiz);

}