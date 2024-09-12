function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}
module.exports = {add,sub}
// ^ multi export ^ / Default Export

// Export using export Object (anonymous function:-func without func name)
exports.add1 = (a,b)=> a+b
exports.sub2 = (a,b)=> a-b