// Operadort ... rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } // coloca todos os atributos de funcionarios no objeto clone
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA] // coloca todos os itens do array grupoA no arrayGrupoFinal

console.log(grupoFinal)