function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return function someName() {
        console.log('this is a named function');
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('this is an anonymous function');
}