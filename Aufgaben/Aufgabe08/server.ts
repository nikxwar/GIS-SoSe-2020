import * as Http from "http";

namespace Aufgabe08 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT);

    //wenn port keinen Wert hat wird 8100 zugewiesen
    if (!port)
        port = 8100;

    //Server server wird erstellt    
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    //Wenn Server auf Anweisungen hört, wird "Listening" ausgegeben
    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);

        _response.end();
    }
}
