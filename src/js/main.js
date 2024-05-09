'use strict'

import { getFilmes, getFilme,getFilmeFiltro, postFilme, putFilme, deleteFilme,getClassificacao } from './filmes.js'


const search = new URLSearchParams(window.location.search).get('search')
const searchBar = document.getElementById('pesquisa')

async function pesquisar(){
  const pesquisarFilme = await getFilmeFiltro(searchBar.value)
 console.log(pesquisarFilme)
  const listaFilmes = pesquisarFilme
  apagarListaFilmes()

  listaFilmes.forEach(filme => {
    console.log(filme)
    criarCard(filme)
  })
}

searchBar.addEventListener('keypress', (event)=>{
  if(event.key === "Enter"){
    pesquisar()
  }
})

function apagarListaFilmes(){
  while(main.firstChild){
    main.removeChild(main.firstChild)
  }
}


const main = document.getElementById('main')
function criarCard(filme) {

    const card = document.createElement('div')
    card.classList.add('cursor-pointer')
    const id = filme.id
    card.addEventListener('click', () => abrirFilme(id));

    const preco = document.createElement('h4')
    preco.classList.add('text-center', 'bg-roxo_claro', 'text-branco', 'rounded-xl', 'p-1', 'w-20', 'absolute', 'mt-28', 'ml-44')
    preco.textContent = `R$ ${filme.valor_unitario.toFixed(2).replace('.', ',')}`

    const div_img = document.createElement('div')
    div_img.classList.add('w-64', 'border-1', 'rounded-3xl', 'h-36', 'bg-branco')

    const image = document.createElement('img')
    image.src = filme.foto_capa
    image.classList.add('w-64', 'border-1', 'rounded-3xl', 'max-h-32', 'min-h-32')

    const content = document.createElement('div')
    content.classList.add('p-2', 'bg-azul', 'rounded-xl', 'h-36', 'overflow-hidden', 'text-wrap', 'truncate')

    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    titulo.classList.add('mt-4')

    const sinopse = document.createElement('h3')
    sinopse.textContent = filme.sinopse

    const gradiente = document.createElement('div')
    gradiente.classList.add('bg-gradient-to-t', 'from-gradiente_azul_100', 'to-gradiente_azul_0', 'h-16', 'w-64', 'rounded-xl', 'mt-20')

    content.replaceChildren(titulo, sinopse)
    div_img.replaceChildren(image, content)
    card.replaceChildren(preco, div_img, gradiente)
    main.appendChild(card)

    return main
}

const divFundo = document.getElementById('fundo')

async function CriarCardFocusFilme(filme, classificacao) {
    divFundo.classList.remove('hidden')

    const lateral_esquerda = document.createElement('div')
    lateral_esquerda.classList.add('bg-roxo_cinza', 'h-screen', 'w-5/12', 'flex', 'flex-col', 'justify-between', 'items-start', 'p-8')

    const btn_voltar = document.createElement('img')
    btn_voltar.src ='./img/voltar.png'
    btn_voltar.classList.add('cursor-pointer')
    btn_voltar.addEventListener('click', fecharFilme)

    const div_capa = document.createElement('div')
    div_capa.classList.add('flex', 'justify-center', 'w-full')

    const capa_filme = document.createElement('img')
    capa_filme.src = filme.foto_capa

    const logo = document.createElement("img")
    logo.src ='./img/logo_completa.png'

    const lateral_direita = document.createElement('div')
    lateral_direita.classList.add('flex', 'flex-col', 'pt-36', 'pb-24', 'pr-32', 'pl-20', 'gap-12')

    const titulo_sinopse = document.createElement('div')
    titulo_sinopse.classList.add('h-1/2')

    const titulo_filme = document.createElement('h1')
    titulo_filme.textContent = filme.nome
    titulo_filme.classList.add('text-amarelo', 'text-4xl')

    const sinopse_filme = document.createElement('h2')
    sinopse_filme.textContent = filme.sinopse
    sinopse_filme.classList.add('text-branco', 'text-2xl')

    const lancamento_duracao = document.createElement('div')

    const data_lancamento = document.createElement('h3')
    data_lancamento.textContent = `Data de lançamento: ${filme.data_lancamento}`
    data_lancamento.classList.add('text-branco', 'text-xl')

    const genero = document.createElement('h3')
    genero.textContent = `Data de lançamento: ${filme.genero}`
    genero.classList.add('text-branco', 'text-xl')

    const duracao = document.createElement('h3')
    duracao.textContent = `Duração: ${filme.duracao}`
    duracao.classList.add('text-branco', 'text-xl')

    const div_classificacao = document.createElement('div')
    div_classificacao.classList.add('flex' ,'gap-1')

    const img_classificacao = document.createElement('img')
    // img_classificacao.src=filme.classificacao
    img_classificacao.src =classificacao.classificacao_foto

    const text_classificacao = document.createElement('h4')
    text_classificacao.classList.add('text-branco')
    // text_classificacao.textContent=filme.classificacao_escrita
    text_classificacao.textContent = `Classificacao ${classificacao.classificacao}`

    const botoes = document.getElementById('botoes')

    div_capa.appendChild(capa_filme)
    lateral_esquerda.replaceChildren(btn_voltar, div_capa, logo)

    div_classificacao.replaceChildren(img_classificacao, text_classificacao)
    lancamento_duracao.replaceChildren(data_lancamento, duracao)
    titulo_sinopse.replaceChildren(titulo_filme, sinopse_filme)
    lateral_direita.replaceChildren(titulo_sinopse, lancamento_duracao, div_classificacao, botoes)

    divFundo.replaceChildren(lateral_esquerda, lateral_direita)
    return divFundo
}

async function abrirFilme(idFilme) {
    const filme = await getFilme(idFilme)
    const classificacao= await getClassificacao(idFilme)

    CriarCardFocusFilme(filme, classificacao)
}

function fecharFilme() {
    divFundo.classList.add('hidden')
}

// console.table(await getFilmes())
// console.table(await getFilme(2))

async function preencherContainer() {
    const container = document.querySelector('body')
    const filmes = await getFilmes()
    filmes.forEach(filme => {
        const main = criarCard(filme)
        container.appendChild(main)
    });
}

preencherContainer()


//Testes
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

// deleteFilme(3)