import { Logger } from "./log.js";

// // Register an event
// emitter.on("messageLogged", (e) => {
//     console.log("Event Raised", e);
// });

// // Raise an event
// emitter.emit("messageLogged", {
//     id: 1,
//     url: "http://example.com",
//     data: "Some data",
// }); // Making a noise, signalling something.

const logger = new Logger();

// Raise: Logging (data: Message)
logger.on("logging", (data) => {
    console.log("Logging with:", data);
});

logger.log("Hello, world!");
