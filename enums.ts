
enum one {

    a=10,b,c
}
console.log(one.b)

type two = string;
type three = number|string;
type sev = "joel"

let four:two = "joel";
let five=four as three
let eig = four as sev;
console.log(eig)

let f = <two>'joel';
let g = <string|number>9;

const fn = (a:number,b:number):number|string=>{
    return a
}

let fn1:string=fn(2,2) as string
//  let va:string = 10 as string
 let va1:string = (10 as unknown) as string

 const img = document.getElementById('#myid') as HTMLImageElement
 img.src





 