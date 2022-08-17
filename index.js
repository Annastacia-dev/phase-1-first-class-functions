
function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return function greetingFunction(){
        return greetingFunction;
    }
};

function returnsAnAnonymousFunction(){
    return () => AnAnonymousFunction;
}
