import { Dir } from "fs";
import { Store , Chat } from "./store/Store";


export interface Room {
    roomId : string;
    chats : Chat[]
}

export class InMemoryStore implements Store {

    private store : Map<string , Room>;

    // here i tell the typescript , that inside this class there will be a property called store and it will be a Map<string,Room>

    // but at this point the store is still undefined , if i use it before assigning , it will break

    constructor(){
       this.store = new Map<string , Room>()
    }
    // this actually creates an empty Map object in memory and assigns it to this.store


    initRoom(roomId : string){
        this.store.set(roomId , {
            roomId , 
            chats: []
        })
    }

    getChats(roomId : string , limit : number , offset : number){
        // here i expect all the chats in the room 

        const room = this.store.get(roomId);

        if(!room){
            return [];
        }
        else {
            return room.chats
        }


        //whenever you are building something like chat , you want to build something like a rollup , you dont want to bombard the users with thousand messages 

        // if i need last 50 chats , i will need 
         
    }

    addChat(room: string , limit : number , offset : number){

    }

    upvote(room : string , chatId : string){

    }


}


abstract class Animal {
    abstract makeSound() : void; 
    
    move() : void {
        console.log(" moving ... ")
    }
}





class Dog extends Animal { 
    makeSound(): void {
        console.log("woof !");
    }
}