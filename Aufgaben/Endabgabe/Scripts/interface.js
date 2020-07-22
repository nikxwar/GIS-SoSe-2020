"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.articles = [];
    async function getArticlesFromJSON(_url) {
        let response = await fetch(_url);
        let jsonObj = await response.json();
        Endabgabe.articles = JSON.parse(JSON.stringify(jsonObj));
        Endabgabe.createArticles();
    }
    Endabgabe.getArticlesFromJSON = getArticlesFromJSON;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=interface.js.map