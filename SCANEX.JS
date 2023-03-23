//Función al hacer click en el HTML.
document.getElementById("bot").onclick = function () {
    
    //Obtención de los valores cargados en del HTML.
    let exp = document.getElementById("exp").value;
    let ace = document.getElementById("ace").value;
    var des = 0.95;

    //Variables que son iguales al resultado de las funciones, cuyos valores son tipo Float.
    let soj = soja(parseFloat(exp), parseFloat(ace), parseFloat(des));
    let ext = extr(ace, soj)*100;

    //Nuevas variables con 0 y 2 decimales.
    let soj2 = soj.toFixed(2);
    let ext2 = ext.toFixed(2);

    //Reemplazo del texto del HTML por el resultado.
    document.getElementById("psoj").innerHTML = soj2+" Tn";
    document.getElementById("pext").innerHTML = ext2+" %";
}

//Función para calcular la soja.
function soja (e, a, d) {
    return (e + a) * d;
}

//Función para calcular la extracción.
function extr (a, s) {
    return a / s;
}