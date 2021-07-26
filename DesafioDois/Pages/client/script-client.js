const cadastro = document.querySelector('#cadastrar-cliente');

cadastro.addEventListener('click', (e) => {
    e.preventDefault();
    let name = document.querySelector('#nome').value;
    let cpf = document.querySelector('#cpf').value;
    let adress = {
        rua: document.querySelector('#rua').value,
        numero: document.querySelector('#numero').value,
        complemento: document.querySelector('#complemento').value,
        cep: document.querySelector('#cep').value,
        cidade: document.querySelector('#cidade').value,
    }
    let email = document.querySelector('#email').value;
    let telefone = document.querySelector('#telefone').value;

    let clientData = {
        nome: name,
        cpf: cpf,
        endereco: adress,
        email: email,
        telefone: telefone
    }

    const client = JSON.stringify(clientData);
    localStorage.setItem('Client', client);

    let content = document.querySelector('#content');
    let carregando = `<p>Carregando...</p>`
    let pronto = `<p>Cliente cadastrado com sucesso!</p>`
    
    content.innerHTML = carregando;
    setTimeout(() => {
        content.innerHTML = pronto
        }, 1000)
    setTimeout(() => {
        window.location.reload();
    }, 2000)    
    
})