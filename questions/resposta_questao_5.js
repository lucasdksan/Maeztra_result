function combinatorialAnalysis(value){
    const len = value;
    let aux = value -1, i=0, result = len;

    for(i;i<len;i++){
        if(aux > 0){
            result = result*aux;
            aux = aux - 1;
        }
    }

    return result;
}