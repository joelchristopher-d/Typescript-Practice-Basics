
const gen = <k>(param:k):k=> param
console.log(gen({a:1,b:2}))

const Gen1 = <T>(arg:T):boolean=>{
    return(typeof arg == 'object' && !Array.isArray(arg) && arg!=null)
}
console.log(Gen1("joel"))
console.log(Gen1({a:1}))

let ar = [1,2,3]
if (!ar){
    console.log("9")
}

const Gen2 = <T>(arg:T):{arg:T, is: boolean}=>{
    if (Array.isArray(arg) && !arg.length)
    {return{arg,is:false}}
    if(Gen1(arg) && !Object.keys(arg as keyof T).length)
    {return{arg,is:false}}
    return {arg, is: !!arg }
}
console.log(Gen2(9))
console.log(Gen2(0))
console.log(Gen2([1,2]))
console.log(Gen2([]))
console.log(Gen2({a:1,b:2}))
console.log(Gen2({}))
console.log(Gen2("joel"))
console.log(Gen2(undefined))
console.log(Gen2(NaN))

interface In <T>{
    value:T
    is:boolean
}

const Gen3 = <T>(arg:T):In<T>=>{
    if (Array.isArray(arg) && !arg.length)
    {return{value:arg,is:false}}
    if(Gen1(arg) && !Object.keys(arg as keyof T).length)
    {return{value:arg,is:false}}
    return {value:arg, is: !!arg }
}

interface Hashid{
    id:string
}
const Gen4 = <T extends Hashid>(user:T):T=>{
    return user
}
console.log(Gen4({id:"joel"}))

const Gen5 = <T extends Hashid, K extends keyof T>(user:T[], Key:K):T[K][]=>{
    return user.map(users=>users[Key])
}

const arob = [
    {
        id:"1",
        home:"kdm",
        family:{
            fname:"joel",
            fname2:"noel"
        }},
        {
            id:"2",
            home:"tk",
            family:
            {
                fname:"j"
            }}
    ]
console.log(Gen5(arob,"home"))

class stateobject<T>{
    private data:T
    constructor(value:T){
       this.data = value
    }
    public get state():T{
        return this.data
    }
    public set state(value:T){
        this.data=value

    }

}
const OBJ = new stateobject("joel")
console.log(OBJ)

OBJ.state="joe"
console.log(OBJ.state)

const OBJ1 = new stateobject<(number|string|boolean)[]>([1,"o",true])
console.log(OBJ1.state)