import modificador from './modificador.js'
import ingredientes from './ingredientes.js'
import filter from './filter.js'

modificador.gerarAlfabeto()
filter.listaSemFiltro(modificador.capitalizar(ingredientes, 'nome'))


const select = document.querySelector('select');

select.addEventListener('change', (select)=>{
    if((select.target.value == 'A-Z') || (select.target.value == 'Z-A')){
        filter.filtroAlfabetico(select.target.value, ingredientes) 
    }else if(select.target.value == 'default'){
        filter.listaSemFiltro(ingredientes)
    }else{
        filter.filtroPorLetra(select.target.value, ingredientes)
    }
})


