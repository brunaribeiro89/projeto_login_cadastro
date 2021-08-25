let userLogado = JSON.parse(localStorage.getItem('userLogado'))
console.log(userLogado)
let logado = document.querySelector('#logado')

logado.innerHTML = userLogado.nome


if(localStorage.getItem('token')== null){
  alert('Você precisa estar logado para acessar a página')
  window.location.href ='/telaLogin/index.html' 
}


function sair(){
 // localStorage.clear()
 localStorage.removeItem('token')
 localStorage.removeItem('userLogado')
 window.location.href ='/telaLogin/index.html' 
}