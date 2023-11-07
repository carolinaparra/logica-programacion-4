const prompt = require("prompt-sync")({ sigint: true });
let n = 0;
let fibonacci= [0,1];
let agregar=0;

    do{
        n = parseInt(prompt("Ingrese un número entero: "));
        if(!isNaN(n)){
            if (n === 1){
                console.log(0);
            } else if (n===2) {
                console.log(fibonacci);
            } else {
                for (let i=2; i<n; i++){
                    agregar=fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2];
                    fibonacci.push(agregar);
                }
                console.log(fibonacci);
            }

        } else {
            console.log("Debe ingresar un dato numérico");
        }

    }while (isNaN(n));