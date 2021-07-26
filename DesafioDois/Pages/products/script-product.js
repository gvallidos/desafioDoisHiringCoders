const cadastroProduto = document.querySelector('#cadastrar-produto');

cadastroProduto.addEventListener('click', (e) => {
    e.preventDefault();
    let productName = document.querySelector('#nome-do-produto').value;
    let price = document.querySelector('#preco').value;
    let quantity = document.querySelector('#estoque').value;
    let description = document.querySelector('#descricao').value;

    let productData = {
        name: productName,
        preco: price,
        estoque: quantity,
        descricao: description
    }

    const product = JSON.stringify(productData);
    localStorage.setItem('Produto', product);

    let content = document.querySelector('form');
    let carregando = `<p>Carregando...</p>`
    let pronto = `<p>Produto cadastrado com sucesso!</p>`
    
    content.innerHTML = carregando;
    setTimeout(() => {
        content.innerHTML = pronto
        }, 1000)
    setTimeout(() => {
        window.location.reload();
    }, 2000)    
    
})