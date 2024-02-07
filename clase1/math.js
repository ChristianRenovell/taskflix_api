function suma( x , y ){
    console.log("El resultado de la suma es: " + (x + y));
    return x + y;
}

function resta( x , y ){
    console.log("El resultado de la resta es: " + (x - y));
    return x - y;
}

function multiplicar( x , y ){
    console.log("El resultado de la multiplicación es: " + (x * y));
    return x * y;
}

function dividir( x , y ){
    console.log("El resultado de la división es: " + (x / y));
    return x / y;
}

const math = {
    suma: suma, 
    resta: resta, 
    multiplicar: multiplicar, 
    dividir: dividir
}

module.exports = math;