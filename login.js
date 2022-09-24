const criarConta = document.querySelector('#criar_conta');
const telaLogin = document.querySelector('.login');
const login = document.querySelector('.btn-login');
const user = document.querySelector('#usuario');
const senha = document.querySelector('#senha');

criarConta.addEventListener('click', chamarTela);
function chamarTela() {
    telaLogin.classList.add('chama-tela');
    telaLogin.style.right = '50%';
}


login.addEventListener('click', validaUsuario);
function validaUsuario(){
    if(user.value == 'well' && senha.value == '123'){
        alert('Login efetuado com sucesso!!!');
    }else{
        alert('Usuário não cadastrado!!!');
    }
}
