function produtoInput(input1, input2) {
    var resultado;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        resultado = input1 + input2;
    }
    else {
        resultado = input1.toString() + input2.toString();
    }
    return resultado;
}
var precos = produtoInput(10, 70);
console.log(precos);
var produtos = produtoInput('Nokia', 'Samsung');
console.log(produtos);
