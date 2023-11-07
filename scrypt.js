function leituraDados() {
    
    const dados = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value
    }

    localStorage.setItem('dados', JSON.stringify(dados))

    document.getElementById('tela').innerHTML = JSON.stringify(dados)
}

function removeDados() {
    localStorage.removeItem('dados')

    document.getElementById('tela').innerHTML
}