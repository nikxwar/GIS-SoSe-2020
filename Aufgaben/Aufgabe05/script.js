"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    //formatiert den price von Typ number in die gängige Euro Preis Darstellung um
    //#region for schleife
    for (let i = 0; i < Aufgabe05.articles.length; i++) {
        let articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        let articleName = document.createElement("h2");
        articleName.innerText = Aufgabe05.articles[i].name;
        articleName.classList.add("article-name");
        articleDiv.appendChild(articleName);
        let articleIMG = document.createElement("img");
        articleIMG.setAttribute("alt", Aufgabe05.articles[i].name);
        articleIMG.setAttribute("src", Aufgabe05.articles[i].image);
        articleIMG.classList.add("article-img");
        articleDiv.appendChild(articleIMG);
        let articleDesc = document.createElement("p");
        articleDesc.innerText = Aufgabe05.articles[i].desc;
        articleDesc.classList.add("article-desc");
        articleDiv.appendChild(articleDesc);
        let articlePrice = document.createElement("p");
        articlePrice.innerText = Aufgabe05.articles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        articlePrice.classList.add("article-price");
        articleDiv.appendChild(articlePrice);
        let articleButton = document.createElement("button");
        articleButton.innerText = "In den Einkaufswagen";
        articleButton.classList.add("article-button");
        articleDiv.appendChild(articleButton);
        document.getElementById(Aufgabe05.articles[i].category + "-cat")?.appendChild(articleDiv);
    }
    //#endregion
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map