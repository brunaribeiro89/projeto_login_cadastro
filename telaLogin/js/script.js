let btn = document.querySelector(".fa-eye");

btn.addEventListener('click', function(){
   let inputSenha = document.querySelector("#senha")

   if(inputSenha.getAttribute('type') === 'password'){
       inputSenha.setAttribute('type', 'text')
   }else{
       inputSenha.setAttribute('type', 'password')
      }
   

});

function entrar(){
   let usuario = document.querySelector('#usuario')
   let userLabel = document.querySelector('#userLabel') 

   let senha = document.querySelector('#senha')
   let senhaLabel = document.querySelector('#senhaLabel')

   let msgError = document.querySelector('#msgError')

   //pegando a listaUser que está no json
   let listaUser = []

   let userValid = {
       nome: '',
       user: '',
       senha:''
   }

   listaUser = JSON.parse(localStorage.getItem('listaUser'))
   //varrer a lista de user que está no localStorage
   listaUser.forEach((item) => {
      if(usuario.value == item.userCad && senha.value == item.senhaCad ) {
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha:item.senhaCad
            }
      }

   })

   if(usuario.value == userValid.user && senha.value == userValid.senha){
            window.location.href ='/telaInicio/start.html'
            //gerou um token para validação
            let token = Math.random().toString(16).substr(2)
            console.log(token)
            localStorage.setItem('token',token)

            localStorage.setItem('userLogado', JSON.stringify(userValid))
          
            
   }else {
        usuario.setAttribute('style','border-color:#D33257')
        userLabel.setAttribute('style','color:#D33257')
        senha.setAttribute('style','border-color:#D33257')
        senhaLabel.setAttribute('style','color:#D33257')

        msgError.setAttribute('style','display:block')
        msgError.innerHTML = '<strong>Preencha todos os campos Corretamente</strong>'  
        usuario.focus()
   }
 }