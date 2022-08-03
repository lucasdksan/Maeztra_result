function orderCre(value){
    const valueString = String(value);
    const len = valueString.length;

    let aux = 0;

    for(var a = 0; a < len; a++){
        if(( Number(valueString[a]) + 1 === Number(valueString[a+1])) && (a < len)){
            aux++;
        }
    }

    if(aux === len - 1){
        return true;
    } else return false;
}

function orderDecre(value){
    const valueString = String(value);
    const len = valueString.length;

    let aux = 0;

    for(var a = 0; a < len; a++){
        if(( Number(valueString[a]) - 1 === Number(valueString[a+1])) && (a < len)){
            aux++;
        }
    }

    if(aux === len - 1){
        return true;
    } else return false;
}

function Question(value){
    const result = orderCre(value) || orderDecre(value) ? 'Está ordenado' : 'Não está ordenado';

    return result;
}
