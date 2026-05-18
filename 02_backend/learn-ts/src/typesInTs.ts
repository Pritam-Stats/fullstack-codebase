//there are two ways how types can be assigned in ts.
//1. annotate - we tell the type explicitly
//2. Inference - Implicit means ts infer the type by its own when we assign a value

let x = 9;  //no error (ts inferred the type number)

// x = 'a' can't do this

let y: string = 'a'; //we are annotating

let isAllowed = Math.random()*100 >= 18 ? true : false;