console.log("hello world from external script", "this is second part")

//let , var , const

let $ = "Ronak"

name = "ruhi"

console.log($)

// data types

//number 

let num = 12345
let numbig = 90071992547409910012 //print wrong

// //max safe integer = 2^53 - 1

console.log(num , numbig)

//big int

let bigInt = 90071992547409910012n

// //range = 1.7 * 100^308

console.log(bigInt)

//string

let num3 = 1234

let str = "gdsc item" // simple way to assign value in string
let str2 = `gdsc itm ${num3} webinar` // ` ${} ` -> syntax refers to string literals

console.log(str)
console.log(str2)

// null

let nullVar = null

console.log(nullVar)

// undefine

let name

console.log(name)

//  symbol

let id = Symbol("id")
let id2 = Symbol("id")

console.log(id)

// boolean

let boll = false

console.log(boll)

//alert

alert("this is alert")

//prompt

let input = prompt("enter your name" , "GDSC")

console.log(input)

// confirm
 let conf = confirm("are you a gdsc member") //true | false
console.log(conf)

// number conversion

//typeof operator

let str3 = "gdsc"

let bool = true

console.log(str3 , typeof str3)
console.log(Number(str3) , Number(bool))
//            |                    |
// convert string to number     convert boolean to number

//string

let num4 = 5469

let boll2 = false

console.log(String(num4))  // convert num to string
console.log(String(boll2)) // convert boolean to string

// boolean

let num5 = 5469

let str4 = ""

console.log(Boolean(num5))  // convert num to boolean
console.log(Boolean(str))   // convert string to boolean

// basic operators

// +

console.log(12 + 34)

console.log("gdsc" + " itm")

console.log(12 + "34")

// -

console.log(34 - 1)

console.log("gdsc" - " itm")

// *

console.log(11*34)
console.log("11"*"34")

// /

console.log(12/0)

console.log("12r"/3)

// %

console.log(13%4)

// **

console.log(2**4)

// + uniary plus
let str6 = "23453"

console.log(typeof (+str6)) // uniary plus convert any data type to number

// // -

let num6 = 12345

console.log(-num6)

// comparison operators

// >

console.log(12>24)

// <

console.log(12<=12)

// equal

console.log(12 == 12)

console.log(12 === "12") // ==== check both operands should be of same datatype

console.log(null === undefined)

// if else

let a = 12

if(12>121){
console.log("12 > 121")
}
else if(a > 121){
 console.log(a , "> 121")
}
else{
console.log("12 < 121")
}

switch (a) {
    case 124:
        console.log(a)
        break;

    case 12:
        console.log(a)
        break;

    default:
        console.log("default")
        break;
}

a>10 ? console.log("this is a", a) : console.log("this is else condition")

// and ( && ) -> return first false value

console.log(true && 12 && false) // return false

// not ( ! )  

console.log(!12) // return false

// OR ( || )  -> return first true value

console.log(0 || "this is or")  // return this is or

// ??  -> return first define value

 console.log(0 ?? "this is nullish")  // return 0

// loops

// while
let i = false
let val = 0
while (val<=10) {
    if(val==5) break
    console.log(val , "this is while")
}

do {
  console.log(i)
} while (i);

for(let j =0 ; j <= 5 ; j++){
    console.log(j)
}

// functions

// 1st type

function myFunc(name) {
    console.log(name)
}

let myFunc2 = myFunc

myFunc2("saurabh")

// 2nd type

let myFunc3 = function (name) {
    console.log(name)
}

myFunc3("my function 3")

// arrow function

const myFunc4 = (name) => {
    console.log(name)
}

myFunc4("this is arrow function")

// object

let obj = {
    name : "arun",
    age : 21
}

const obj2 = Object.assign({name : "arun"})

console.log(obj2)

const attende = function(name , age){
    //this -> {}
    this.name = name,
    this.age = age
    // return this
}

const attende1 = new attende("arun" , 21)
const attende2 = new attende("saurabh" , 21)

// console.log(attende1 , attende2)

let obj3 = {
    name: {
        firstName : "Arun",
        lastName : "Patel"
    },
    age: 21,
    "space key": "this is space key",

}

console.log(obj3.name.firstName)
console.log(obj3?.name?.firstName || "By default Name")

const number = 1.345

console.log(Math.floor(number))
console.log(Math.round(number))

console.log(Math.max(12 , 45 , 458))
console.log(Math.min(12 , 45 , 458))
let anum = 10, b = 90;
// let randomNum = Math.random()  // 0 - 1
let randomNum = Math.floor(Math.random() * (b - anum) + anum)

console.log(randomNum)

const date = new Date()

console.log(date)
console.log(date.getDate())
console.log(date.getMonth() , date.getFullYear())

// let customDate = new Date("2023/02/02 18:00:00")
let customDate = new Date("2023/02/02 7:20:00 PM")

console.log(customDate.toLocaleString())

let arr = [1, 3, 5, "string", { name: "name" }, new Date()]

// console.log(typeof arr)

//array methods

// let array = [1 , 4 , 7 , 9 , 10]

//pop
// console.log(array)
// array.pop()
// console.log(array)

//push 

// console.log(array)
// array.push(25)
// console.log(array)

// shift

// console.log(array)
// array.shift()
// console.log(array)

// unshift 

// console.log(array)
// array.unshift(20)
// console.log(array)

// concat

// console.log(array.concat(arr))

// sort

// console.log(array.sort((a , b)=>b-a))

// splice

// console.log(array)
// // const spliceArray = array.splice(1 , 2)
// // console.log(spliceArray)
// array.splice(1 , 2, [1 , 45])
// console.log(array)

// slice

// const sliceArr = array.slice(1 , 4)

// console.log(sliceArr)

// let array = [1 , 4 , 7 , 9 , 10]

// reverse

// console.log(array.reverse())

// index of 

// console.log(array.indexOf(7))

// join

// console.log(array.join("-"))

// map  filter  find  reduce

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

// const mapArray = array.map((ele , i)=>{
//     console.log(i , ele)
//     return ele*2
// })

// console.log(mapArray)

// const filterArr = array.filter((ele , i)=>ele%2)

// console.log(filterArr)

// const findOne = array.find((ele)=>ele===13)

// console.log(findOne)

// reduce

let array = [1, 4, 7, 9, 10]

// arrayName.reduce((currentValue , upcomindValue)=>{}, initalValue)

// const sum = array.reduce((currentValue , upcomingValue)=>{
//     currentValue = currentValue + upcomingValue
//     return currentValue
// }, 0)

// console.log(sum)

// for(let i = 0 ; i < array.length ; i++){
//     console.log(array[i])
// }

// array.forEach((ele , i)=>{
//     console.log(ele)
// })

// setTimeout(() => {
//     console.log("run")
// }, 2000);

// setInterval(() => {
//     console.log("ineterval")
// }, 3000);

let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("this work is done")
        reject("this work is rejected")
    }, 2000);
})

// console.log(mypromise)

// then catch

// mypromise.then(res=>{
//     console.log(res)
// }).catch((e)=>{
//     console.log(e)
// }).finally(()=>{
//     console.log("finally")
// })

// async await

// const myfunc = async () => {
//     try {
//         const res = await mypromise
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

// myfunc()