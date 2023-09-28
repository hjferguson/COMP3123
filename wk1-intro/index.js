console.log("hello world")
var a = 100 //global variable
let b = 100//block variable
const c = 100//cant change
x = 100//bad practice. but defaults to global

student = {
    sid: 1,
    snm: "Pritesh",
    city: "Toronto"
    // function(){
    //     console.log("Student")
    // }
}
console.log(student.snm)

var{sid,snm:a2,city:a3} = student
console.log(`A: ${a2}`)

