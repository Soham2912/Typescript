type usernsme = (n:string,m:string)=>string;

//let a:usernsme="false"

type Obj={
    height:number;
    weight:number;
    age?:number;
//? allows the property to be optional

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