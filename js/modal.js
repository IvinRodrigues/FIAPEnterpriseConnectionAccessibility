localStorage.setItem('daltonismo', false)
localStorage.setItem('cursor', false)
localStorage.setItem('guiaLeitura', false)
localStorage.setItem('fonteGrande', false)

function alterarAcessibilidade(elemento) {

    let acessibilidade = elemento.id
    let state = document.getElementById(acessibilidade).checked

    if(acessibilidade == 'daltonismo') {

        if(state == true) {



        } else {



        }

    } else if(acessibilidade == 'cursor') {

        if(state == true) {



        } else {

            

        }

    } else if (acessibilidade == 'guiaLeitura') {

        if(state == true) {



        } else {

            

        }


    } else {

        if(state == true) {



        } else {

            

        }

    }



}