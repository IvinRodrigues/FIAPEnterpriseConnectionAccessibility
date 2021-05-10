localStorage.setItem('daltonismo', false)
localStorage.setItem('cursor', false)
localStorage.setItem('guiaLeitura', false)
localStorage.setItem('fonteGrande', false)

let body = document.getElementById('body')

function alterarAcessibilidade(elemento) {

    let acessibilidade = elemento.id
    let state = document.getElementById(acessibilidade).checked

    if (acessibilidade == 'daltonismo') {

        if (state == true) {

            localStorage.setItem('daltonismo', true)
            body.style.filter = 'grayscale(100%)'

        } else {

            localStorage.setItem('daltonismo', true)
            body.style.filter = 'grayscale(0%)'

        }

    } else if (acessibilidade == 'cursor') {

        if (state == true) {
            localStorage.setItem('cursor', true)
            body.classList.add('bigCursor') 
            
        } else {
            localStorage.setItem('cursor', false);
            body.classList.remove('bigCursor');
        }

    } else if (acessibilidade == 'guiaLeitura') {

        if (state == true) {



        } else {



        }


    } else {

        if (state == true) {

            localStorage.setItem('daltonismo', true)
            body.style.zoom = '160%'

        } else {

            localStorage.setItem('daltonismo', false)
            body.style.zoom = '100%'

        }

    }



}

function iniciaModal() {
    const modal = document.querySelector('.modal-wrapper');
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if (e.target == modalID || e.target.className == 'escModal') {
            modal.classList.remove('mostrar');
        }
    });
}

const botao = document.querySelector('.accessibility');
botao.addEventListener('click', () => iniciaModal('modal-wrapper'));