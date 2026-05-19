//type let us create custom types
type userID = string;
type point2d = {
    x: number,
    y: number
};

let location: point2d = {x: 2, y: 3}

let id: userID = 'aaa111'


type Direction =  "left" | "right" | 'up' | 'down';

let move = (dir: Direction):void => {console.log(`Moved ${dir}`)};

move('down');


//union

type ID = string | number


let printID = (id: ID):void =>{
    if (typeof id === "string") {console.log(id.toLowerCase())}
    else {console.log(id.toFixed(0))}
}

printID('OBDAKIHAFADN');
printID(2.5233)


//intersection

type TimeStamp = {
    createdAt : Date
};

type User = {
    username : string,
    email: string
}


type UserRecord = User & TimeStamp;

let newUser: UserRecord = {
    createdAt: new Date(),
    username: 'Pritam',
    email: 'pritam@pritam.in'
}