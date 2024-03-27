
let json = {status: true, data:[{"name": "hema", age: 23},{"name": "hp", age: 23}]}

function add(a,b){
    let c = a + b;
    return c;
}

function sub(a,b){
    let c = a - b;
    return c;
}

export default {add, sub, json};