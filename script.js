
function capturarPartidas(){
    let vitorias = document.querySelector('#vitorias').value
    let derrotas = document.querySelector('#derrotas').value
    calcularPartidasRankeadas(vitorias,derrotas)
}



function calcularPartidasRankeadas (vitorias,derrotas){
    let saldoVitorias = vitorias - derrotas
    let nivel

    if (vitorias < 10){
        nivel =  'Ferro'
    }else if(vitorias<=20 ){
        nivel =  'Bronze'
    }else if(vitorias<=50 ){
        nivel =  'Prata'
    }else if(vitorias<=80 ){
        nivel =  'Ouro'
    }else if(vitorias<=90 ){
        nivel =  'Diamante'
    }else if(vitorias<=100 ){
        nivel = 'Lendário'
    }else{
        nivel =  'Imortal'
    }

    return alert(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)
}

btn = document.querySelector('button').addEventListener('click',capturarPartidas)
