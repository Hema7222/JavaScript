alert(document.getElementById("add").innerHTML);

document.getElementById("add").innerHTML = "<p>Gone</p>"

let json = {data:{length: 10, res:[{"name":"hema", gender: "female", age:23}, {"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23},
{"name":"hp", gender: "female", age:23}]}}

let outputHTML = "<table class='table w-50 table-stripped table-bordered'><thead><tr><th>Name</th><th>Gender</th><th>Age</th></tr></thead></table>";
json.data.res.forEach(person =>{
    outputHTML = `${outputHTML} <tr><td>${person.name}</td><td>${person.gender}</td><td>${person.age}</td>`
})

outputHTML = `${outputHTML} </tbody></table>`
document.getElementById("add").innerHTML = outputHTML


