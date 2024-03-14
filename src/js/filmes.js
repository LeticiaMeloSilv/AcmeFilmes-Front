export async function getFilmes() {
    const url = 'http://localhost:8080/V2/ACMEFilmes/filmes'
    const response=await fetch(url)
    const data=await response.json()
    
    return data.filmes
}
export async function getFilme(id) {
    const url =`http://localhost:8080/V2/ACMEFilmes/filme/${id}`
    const response=await fetch(url)
    const data= await response.json()
    return data.filme[0]
}
export async function postFilme(filme) {
    const url='http://localhost:8080/V2/ACMEFilmes/filme'
    const options={
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(filme)
    }
    const response=await fetch(url,options)
    return response.ok
}