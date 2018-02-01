function sum(a, b) {
    return a + b;
}

//metodo padrão posso importar com qualquer nome
export default sum;


//So pode chamar com o mesmo nome e o importa precisa das chaves
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a,b) {
    return a / b;
}

//Exportar tudo
//export * as utils;

const PI = 3.14;

//Export separado
export {mult, div, PI};
