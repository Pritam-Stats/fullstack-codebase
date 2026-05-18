//there are two ways how types can be assigned in ts.
//1. annotate - we tell the type explicitly
//2. Inference - Implicit means ts infer the type by its own when we assign a value

import { walkUpBindingElementsAndPatterns } from "typescript";

let x = 9;  //no error (ts inferred the type number)

// x = 'a' can't do this

let y: string = 'a'; //we are annotating

let isAllowed = Math.random()*100 >= 18 ? true : false;


//union and any and custom data types

let apiReqStatus : "Success" | "Pending" | "Failed" = 'Pending';    //custom datatypes, won't accept anything beyond this. works as options

apiReqStatus = 'Success';


let totalCount: string | number = 10000  //we might see a situation where we can get both things

totalCount = '100k';  //accepted because of union

let airlineSeat : 'window' | 'aisle' | 'middle' = 'window';


//change the seat
airlineSeat = "aisle";



let nums: string[] = ['12', '34', '56', '99'];

let curr:string | undefined;

for (let x of nums) {
    if (x === '99') {
        curr = x;
        break
    };

}

console.log(curr);  //if you try to console log here only with given data type as string, it will show error
//because it is possible that curr never gets assigned to a value so we will not get a string.
//give a union as undefined


//imp: we have a special data type as 'any'. But we prefer to not use it ever. because we are using any means we don't care about type strictness
//which is the main point of using ts.

