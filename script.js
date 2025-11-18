const botoes = document.querySelector('.link')
botoes.addEventListener('click' , function(){
   let nome = prompt("Digite seu nome: ")
   alert(`"Seja bem vindo(a), ${nome}!"`)
})