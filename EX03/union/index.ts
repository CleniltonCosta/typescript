function produtoInput(input1:number|string, input2:number|string){
    let resultado
    if(typeof input1==='number' && typeof input2 ==='number'){
        resultado= input1 + input2
    }
    else{
        resultado = input1.toString() + input2.toString()
    }
    return resultado
}

const precos= produtoInput(10,70)
console.log(precos) 

const produtos = produtoInput('Nokia', 'Samsung')
console.log(produtos)