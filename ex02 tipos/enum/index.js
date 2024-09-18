var funcao;
(function (funcao) {
    funcao[funcao["frontendSenior"] = 1] = "frontendSenior";
    funcao[funcao["productManager"] = 2] = "productManager";
    funcao[funcao["backendJunior"] = 3] = "backendJunior";
})(funcao || (funcao = {}));
var empregado = {
    nome: 'Paulo',
    idade: 27,
    funcao: funcao.backendJunior
};
console.log(empregado);
