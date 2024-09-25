function desconto(input1 : number|string, input2 : number|string){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' ){
        result = input1 / 100 * input2
    }else{
        result = input1.toString() + input2.toString()
    }
    return result
}
const precoFinal = desconto(30,100)
console.log('Voce ganhara ' + precoFinal + 'R$ de desconto')

const produtoDesconto = desconto('nokia', 'samsung')
console.log(produtoDesconto)