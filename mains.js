
const numeros = document.querySelectorAll(".numero");
const operadores = document.querySelectorAll(".operador");
const pantalla= document.querySelector(".pantalla");

const borrar= document.querySelector(".borra");
const igual= document.querySelector(".igual");
const punto= document.querySelector(".punto");


let opActual = "";
let opAnterior = "";
let resultado = "";
let operacion = "";

numeros.forEach((numero) => {
    numero.addEventListener ("click", () =>{
        opActual += numero.innerHTML;
        pantalla.innerHTML = opActual;

    
    })

})


numeros.forEach((numero) => {
    numero.addEventListener("click", () =>{
        
        
    })

})

operadores.forEach((ope) => {
    ope.addEventListener("click", () =>{   
        opAnterior = opActual;
        opActual = "";
        operacion = ope.innerHTML;
    })
})

igual.addEventListener("click", () =>{  
    switch(operacion){
        case "+":
            resultado = parseInt(opAnterior) + parseInt(opActual);
            break;
        case "-":
            resultado = parseInt(opAnterior) - parseInt(opActual);
            break;
        case "x":
            resultado = parseInt(opAnterior) * parseInt(opActual);
            break;
        case "÷":
            resultado = parseInt(opAnterior) / parseInt(opActual);
            break;
        case "%":
            resultado = parseInt(opAnterior) % parseInt(opActual);
            break;
        default:
            console.log("Operacion no valida");
    }
    pantalla.innerHTML = resultado;
})

borrar.addEventListener("click", () =>{  
    pantalla.innerHTML = "";
    opActual = "";
})

