import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("New connection");
        res.end();
    }
});

server.listen(3000);

console.log("Server running at http://localhost:3000/");
