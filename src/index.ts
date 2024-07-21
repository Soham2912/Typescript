type usernsme = (n:string,m:string)=>string;

//let a:usernsme="false"

interface Obj{
    height:number;
    weight:number;
    age?:number;
//? allows the property to be optional
//diff between interface and type is interface can be extended
}

interface newObj extends Obj{
    Qualif:number|string;
}

const func = (n:string,m:string):string =>{
    return String(n+m);
}

const func2:usernsme= (n,m)=> {
    return n+m;
};


const arr:number[] = [12,24,36];
const arr2:string[]= ["lol"];
const arr3:Array<string|number> = ["lol"];

arr2.forEach(i=>{
    console.log(i);
    
})


const obj:Obj= {
    height:180,
    weight:22,
    age:25,
}

const obj2:Obj= {
    height:180,
    weight:22,
    age:25,
}

const obj3:Obj={
    height:180,
    weight:22,
    
}
const newO :newObj={
    height:90,
    weight:90,
    Qualif:12
}