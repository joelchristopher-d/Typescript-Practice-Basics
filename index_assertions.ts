

// interface Orginal{
//     name:string,
//     role:string,
//     age:number
// }


interface Orginal {
    [index: string]: string | number
}

let Duplicate: Orginal = {
    name: "joel",
    role: "dev",
    age: 24
}
console.log(Duplicate.name, Duplicate['age'])

for (let duplicate in Duplicate) {
    console.log(Duplicate[duplicate])
}
// ---------------------------------------------------------------
interface Orginal2 {
    readonly [index: string]: number
}

let Duplicate2: Orginal2 = {
    legpiece: 10,
    wings: 10,
    boneless: 1,
    lolipop: 10,

}

const Total = (dup: Orginal2): number => {
    let total = 0
    for (let dupp in dup) {
        total += dup[dupp]
    }
    return total
}
console.log(`Total:${Total(Duplicate2)}`)

// Duplicate2.legpiece=20;
// --------------------------------------------------------------

interface Orginal3 {
    readonly [index: string | number]: number
    legpiece: number,
    wings: number,
    boneless: number,
    lolipop: number
}

let Duplicate3: Orginal3 = {
    legpiece: 10,
    wings: 10,
    boneless: 1,
    lolipop: 0
}

const Total1 = (dup: Orginal3): number => {
    let total = 0
    for (let dupp in dup) {
        total += dup[dupp]
    }
    return total
}
console.log(`Total:${Total(Duplicate3)}`)
// Duplicate3.drumstick = 9;
console.log(Duplicate3['Dave'])

// ----------------------------------------------

const obj0 = {
    hd: "k"
}
console.log(obj0['hd'])

interface mod1 {
    [key: string]: number | string | number[] | undefined
    owner: string,
    year: number,
    available?: number[]
}

const mod2: mod1 = {
    owner: "dawson",
    year: 33,
    available: [1, 2, 6]
}

console.log(mod2['role'])
for (let i in mod2) {
    console.log(mod2[i])
    console.log(mod2[i as keyof mod1])
}

Object.keys(mod2).map(key => {
    console.log(mod2[key as keyof typeof mod2])
})

const modkey = (mod: mod1, key: keyof mod1): void => {
    console.log(key, mod[key])
}
modkey(mod2, 'year')
//___________________________________________________________________________



// interface income {
//     [key: "joel"]: number
// }

type streams = "joel" | "dawson" | "ben";
type income = Record<streams, string | number>

const ex:income ={
    joel:1,
    dawson:2,
    ben:3
}
for(let e in ex){
    console.log(ex[e as keyof income])
}