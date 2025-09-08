import { Store , Chat } from "./store/Store";


export interface Room {
    roomId : string;
    chats : Chat[]
}

export class InMemoryStore implements Store {

    private store : Map<string , Room>;

    constructor(){
       this.store = new Map<string , Room>()
    }

    initRoom(){

    }

    getChats(room : string , limit : number , offset : number){

    }

    addChat(room: string , limit : number , offset : number){

    }

    upvote(room : string , chatId : string){

    }


}




// this is called type inference , it gets the type
// ts doesnt understand your code ,it only understands the type
//create a function that takes another function as input and runs it after 1 seco



// this is how you give type to a function 
// passing an argument 
// things can be infered



//understanding interfaces 
// how can you assign types to objects ? 


// interfaces basically describe how you assign types to objects
//to create a type of an object
// combining multiple things in one object


interface User { 
    firstname : string ; 
    lastname : string ;
    email : string ;
    age : number
}




function isLegal(user: User){
  if(user.age > 18){
    return true; 
  }

  else {
    return false;
  }
}


const legal = isLegal({
    firstname : 'arya',
    lastname : 'fsdf',
    age : 32,
    email : 'dgffdgfdg'
})





if(legal){
    console.log("this legal nig")
}

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// class Employee implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string): void {
//         console.log(`${phrase}, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

const a = new Employee("harkirat", 23);
a.greet("Hello"); // Output: Hello, my name is harkirat and I am 23 years old.


// how do we do classes in js , like we dont need o write the name and age before contructor right , can oyu please explain everything

// interface User{
//   age : number
// }

// interface Manage extends User{
//   name : number;
// }

// interface Employee extends User{
//   name : string;
// }



function myFunction(cb1: () => void , cb2 : (number:string ) => number) : string {
  cb1();
  cb2("");

  return "1";
}


function first() : any{
  console.log("first")
}


function second() : any{
  console.log(
    'secnd'
  )
}

myFunction(first , second);


interface Manager {
  name : string
}

interface Techlead {

}




// what are types 

//very similar to interface ,it lets you aggegate data together

type User2 = {
  firstName : string;
  lastname : string;
}


interface User3 {
  firstname : string;
  lastname : string;
}


// unions 
type StringOrNumber = string | number;


type greetArg = number | string
function greet(id: greetArg){

}

greet(1);
greet("1")


// intersection
// every property of multiple ->

type Employee = {
    name : string ;
    startDate : Date;
  }

interface Manager{
  name : string;
  department : string;
}

type Techleadd = Employee & Manager

const te: Techleadd = {
  name : "har",
  startDate : new Date(),
  department : "rfs"
}
// 


// strongly typed vs loosely typed
// it is just a syntactical superset of javascript and its optional typing
// the tsc compiler -> ts code to js command 
// number , string , boolean
// unions and intersection 
// how to write array in ts 