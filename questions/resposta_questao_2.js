function repeatNumberValidation(value){
    const result = [];

    var filtered = value.filter(function(elemento, i) {
        if(value.indexOf(elemento) !== i) {
            result.push(elemento)
        }
        return value.indexOf(elemento) == i;
    });

    return result;
}