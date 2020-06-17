"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //#region Artikel erstellen
    window.addEventListener("load", init);
    function init() {
        Aufgabe07.getArticlesFromJSON("articles.json");
    }
    function createArticles() {
        for (let i = 0; i < Aufgabe07.articles.length; i++) {
            let articleDiv = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.setAttribute("id", "article" + i);
            articleDiv.setAttribute("currentindex", i.toString());
            let articleName = document.createElement("h2");
            articleName.innerText = Aufgabe07.articles[i].name;
            articleName.classList.add("article-name");
            articleDiv.appendChild(articleName);
            let articleIMG = document.createElement("img");
            articleIMG.setAttribute("alt", Aufgabe07.articles[i].name);
            articleIMG.setAttribute("src", Aufgabe07.articles[i].image);
            articleIMG.classList.add("article-img");
            articleDiv.appendChild(articleIMG);
            let articleDesc = document.createElement("p");
            articleDesc.innerText = Aufgabe07.articles[i].desc;
            articleDesc.classList.add("article-desc");
            articleDiv.appendChild(articleDesc);
            let articlePrice = document.createElement("p");
            articlePrice.innerText = Aufgabe07.articles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            articlePrice.classList.add("article-price");
            articleDiv.appendChild(articlePrice);
            let articleButton = document.createElement("button");
            articleButton.innerText = "In den Einkaufswagen";
            articleButton.classList.add("article-button");
            articleButton.setAttribute("article_price", Aufgabe07.articles[i].price.toString());
            articleButton.setAttribute("currentindex", i.toString());
            articleButton.addEventListener("click", handleAddToCartClick);
            articleDiv.appendChild(articleButton);
            document.getElementById(Aufgabe07.articles[i].category + "-cat")?.appendChild(articleDiv);
        }
    }
    Aufgabe07.createArticles = createArticles;
    //#endregion
    //#region Eventhandling für "in den Einkaufswagen" Button
    let cartCounter = 0;
    let priceSum = 0;
    let cartSpan = document.createElement("span");
    document.getElementById("cart")?.appendChild(cartSpan);
    let cartContent = [];
    function handleAddToCartClick(_event) {
        let pressButton = _event.target;
        let buttonPrice = pressButton.getAttribute("article_price");
        let priceFloat = parseFloat(buttonPrice);
        priceSum += priceFloat;
        console.log("Gesamtwert des Warenkorbs: " + priceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));
        if (cartCounter == 0) {
            cartSpan.setAttribute("id", "counter");
        }
        cartCounter++;
        cartSpan.innerText = cartCounter.toString();
        let indexCart = parseInt(_event.target.parentElement.getAttribute("currentindex"));
        cartContent.push(Aufgabe07.articles[indexCart]);
        localStorage.setItem("cart", JSON.stringify(cartContent));
    }
    Aufgabe07.handleAddToCartClick = handleAddToCartClick;
    //#endregion
    //#region Eventhandling Artikel über Navbar aus/einblenden
    let anchorShowAll = document.createElement("a");
    anchorShowAll.innerText = "Alle";
    anchorShowAll.setAttribute("id", "showall");
    anchorShowAll.classList.add("navtext");
    document.getElementById("navall")?.appendChild(anchorShowAll);
    anchorShowAll.addEventListener("click", showSelectedCategory);
    let anchorShowShoes = document.createElement("a");
    anchorShowShoes.innerText = "Schuhe";
    anchorShowShoes.setAttribute("id", "showshoes");
    anchorShowShoes.classList.add("navtext");
    document.getElementById("navshoes")?.appendChild(anchorShowShoes);
    anchorShowShoes.addEventListener("click", showSelectedCategory);
    let anchorShowGear = document.createElement("a");
    anchorShowGear.innerText = "Ausrüstung";
    anchorShowGear.setAttribute("id", "showgear");
    anchorShowGear.classList.add("navtext");
    document.getElementById("navgear")?.appendChild(anchorShowGear);
    anchorShowGear.addEventListener("click", showSelectedCategory);
    function showSelectedCategory(_event) {
        if (_event.target.getAttribute("id") == "showall") {
            document.getElementById("shoes-cat").style.display = "grid";
            document.getElementById("gear-cat").style.display = "grid";
            document.getElementById("hgear").style.display = "block";
            document.getElementById("hshoes").style.display = "block";
        }
        else if (_event.target.getAttribute("id") == "showshoes") {
            document.getElementById("shoes-cat").style.display = "grid";
            document.getElementById("gear-cat").style.display = "none";
            document.getElementById("hshoes").style.display = "block";
            document.getElementById("hgear").style.display = "none";
        }
        else if (_event.target.getAttribute("id") == "showgear") {
            document.getElementById("shoes-cat").style.display = "none";
            document.getElementById("gear-cat").style.display = "grid";
            document.getElementById("hshoes").style.display = "none";
            document.getElementById("hgear").style.display = "block";
        }
    }
    //#endregion 
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map