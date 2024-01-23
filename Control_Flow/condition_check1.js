let str="Hello World"
let str1="Welcome All"
let a="23"
let b=23

a===b ? console.log(true) : console.log(false);   // absolute
a==b ? console.log(true) : console.log(false);   // values will be directly matched

str == str1 ? console.log(`${str} & ${str1} is equal`) : console.log(`${str} & ${str1} is not equal`);
str === str1 || str.includes(str1) ? console.log(`${str} & ${str1} is equal`) : console.log(`${str} & ${str1} is not equal`);
str === str1 && str.includes(str1) ? console.log(`${str} & ${str1} is equal`) : console.log(`${str} & ${str1} is not equal`);    //both true means && operator

if(str===str1){
    console.log(`${str} & ${str1} is equal`);
}
else if(str.includes(str1)){
    console.log(`${str} & ${str1} is equal, But word match`);
}
else{
    
}