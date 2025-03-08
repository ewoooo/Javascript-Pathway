"use strict";

import { fileURLToPath } from "url";
import path from "path";
import os from "os";
import fs from "fs";

// path module
const __filename = fileURLToPath(import.meta.url); // Path to the current file, import.meta.url is a URL object representing the current module's URL.
const __dirname = path.dirname(__filename);

// os module
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory} bytes`);
// console.log(`Free Memory: ${freeMemory} bytes`);

// file system module
// const files = fs.readdirSync("./");

// fs.readdir("./", function (err, files) {
//     if (err) console.error(err);
//     else console.log(files);
// });

// Event Module
