function recuperarTexto(idcomponente){
    let componente = document.getElementById(idcomponente);
    let valor = componente.value;
    
    return valor;
}

function recuperarFloat(idcomponente){
    let valorTexto = recuperarTexto(idcomponente);
    let valorFloat = parseFloat(valorTexto);

    return valorFloat;
}

function recuperarEntero(idcomponente){
    let valorTexto = recuperarTexto(idcomponente);
    let valorEntero = parseInt(valorTexto);

    return valorEntero;
}

function mostrarEnSpan(idcomponente,valor){
    let componente = document.getElementById(idcomponente);
    componente.textContent = valor;


}

