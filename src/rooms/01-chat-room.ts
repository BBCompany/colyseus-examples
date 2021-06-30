import { Room } from "colyseus";

export class ChatRoom extends Room {
    // this room supports only 4 clients connected
    maxClients = 10000;

    onCreate (options) {
        console.log("Lobby created!", options);

        this.onMessage("message", (client, message) => {
            console.log("Lobby received message from", client.sessionId, ":", message);
            this.broadcast("messages", message);
        });
    }

    onJoin (client) {
 //       this.broadcast("messages", `${ client.sessionId } joined.`);
        console.log("messages", `${ client.sessionId } joined.`);       
    }

    onLeave (client) {
 //       this.broadcast("messages", `${ client.sessionId } left.`);
        console.log("messages", `${ client.sessionId } left.`);
    }

    onDispose () {
        console.log("Dispose ChatRoom");
    }

}
