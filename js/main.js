//console.log('JS externo funcionou!');
//console.log(window);

//alert('Seja bem vinde!'); // mensagem para usuário

//let adulto = confirm('Você tem mais de 18 anos?'); // retorna booleano

//let nomeUsuario = prompt('Qual seu nome?'); // retorna texto inserido pelo usuario
let nomeUsuario = 'Hendy'; 

let elementHeader = document.querySelector('.olaUsuario'); // seleciona o elemento html
console.log(elementHeader);

//elementHeader.innerText = `Olá, ${nomeUsuario}`; // atribui conteudo ao elemento selecionado
elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;


let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = "orange";

const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
}

setTimeout(() => {
    document.querySelector('.modal').style.display = "flex";
}, 5000)

const btnClose = () => {
    document.querySelector('.modal').style.display = "none";
}


// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault(); // cancelando o envio temporariamente

//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;

//     console.log(nomeValue);
//     console.log(emailValue);
// });

let formContact = document.querySelector("#form_contact");

formContact.addEventListener("submit", (evento) => {
    // interrompo o envio do formulário
    evento.preventDefault();

    // validar se todos os campos estão preenchido
    // validar se nome tem 2 ou mais caracteres
    // validar se telefone tem no minimo 8 caracteres
    // validar se o campo email tem @ (Google - validação email com regex)
    let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let telefoneValue = document.querySelector("#input_telefone").value;
    let mensagemValue = document.querySelector("#input_mensagem").value;
    let divMensagemErro = document.querySelector(".mensagem-erro");


    if (nomeValue.length < 2 || emailValue.length < 1 || telefoneValue.length < 1 || mensagemValue.length < 1) {
        divMensagemErro.innerHTML = "Preencha todos campos. <br>";
    } else if (telefoneValue.length < 8) {
        divMensagemErro.innerHTML = "Telefone deve ter pelo menos 8 digitos. <br>";
    } else if (emailValue.indexOf("@") < 0) {
        divMensagemErro.innerHTML = "Insira um email válido. <br>";
    } else {
        formContact.submit();
    }



});