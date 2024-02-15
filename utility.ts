
//utility types

//partial

interface Inter{
    id:number,
    name:string,
    mark?:number

}

const inter = (one:Inter,two:Partial<Inter>):Inter=>{
    return {...one,...two}
}

var inter2 = {
    id:1,
    name:"joe"
}

const inter1:Inter = inter(inter2,{id:2})
console.log(inter1)

//Required & Readonly

const inter3 = (assign:Required <Inter>):Inter=>{
    return assign
}
let Assign = {
    id:1,name:"io",mark:9,role:"dev"
}
console.log(inter3(Assign))

const inter4 = (assign1:Readonly<Inter>):Inter=>{
    return assign1
}
console.log(inter4(Assign))

const inter5:Readonly<Inter> = {
    ...inter1
}
console.log(inter5)
// inter5.id=2

inter4({...inter1})


//Record

const Record1: Record<string,string> = {
    name:"j",role:"dev"
}

type S = "id" | "job"
type S1 = 1 | "it" | "dev"

const Record2:Record<S,S1>={
    id:1,job:"dev"
}
interface assi {
    sub1:number,sub2:number
}
const Record3:Record<S,assi>={
    id:{sub1:99,sub2:89},job:{sub1:99,sub2:89}
}

//pick & omit

type pik = Pick<Inter,"id"|"name">

const pik1:pik={
    id:8,name:"ko"
}

type omit1 = Omit<Inter,"id">
const omit2:omit1={name:"ji"}

// Exclude & extract

type exclude = Exclude<S1,1>
type extract = Extract<S1,"it">

const exclude1:exclude="it"
const extract1:extract="it"

//nonnullable

type names="joel"|"chris"|"koe"|true|null|undefined
type nonnull= NonNullable<names>

//Return type

const rettype = (title:string,point:number)=>{
    return {title,point,j:9}
}

type newassign = ReturnType<typeof rettype>

const tsassign:newassign = {title:"joel",point:9,j:9}

//parameter
type Tassign = Parameters<typeof rettype>
const tassign:Tassign=["joel",9]
console.log(rettype(...tassign))