function desconto(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 / 100 * input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var precoFinal = desconto(30, 100);
console.log('Voce ganhara ' + precoFinal + 'R$ de desconto');
var produtoDesconto = desconto('nokia', 'samsung');
console.log(produtoDesconto);
