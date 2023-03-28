// let , var , const
// let , var -> 

if(true){
    var name = "Arun"
    let letName = "Arun in let keyword"
    console.log(name)
    console.log(letName)
}

console.log("outside the if statement" ,name)
console.log("outside the if statement" ,letName)

function myfunc(){

}

console.log(typeof myfunc)

const obj = {
    name : "Gdsc",
    acc : {
        currentYear : 3
    },
    func : function(){

    }
}

// const obj2 = obj

// obj2.name = "itm"

// 1st 

// // const obj2 = Object.assign({} , obj) // shallow copy

// const obj2 = JSON.parse(JSON.stringify(obj)) // deep copy

// obj2.name = "itm"
// obj2.acc.currentYear = 2

// // const str = JSON.stringify(obj)
// // console.log(JSON.parse(str))

// console.log("obj" , obj , "obj2" , obj2)

// spread and rest operator => ...

const arr = [1 , 3 , 4 , 5 , 7 , 80]

const [a , b , ...rest] = arr

console.log(arr)
console.log(a , b , rest)

// const arr2 = [...arr]

// arr2.pop()

// console.log(arr)

// function Binding

const objbind = {
    firstName : "Gdsc ITM"
}

function showName(){
    console.log(this.firstName)
}

const bindedFunction = showName.bind(objbind)

bindedFunction()

const obj1 = {
    collegeName: "Gdsc ITM"
}

const haveGarden = {
    garden: false,
    assignGarden: function () {
        this.garden = true
    }
}

obj1.__proto__ = haveGarden

obj1.assignGarden()

console.log(obj1 , obj1.garden)

console.log("first")

setTimeout(() => {
    console.log("set timeout run")
}, 0);

console.log("process end")