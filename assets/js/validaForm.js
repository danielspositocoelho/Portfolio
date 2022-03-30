const inputsNaoValidados = document.querySelectorAll('.form__input');

const errorTypes = [
    'valueMissing',
    'typeMismatch',
    'customError'
]

const msgsErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'Verifique o formato do e-mail digitado.'
    }
}

inputsNaoValidados.forEach(formInput => {
    formInput.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

function valida (input){
    const tipoInput = input.dataset.type;
    console.log(tipoInput);

    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    }else{
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMsgErro(tipoInput,input);
    }
}

function mostraMsgErro(tipoInput,input){
    let msg = '';
    errorTypes.forEach(erro => {
        if(input.validity[erro]){
            msg = msgsErro[tipoInput][erro];
            console.log(msg);
        }
    })
    return msg
}
