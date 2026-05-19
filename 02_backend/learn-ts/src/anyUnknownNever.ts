//unknown is useful

import { isNumericLiteral } from "typescript";

let x: unknown;


x = 3;

x = 'abc'   //now x has been assigned string
// console.log(x.toUpperCase())    //you can't do this directly since it's type unknown you have to do a check that's must
if (typeof x === "string") {
    console.log(x.toUpperCase())
} else {
    console.log(Number(x))
}

console.log(x);

let y: any;
y = 'abc';
console.log(y.toUpperCase())    // you can do this with any, type safety completely disabled

y = '6';
console.log(y.toUpperCase())    // you can do this with any, type safety completely disabled


//useful case
const fetchData = (...args:unknown[]):unknown => {
    return args[args.length - 2];
};

let content: unknown = fetchData(4,5,6,'a','f');


if (typeof content === 'string') {
    console.log(content.toLocaleUpperCase())
} else {
    console.log(content)
}


//force type

let res:any = '33';
let numLen : number = (res as string).length;   //force to a type to get the type features


// let inputElement = document.getElementById("username") as HTMLInputElement  // assertion



//never

function crashApp(msg: string) : never {
    throw new Error(`The app is currently down for ${msg}`)
}

crashApp('xyz')