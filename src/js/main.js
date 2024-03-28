'use strict'

import{getFilmes,getFilme,postFilme,putFilme,deleteFilme} from'./filmes.js'

function criarCard(filme) {
    const main=document.getElementById('main')

    const card=document.createElement('div')
    card.classList.add('cursor-pointer')

    const preco=document.createElement('h4')
    preco.classList.add('flex','justify-center','bg-roxo_claro','text-branco','rounded-xl','p-1','w-20','absolute','ml-44', 'top-90')
    preco.textContent=`R$ ${filme.valor_unitario.toFixed(2).replace('.', ',')}`

    const detalheFilme=document.createElement('div')
    detalheFilme.classList.add('w-64','border-1','rounded-3xl','h-36')

    const image=document.createElement('img')
    image.src=filme.foto_capa
    image.classList.add('w-64','border-1','rounded-3xl','h-36')

    const content=document.createElement('div')
    content.classList.add('p-2','bg-azul','rounded-xl','h-36','w-64','overflow-hidden','text-wrap','truncate')

    const titulo=document.createElement('h2')
    titulo.textContent=filme.nome
    titulo.classList.add('mt-4')

    const sinopse=document.createElement('h3')
    sinopse.textContent=filme.sinopse

    const gradiente=document.createElement('div')
    gradiente.classList.add('bg-gradient-to-t','from-gradiente_azul_100','to-gradiente_azul_0','mt-16','h-16','w-64','rounded-xl')

    content.replaceChildren(titulo,sinopse)
    detalheFilme.replaceChildren(image,preco,content)
    card.replaceChildren(detalheFilme,gradiente)
    main.appendChild(card)

    return main
}

// console.table(await getFilmes())
// console.table(await getFilme(2))

async function preencherContainer(){
    const container=document.querySelector('body')
    const filmes=await getFilmes()
    filmes.forEach(filme => {             
        const main=criarCard(filme)
        container.appendChild(main)
    });
}
preencherContainer()

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