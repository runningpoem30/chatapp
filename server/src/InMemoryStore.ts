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



