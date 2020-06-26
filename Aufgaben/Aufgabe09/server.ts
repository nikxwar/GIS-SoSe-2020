import * as Http from "http";
import * as Url from "url";

namespace Aufgabe09 {
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

    //bei Anfrage an den Server wird diese Funktion ausgeführt
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");

        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br>");
                }
            }

            if (url.pathname == "/json") {
                let jsonString: string = JSON.stringify(url.query);
                _response.write(jsonString);
            }

            _response.end();
            
        }
    }
}
