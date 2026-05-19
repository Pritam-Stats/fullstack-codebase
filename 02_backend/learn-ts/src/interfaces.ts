// when using classes it's better to use interface instead of type
type Flavour = {
    type: string;
    size: 'large' | 600 | 'small';
    sym: symbol
}

class Order implements Flavour {
    type = 'masala';
    size: "large" | 600 | "small" = "large";
    sym = Symbol('a')

}

//classes can only implements object types

// type color = 'white' | 'black';      won't work

// class Chai implements color {
//     color = 'black'
// }

interface color {
  tea: "white" | "black";
} 

class Chai implements color {
    tea: "white" | "black" = 'black';
}

//classes can use types but only of object shape. interface is always object shaped.

interface Response {
    ok: boolean | false;
}

class Call implements Response {
    ok: boolean = true;
}

