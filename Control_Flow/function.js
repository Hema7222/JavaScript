function add(a,b){
    let c = a + b;
    return c;
}

let sub = (a, b) =>{
    let c = a - b;
    return c;
}

const mul = () =>{
    let a = prompt("Enter A")
    let b = prompt("Enter B")
    let c = parseInt(a) * parseInt(b)
    return c
}

let addRes = add(7 ,8)
let subRes = sub(10 ,8)
let mulRes = mul(10 ,8)

console.log(`Add 7+8=${addRes} 
        sub 10-8=${subRes}
        mul=${mulRes}`)