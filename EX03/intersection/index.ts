
type dados = {
    nome: string
    idade: number
}

type dadosEmpresa = {
    id: number
    funcao: string
}

type geralFuncionario = dados & dadosEmpresa

const funcionario : geralFuncionario = {
    nome: 'Roberto',
    idade: 19,
    id: 228,
    funcao: 'analista'

}
// intersection é um tipo que combina múltiplos tipos em um só. Como no exemplo acima, combinei dados pessoais do funcionario com os dados cadastrais da empresa que atua.