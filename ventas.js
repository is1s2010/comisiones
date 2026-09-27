const VENTAS_BASE = 5;

function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (PrecioProducto * 0.1);
    }

    return comision;
}

function validarInput(idInput, idError) {
    let valor = recuperarTexto(idInput); 
    let contenedorError = document.getElementById(idError);
    
    // Limpiamos el error previo
    contenedorError.textContent = "";

    // Regla 1: No puede estar vacío
    if (valor.trim() === "") {
        contenedorError.textContent = "Este campo no puede estar vacío.";
        return false;
    }

    // Regla 2: Solo números (usamos una expresión regular)
    if (!/^\d+$/.test(valor)) {
        contenedorError.textContent = "Solo se permiten números (sin letras ni espacios).";
        return false;
    }

    // Regla 3: Máximo 5 dígitos
    if (valor.length > 5) {
        contenedorError.textContent = "Máximo 5 dígitos permitidos.";
        return false;
    }

    return true;
}

function calcular() {
    // Validamos todos los inputs antes de calcular
    let esValidoSueldo = validarInput('txtSueldoBase', 'errSueldoBase');
    let esValidoVentas = validarInput('txtVentas', 'errVentas');
    let esValidoPrecio = validarInput('txtPrecio', 'errPrecio');

    // Si alguno falla, detenemos la ejecución
    if (!esValidoSueldo || !esValidoVentas || !esValidoPrecio) {
        return;
    }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, PrecioProducto);
    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase);
    mostrarEnSpan("spComision", comision);
    mostrarEnSpan("spTotal", total);
}