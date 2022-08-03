function identify(value){
    if(value == '('){
        return ')';
    } else if(value == '{'){
        return '}';
    } else if(value == '[') {
        return ']';
    } else {
        return false;
    }
}

function typeElement(value){
    if(value == '('){
        return 'parêntese';
    } else if(value == '{'){
        return 'chave';
    } else {
        return 'colchete';
    } 
}

function pairDetection(value, arrayElements, typeN){
    const len = arrayElements.length;

    for(var a = value + 1; a<len; a++){
        if(arrayElements[a] == typeN){
            return true;
        } else {
            return false;
        }
    }
}

function score(array){
    var chaOp = 0, 
        chaClo = 0, 
        paOp = 0,
        paClo = 0,
        colOp = 0,
        colClo = 0;

    let text;

    array.forEach((element)=>{
        if(element == '('){
            paOp++;
        } else if(value == '{'){
            chaOp++;
        } else if(value == '[') {
            colOp++;
        } else if(element == ')'){
            paClo++;
        } else if(value == '}'){
            chaClo++;
        } else if(value == ']') {
            colClo++;
        }
    });

    if(paOp != paClo){
        text = text + 'parêntese';
    } else if(colClo != colOp){
        text = text + '/colchete';
    } else if(chaClo != chaOp) {
        text = text + '/chave';
    }
}

function charValidation(value){
    const array = value.split(' ');
    const tam = array.length;
    let typeE, len=0, args = [];
    array.forEach((element, key) => {
        typeE = identify(element);

        if(typeE){
            if(pairDetection(key, array, typeE)){
                len++;
            }
        }
    });

    if(len == tam/2){
        return 'é uma sequência válida';
    } else if(len != tam/2) {
        return 'não é uma sequência válida';
    }
}