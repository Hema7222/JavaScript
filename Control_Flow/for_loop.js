let s=["Hema","Hari","Hp","shalu"]

// for(let index = 0; index<s.length; index++){
//     const element=s[index];
//     console.log(index+" : "+element)
// }

// //solution 2
// s.forEach(element =>{
//     console.log(element);
// });

// //solution 2 with index
// s.forEach(element, index =>{
//     console.log(index+" : "+element);
// });

// //array concat
// let res ="";
// s.forEach(element, index =>{
//     res=res+ " : "+element
//     console.log(res);
// });

let res1=s.map(element=>{return {"name" : element}});
console.log(res1);


let json = {data:{length: 10, res:[{"name":"hema", gender: "female"}, {"name":"hp", gender: "female"}]}}
let res2 = json.data.res.map(person => { return person.name+"/"+(person.gender.toUpperCase().substring(0,1))+" "+person.age})
console.log(res2)
