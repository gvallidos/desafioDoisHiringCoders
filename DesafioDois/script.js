const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.querySelector('input').value;
    console.log(email);
    localStorage.setItem('e-mail', email);

    let content = document.querySelector('#ofertas');
    let carregando = `<p>Carregando...</p>`
    let pronto = `<p>Pronto!</p>`
    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})