// 'use strict'

// import{getFilmes, getFilme,postFilme} from'./filmes.js'

// function criarCard(filme) {
//     const card=document.createElement('div')

//     const titulo=document.createElement('h2')
//     titulo.textContent=filme.nome

//     const text=document.createElement('textarea')
//     text.textContent=filme.sinopse

//     card.replaceChildren(titulo,text)

//     return card
// }

// // console.table(await getFilmes())
// // console.table(await getFilme(2))

// async function preencherContainer(){
//     const container=document.querySelector('body')
//     const filmes=await getFilmes()
//     filmes.forEach(filme => {             
//         const card=criarCard(filme)
//         container.appendChild(card)
//     });
// }
// preencherContainer()

// //Testes
// const filme={
//     "id": 1,  
//     "nome": "O Segredo do Vale",
//     "sinopse": "Um drama emocionante que explora os segredos de uma pequena cidade no interior.",
//     "duracao": "01:40:00",
//     "data_lancamento": "2022-08-25",
//     "data_relancamento": "",
//     "foto_capa": "https://exemplo.com/foto_vale.jpg",
//     "valor_unitario": 29.99
// }

// // postFilme(filme)