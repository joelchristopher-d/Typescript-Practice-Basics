let arr = [1,2,3,4,5];
let arr1:string[]=["j","o"];

let mix=["joel",333,true,undefined,null];
mix[0]=1;

arr.push(99);

let mytuple:[string,number,boolean,undefined];
console.log(typeof arr)


let obj={
    name:"joel",
    age:24
}
// obj.name=99;

type model = {
    name:string,
    age?:number,           // ? optional
    role:number|string
}
let demo:model={
    name:"joe",
    role:99
}
// demo.home="tenkasi";    

const fun1 = (demo1:model)=>{
    return "hello"+`${demo1.name}!`+demo1.age
}

console.log(fun1(demo));


interface model1 {
    name:string,
    age?:number,           // ? optional
    role:number|string
}

let demo2 ={
    name:"joe",
    role:99,
    age:9
}

let fun2=(demo2:model1)=>{
    return "hello"+`${demo2.name}!`
}
console.log(fun2(demo2))

let name1:"joel"|"chris"
// console.log(name1);

type str1 = (string|number)[]

type arr2={
    name:str1
}

let fun3=(msg:string):void=>{
    console.log(msg)
}
fun3("joe");
let fun4=function(a:number,b:number):number{
    return a
}
fun4(1,3);

type fun4 =(a:number,b:number)=>number

let fun5:fun4=(c,d)=>{
    return c+d
}

interface fun5 {(a:number,b:number):number}

const fun6=(...num:number[]):number=>{
    return num.reduce((a,b)=>a+b)
}

// const fun7=(errmsg:string)=>{
//     throw new Error(errmsg)
// }
// fun7("joel")

let fun8=(value:number|string):string=>{
    if(typeof value == 'number')return 'num'
    if(typeof value == 'string')return 'str'
    throw new Error("joelllll")
}
