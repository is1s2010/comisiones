const VENTAS_BASE = 5;


function calcularComision(numeroVentas,PrecioProducto){
    let comision = 0;

    if(numeroVentas > VENTAS_BASE){
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (PrecioProducto * 0.1);
    }

    return comision;
}

function calcular(){

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, PrecioProducto);

    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase",sueldoBase);
    mostrarEnSpan("spComision",comision);
    mostrarEnSpan("spTotal",total);



}