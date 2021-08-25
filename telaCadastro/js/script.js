//declaração das variáveis
let btn = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#confirmSenha");

let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labeLUsuario");
let validUsuario = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmaSenha = document.querySelector("#confirmaSenha");
let labelConfirmSenha = document.querySelector("#labelConfirmSenha");
let validConfirmaSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

//Inputs do cadastro
nome.addEventListener('keyup', function(){
    if(nome.value.length <= 5){
      labelNome.setAttribute('style','color:#D33257')
      nome.setAttribute('style','border-color:#D33257')
      labelNome.innerHTML = 'Nome *Insira no mínimo 5 caracteres'
      validNome = false;
    }else{
      labelNome.setAttribute('style', 'color: #272262')
      nome.setAttribute('style','border-color: #272262')
      labelNome.innerHTML = 'Nome'
      validNome = true;
    }    
});

usuario.addEventListener('keyup', function(){
  if(usuario.value.length <= 5){
    labelUsuario.setAttribute('style','color:#D33257')
   usuario.setAttribute('style','border-color:#D33257')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 5 caracteres'
    validUsuario = false;
  }else{
    labelUsuario.setAttribute('style', 'color: #272262')
    usuario.setAttribute('style','border-color: #272262')
    labelUsuario.innerHTML = 'Usuário'
    validUsuario = true;
  }    
});

senha.addEventListener('keyup', function(){
  if(senha.value.length <= 6){
    labelSenha.setAttribute('style','color:#D33257')
   senha.setAttribute('style','border-color:#D33257')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    validSenha = false;
  }else{
    labelSenha.setAttribute('style', 'color: #272262')
    senha.setAttribute('style','border-color: #272262')
    labelSenha.innerHTML = 'Senha'
    validSenha = true;
  }    
});

confirmaSenha.addEventListener('keyup', function(){
  if( senha.value != confirmaSenha.value){
    labelConfirmSenha.setAttribute('style','color:#D33257')
    confirmaSenha.setAttribute('style','border-color:#D33257')
   labelConfirmSenha.innerHTML = 'Confirmar Senha *Insira os mesmos 6 caracteres de Senha'
   validConfirmaSenha = false;
  }else{
    labelConfirmSenha.setAttribute('style', 'color: #272262')
    confirmaSenha.setAttribute('style','border-color: #272262')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    validConfirmaSenha = true;
  }    
});

//Eventos
btn.addEventListener('click', function(){
   let inputSenha = document.querySelector("#senha")

   if(inputSenha.getAttribute('type') === 'password'){
       inputSenha.setAttribute('type', 'text')
   }else{
       inputSenha.setAttribute('type', 'password')
      }
});

btnConfirm.addEventListener('click', function(){
   let inputConfirmSenha = document.querySelector("#confirmaSenha")

   if(inputConfirmSenha.getAttribute('type') === 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
   }else{
    inputConfirmSenha.setAttribute('type', 'password')
      }  
});

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmaSenha){
      
     let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
     
     listaUser.push(
       {
         nomeCad:nome.value,
         userCad:usuario.value,
         senhaCad:senha.value
       }
     )
     localStorage.setItem('listaUser',JSON.stringify(listaUser))

     msgSuccess.setAttribute('style','display:block')
     msgSuccess.innerHTML = '<strong>Cadastro realizado com sucesso</strong>'
     msgError.innerHTML = ''
     msgError.setAttribute('style','display:none')
     
     setTimeout(()=>{
      window.location.href ='/telaLogin/index.html'
     },3000)
   

  }else {
    msgError.setAttribute('style','display:block')
    msgError.innerHTML = '<strong>Preencha todos os campos Corretamente</strong>'  
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style','display:none')
  }
}
