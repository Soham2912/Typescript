// type username = (n:string,m:string)=>string;

// //let a:usernsme="false"

// interface Obj{
//     height:number;
//     weight:number;
//     age?:number;
// //? allows the property to be optional
// //diff between interface and type is interface can be extended
// }

// interface newObj extends Obj{
//     Qualif:number|string;
//     func?:(n:number,m:number) => void;
// }

// const func = (n:string,m:string):string =>{
//     return String(n+m);
// }

// const func2:username= (n,m)=> {
//     return n+m;
// };


// const arr:number[] = [12,24,36];
// const arr2:string[]= ["lol"];
// const arr3:Array<string|number> = ["lol"];

// arr2.forEach(i=>{
//     console.log(i);
    
// })


// const obj:Obj= {
//     height:180,
//     weight:22,
//     age:25,
// }

// const obj2:Obj= {
//     height:180,
//     weight:22,
//     age:25,
// }

// const obj3:Obj={
//     height:180,
//     weight:22,
    
// }
// const newO :newObj={
//     height:90,
//     weight:90,
//     Qualif:12
// }

// const newO2 :newObj={
//     height:90,
//     weight:90,
//     Qualif:"12",
//     func:(n:number, m :number) => {
//         console.log(n * m);
//     },
// }

// newO2?.func?.(20,30);
// //optional chaining

//-----------------------------

// type funct = (n:number, m:number,l?:number)=>number;
// //Optional Parameter
// const func:funct= (n:number,m:number,l) =>{

//     return n*m;

// }
// console.log(func(20,30));

// type funct = (n:number, m:number,l?:number)=>number;
// //Default param
// const func:funct= (n:number,m:number,l=20) =>{

//     return n*m*l;

// }

// type funct = (...m:number[])=>number[];
// //Rest operator
// const func:funct= (...m:number[]) =>{

//     return m;
// }

// console.log(func(20,30,40,50,60));

// type funct = (...m:number[])=>number;

// const func:funct=function lol(n:number):number{

//     return n;
// }
interface prodt {
    name:string;
    stock:number;
    price?:number;
   readonly id:string
//Optional property
}

type obj = (product:prodt )=>void;

const getData:obj = (product)=>{
    console.log(product);
    product.id="123";
}

const product1:prodt={
    name:"DPI",
    stock:1000,
    price:1.00,
    id:"1234"
}

getData(product1);