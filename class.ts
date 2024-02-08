class cls{
    fname:string
    
    constructor(fname:string){
        this.fname = fname
        console.log(this.fname)
    }
}

let ob = new cls("joel")



class coder{
    home!:string
    constructor( public fname:string, public readonly age:number, private role:string, protected company:string="Devcare"){
        this.fname = fname
        this.age = age
        this.role = role
        this.company = company

    }

    getage(){
        console.log(`hi i'm ${this.age}`)
    }
}
// const Coder = new coder("joel", 24, "dev")
// console.log(Coder)
// Coder.getage()
// console.log(Coder.role, "\n",Coder.company)

class coder2 extends coder{
    constructor(public computer:string,fname:string,age:number,role:string){
        super(fname,age,role)
        this.computer = computer
    }
    
}
const Coder1 = new coder2("honor","joe",24,"de")
Coder1.getage()
// console.log(Coder1.company)
// console.log(Coder1.role)


class getset{
    private dataset:string[];

    constructor(){
        this.dataset = []
    }

    public get data():string[]{
        return this.dataset
    }

    public set data(value:string[]){
        if (Array.isArray(value) && value.every(el=>typeof el === 'string')){
            this.dataset = value
            return 
        }
        else throw new Error("not a string")
       

    }
}
const GetSet = new getset()
GetSet.data = ["j"]
console.log(GetSet.data)
GetSet.data = [...GetSet.data, "oel"]
console.log(GetSet.data)
GetSet.data =["o",999]
