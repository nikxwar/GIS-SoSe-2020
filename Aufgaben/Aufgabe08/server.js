"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
var Aufgabe08;
(function (Aufgabe08) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    //wenn port keinen Wert hat wird 8100 zugewiesen
    if (!port)
        port = 8100;
    //Server server wird erstellt    
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //Wenn Server auf Anweisungen hört, wird "Listening" ausgegeben
    function handleListen() {
        console.log("Listening");
    }
    //bei Anfrage an den Server wird diese Funktion ausgeführt
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // response wird in die URL übertragen
        _response.write(_request.url);
        _response.end();
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=server.js.map