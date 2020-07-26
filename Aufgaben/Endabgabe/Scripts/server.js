"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
//orientiert an Prof. Dell´Oro-Friedls Videos für EIA 2 und Lukas' Musterlösung für L11
var Endabgabe;
(function (Endabgabe) {
    let orders;
    let port = Number(process.env.PORT);
    //wenn port keinen Wert hat wird 8100 zugewiesen
    if (!port)
        port = 8100;
    let databaseUrl;
    databaseUrl = "mongodb://localhost:27017";
    //databaseUrl= "mongodb+srv://xXMLG69qUicKsCoPeGoD420Xx:hunter2@nikxwar-gis.xciiw.mongodb.net/StayCold?retryWrites=true&w=majority"
    function startServer(_port) {
        console.log("Starting server on port: " + _port);
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("ColdWorld").collection("Orders");
        console.log("Database connection", orders != undefined);
    }
    startServer(port);
    connectToDatabase(databaseUrl);
    //Wenn Server auf Anweisungen hört, wird "Listening" ausgegeben
    function handleListen() {
        console.log("Listening");
    }
    //bei Anfrage an den Server wird diese Funktion ausgeführt
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/send") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storeOrder(url.query);
            }
            if (url.pathname == "/receive") {
                /*
                let receivedOrders: Order[]

                for (let i = 0; i < receivedOrders.length; i++) {

                    let receivedOrdersArray: Order = receivedOrders[i];
                    for (let key in receivedOrdersArray) {
                        _response.write(key + ": " + receivedOrdersArray[key] + "<br>");
                    }


                }

*/
            }
            _response.end();
        }
    }
    function storeOrder(_order) {
        orders.insertOne(_order);
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map