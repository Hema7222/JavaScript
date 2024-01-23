let a=10;
let b=11;
let c=132;

// function oddOreven(num){
//     if((num%2)==0)
//     return `${num} is Even`
//     else
//     return `${num} is Odd`
// }


// function oddOreven(num){
//     return ((num%2)==0) ? `${num} is Even` : `${num} is Odd`;
// }

function oddOreven(num){
         return ((num%2)==0) ? num+" is Even"  : num+ " is Odd";
}

console.log(oddOreven(a))
console.log(oddOreven(b))
console.log(oddOreven(c))

let json = {data:{length:10, res: [{"name":"Hema", gender: "female"},{"name":"HP", gender: "female"}]}}
json={data:{length:0, res:null}};
console.log(json?.data?.res?.length)
// console.log(json?.data?.res[2]?.name)
console.log(json?.data?.res)
json?.data?.res?.forEach(person =>{
    console.log(person.name)
})