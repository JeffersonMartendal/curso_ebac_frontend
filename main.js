const form = document.getElementById('form-atividade')
let linhas = ''
const nome = []
const telefone = []

form.addEventListener('submit', function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    if (telefone.includes(inputTelefone.value)) {
        alert(`O telefone ${inputTelefone.value} já foi inserido`)
    } else {
        telefone.push(inputTelefone.value)
        nome.push(inputNome.value)
        let linha = '<tr>'
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTelefone.value}</td>`
        linha += `</tr>`
        linhas += linha
    }
    inputNome.value = ''
    inputTelefone.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}