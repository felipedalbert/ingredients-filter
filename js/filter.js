function fnListaSemFiltro(ingredientes){
    let cloneSemFiltro = JSON.parse(JSON.stringify(ingredientes))
    fnIteradorDeContudo(cloneSemFiltro)
}


function fnFiltroAlfabetico(tipoFiltro, ingredientes){  
    let cloneFiltroAlfabetico = JSON.parse(JSON.stringify(ingredientes))
    let resultadoOperacao = (tipoFiltro == 'A-Z')? cloneFiltroAlfabetico.sort((a,b) =>{
       return a.nome.localeCompare(b.nome) 
    }) : cloneFiltroAlfabetico.sort((a,b) =>{
        return b.nome.localeCompare(a.nome) 
    })

    fnIteradorDeContudo(resultadoOperacao)
}


function fnFiltroPorLetra(letra, ingredientes){
    let cloneFiltroPorLetra = JSON.parse(JSON.stringify(ingredientes))
    const resultadoOperacao = cloneFiltroPorLetra.filter(objeto => {
        return objeto.nome.startsWith(letra);
    });

    fnIteradorDeContudo(resultadoOperacao)
}


function fnIteradorDeContudo(itensFiltrados){
    let containerIngredientes = document.getElementById('container-ingredientes')
    containerIngredientes.innerHTML = ''

    for(let ingrediente of itensFiltrados){
        let textoHtml = `
            <div class="ingrediente">
                <img src="img/${ingrediente.img}" alt="imagem ${ingrediente.nome}">
                <p class="nome-ingrediente">${ingrediente.nome}</p>
            </div>
        `
        containerIngredientes.innerHTML += textoHtml
    }
}


export default{
    listaSemFiltro: fnListaSemFiltro,
    filtroAlfabetico : fnFiltroAlfabetico,
    filtroPorLetra: fnFiltroPorLetra
}