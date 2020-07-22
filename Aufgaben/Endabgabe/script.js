"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    function init() {
        Endabgabe.getArticlesFromJSON("articles.json");
    }
    function createArticles() {
        for (let i = 0; i < Endabgabe.articles.length; i++) {
            let articleDiv = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.setAttribute("id", "article" + i);
            articleDiv.setAttribute("currentindex", i.toString());
            /* let articleName: HTMLHeadingElement = document.createElement("h2");
             articleName.innerText = articles[i].name;
             articleName.classList.add("article-name");
             articleDiv.appendChild(articleName);*/
            let articleIMG = document.createElement("img");
            articleIMG.setAttribute("alt", Endabgabe.articles[i].info);
            articleIMG.setAttribute("src", Endabgabe.articles[i].image);
            articleIMG.classList.add("article-img");
            articleDiv.appendChild(articleIMG);
            let articleDesc = document.createElement("p");
            articleDesc.innerText = Endabgabe.articles[i].info;
            articleDesc.classList.add("article-desc");
            articleDiv.appendChild(articleDesc);
            let articlePrice = document.createElement("p");
            articlePrice.innerText = Endabgabe.articles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            articlePrice.classList.add("article-price");
            articleDiv.appendChild(articlePrice);
            let articleButton = document.createElement("button");
            articleButton.innerText = "In den Einkaufswagen";
            articleButton.classList.add("article-button");
            articleButton.setAttribute("currentindex", i.toString());
            //articleButton.addEventListener("click",);
            articleDiv.appendChild(articleButton);
            document.getElementById(Endabgabe.articles[i].category + "-cat")?.appendChild(articleDiv);
        }
    }
    Endabgabe.createArticles = createArticles;
    //#region Eventhandling Artikel über Navbar aus/einblenden
    let anchorShowAll = document.createElement("a");
    anchorShowAll.innerText = "Alle";
    anchorShowAll.setAttribute("id", "showall");
    anchorShowAll.classList.add("navtext");
    document.getElementById("navall")?.appendChild(anchorShowAll);
    anchorShowAll.addEventListener("click", showSelectedCategory);
    let anchorShowIce = document.createElement("a");
    anchorShowIce.innerText = "Eis";
    anchorShowIce.setAttribute("id", "showice");
    anchorShowIce.classList.add("navtext");
    document.getElementById("navice")?.appendChild(anchorShowIce);
    anchorShowIce.addEventListener("click", showSelectedCategory);
    let anchorShowToppings = document.createElement("a");
    anchorShowToppings.innerText = "Toppings";
    anchorShowToppings.setAttribute("id", "showtoppings");
    anchorShowToppings.classList.add("navtext");
    document.getElementById("navtoppings")?.appendChild(anchorShowToppings);
    anchorShowToppings.addEventListener("click", showSelectedCategory);
    let anchorShowContainers = document.createElement("a");
    anchorShowContainers.innerText = "Waffeln/Becher";
    anchorShowContainers.setAttribute("id", "showcontainers");
    anchorShowContainers.classList.add("navtext");
    document.getElementById("navcontainers")?.appendChild(anchorShowContainers);
    anchorShowContainers.addEventListener("click", showSelectedCategory);
    function showSelectedCategory(_event) {
        if (_event.target.getAttribute("id") == "showall") {
            document.getElementById("ice-cat").style.display = "grid";
            document.getElementById("toppings-cat").style.display = "grid";
            document.getElementById("containers-cat").style.display = "grid";
            document.getElementById("h2ice").style.display = "block";
            document.getElementById("h2toppings").style.display = "block";
            document.getElementById("h2containers").style.display = "block";
        }
        else if (_event.target.getAttribute("id") == "showice") {
            document.getElementById("ice-cat").style.display = "grid";
            document.getElementById("toppings-cat").style.display = "none";
            document.getElementById("containers-cat").style.display = "none";
            document.getElementById("h2ice").style.display = "block";
            document.getElementById("h2toppings").style.display = "none";
            document.getElementById("h2containers").style.display = "none";
        }
        else if (_event.target.getAttribute("id") == "showtoppings") {
            document.getElementById("ice-cat").style.display = "none";
            document.getElementById("toppings-cat").style.display = "grid";
            document.getElementById("containers-cat").style.display = "none";
            document.getElementById("h2ice").style.display = "none";
            document.getElementById("h2toppings").style.display = "block";
            document.getElementById("h2containers").style.display = "none";
        }
        else if (_event.target.getAttribute("id") == "showcontainers") {
            document.getElementById("ice-cat").style.display = "none";
            document.getElementById("toppings-cat").style.display = "none";
            document.getElementById("containers-cat").style.display = "grid";
            document.getElementById("h2ice").style.display = "none";
            document.getElementById("h2toppings").style.display = "none";
            document.getElementById("h2containers").style.display = "block";
        }
    }
    //#endregion
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map