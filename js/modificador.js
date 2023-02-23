function fnCapitalizar(colecao, attr){
    if (colecao.length > 0){
        if (typeof colecao[0] == 'object' && attr){
            colecao.map(item => item[attr] = item[attr].charAt(0).toUpperCase() + item[attr].slice(1));
        }else{
            colecao.map(item => item = item.charAt(0).toUpperCase() + item.slice(1));
        }
        
        return colecao;
    } else console.log('Lista vazia')
}

function fnGerarOpcoesAlfabeto() {
    const select = document.getElementById("letras");

    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const option = `<option value="${letra}">${letra}</option>`;
        select.innerHTML += option;
    }
}

export default {
    capitalizar: fnCapitalizar,
    gerarAlfabeto: fnGerarOpcoesAlfabeto,
}