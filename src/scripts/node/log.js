import { EventEmitter } from "events";

export class Logger extends EventEmitter {
    log(message) {
        // send a message
        console.log(message);

        // raise the event
        this.emit("logging", {
            id: "foo",
            password: "bar",
            token: "secret",
            time: new Date().toISOString(),
        });
    }
}
