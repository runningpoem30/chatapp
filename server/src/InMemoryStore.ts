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


function greet(firstname: string){
    console.log('hi' + firstname)
}

greet('arya');





// this is called type inference , it gets the type
// ts doesnt understand your code ,it only understands the type
//create a function that takes another function as input and runs it after 1 second



function abc(){
    console.log(" hi there")
}


function takeAnother(x : () => void){
   setTimeout(() => {
    x()
   }, 1000);
}




// this is how you give type to a function 
// passing an argument 
// things can be infered
takeAnother(abc)



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








