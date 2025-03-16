function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction(){
    return function named(){
        return "named";    
    }
}
function returnsAnAnonymousFunction(){
    return function(){
       return "anonymous";        
    }
}