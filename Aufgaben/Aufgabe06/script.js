"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    for (let i = 0; i < Aufgabe06.articles.length; i++) {
        let articleDiv = document.createElement("div");
        articleDiv.classList.add("article");
        let articleName = document.createElement("h2");
        articleName.innerText = Aufgabe06.articles[i].name;
        articleName.classList.add("article-name");
        articleDiv.appendChild(articleName);
        let articleIMG = document.createElement("img");
        articleIMG.setAttribute("alt", Aufgabe06.articles[i].name);
        articleIMG.setAttribute("src", Aufgabe06.articles[i].image);
        articleIMG.classList.add("article-img");
        articleDiv.appendChild(articleIMG);
        let articleDesc = document.createElement("p");
        articleDesc.innerText = Aufgabe06.articles[i].desc;
        articleDesc.classList.add("article-desc");
        articleDiv.appendChild(articleDesc);
        let articlePrice = document.createElement("p");
        articlePrice.innerText = Aufgabe06.articles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        articlePrice.classList.add("article-price");
        articleDiv.appendChild(articlePrice);
        let articleButton = document.createElement("button");
        articleButton.innerText = "In den Einkaufswagen";
        articleButton.classList.add("article-button");
        articleButton.setAttribute("article_price", Aufgabe06.articles[i].price.toString());
        articleButton.addEventListener("click", handleAddToCartClick);
        articleDiv.appendChild(articleButton);
        document.getElementById(Aufgabe06.articles[i].category + "-cat")?.appendChild(articleDiv);
    }
    //#region Eventhandling für "in den Einkaufswagen" Button
    let cartCounter = 0;
    let priceSum = 0;
    let cartSpan = document.createElement("span");
    document.getElementById("cart")?.appendChild(cartSpan);
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
    }
    //#endregion
    //#region Eventhandling Artikel über Navbar aus/einblenden
    Aufgabe06.anchorShowAll.addEventListener("click", showSelectedCategory);
    Aufgabe06.anchorShowShoes.addEventListener("click", showSelectedCategory);
    Aufgabe06.anchorShowGear.addEventListener("click", showSelectedCategory);
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
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map