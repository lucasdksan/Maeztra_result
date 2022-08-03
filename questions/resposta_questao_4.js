function yearCount(valueMatriz){
    let yearX = [], yearY = [], yearResult=[], yearResultV, yearResultAux, len;

    valueMatriz.forEach(element => {
        yearX.push(element[0]);
        yearY.push(element[1]);
    });

    yearX.sort();
    yearY.sort();

    yearResultAux = yearX.concat(yearY);

    yearResultAux = yearResultAux.filter(function(este, i) {
        return yearResultAux.indexOf(este) === i;
    });

    len = yearResultAux.length;

    yearResultV = new Array(len).fill(0);

    valueMatriz.forEach(element => {
        yearResultAux.forEach((e,k)=>{
            if(e == element[0]){
                yearResultV[k] ++;
            } else if(e == element[1]){
                yearResultV[k] ++;
            }
        });
    });

    yearResultV.forEach((element, key)=>{
        if(element > 1){
            yearResult.push(yearResultAux[key]);
        }
    });

    return yearResult;
}