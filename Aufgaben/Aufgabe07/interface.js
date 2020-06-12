"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.articles = [];
    async function getArticlesFromJSON(_url) {
        let response = await fetch(_url);
        let jsonObj = await response.json();
        Aufgabe07.articles = JSON.parse(JSON.stringify(jsonObj));
        Aufgabe07.createArticles();
    }
    Aufgabe07.getArticlesFromJSON = getArticlesFromJSON;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=interface.js.map