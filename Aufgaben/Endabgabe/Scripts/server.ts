import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

//orientiert an Prof. Dell´Oro-Friedls Videos für EIA 2 und Lukas' Musterlösung für L11

export namespace Endabgabe {
    interface Order {
        [type: string]: string | string[];
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined = Number(process.env.PORT);

    //wenn port keinen Wert hat wird 8100 zugewiesen
    if (!port)
        port = 8100;

    let databaseUrl: string;
    databaseUrl = "mongodb://localhost:27017";
    //databaseUrl= "mongodb+srv://xXMLG69qUicKsCoPeGoD420Xx:hunter2@nikxwar-gis.xciiw.mongodb.net/StayCold?retryWrites=true&w=majority"

    function startServer(_port: number | string): void {

        console.log("Starting server on port: " + _port);

        let server: Http.Server = Http.createServer();

        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);

        server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true }
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("ColdWorld").collection("Orders");
        console.log("Database connection", orders != undefined);
    }

    startServer(port);
    connectToDatabase(databaseUrl);

    //Wenn Server auf Anweisungen hört, wird "Listening" ausgegeben
    function handleListen(): void {
        console.log("Listening");
    }

    //bei Anfrage an den Server wird diese Funktion ausgeführt
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");

        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/send") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
                storeOrder(<Order>url.query);
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
    function storeOrder(_order: Order): void {
        orders.insertOne(_order);

    }

}

