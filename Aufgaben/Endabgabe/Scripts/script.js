"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    function init() {
        Endabgabe.getArticlesFromJSON("articles.json");
        showAddedArticles();
    }
    function createArticles() {
        for (let i = 0; i < Endabgabe.articles.length; i++) {
            let articleDiv = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.setAttribute("id", "article" + i);
            articleDiv.setAttribute("currentindex", i.toString());
            let articleIMG = document.createElement("img");
            articleIMG.setAttribute("alt", Endabgabe.articles[i].info);
            articleIMG.setAttribute("src", Endabgabe.articles[i].image);
            articleIMG.classList.add("article-img");
            articleDiv.appendChild(articleIMG);
            let articleInfo = document.createElement("p");
            articleInfo.innerText = Endabgabe.articles[i].info;
            articleInfo.classList.add("article-info");
            articleDiv.appendChild(articleInfo);
            let articlePrice = document.createElement("p");
            articlePrice.innerText = Endabgabe.articles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            articlePrice.classList.add("article-price");
            articleDiv.appendChild(articlePrice);
            let articleButton = document.createElement("button");
            articleButton.innerText = "In den Einkaufswagen";
            articleButton.classList.add("article-button");
            articleButton.setAttribute("currentindex", i.toString());
            articleButton.addEventListener("click", handleAddToCartClick);
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
    let cartContent = [];
    let selectedArticles = [];
    function handleAddToCartClick(_event) {
        let indexCart = parseInt(_event.target.parentElement.getAttribute("currentindex"));
        cartContent.push(Endabgabe.articles[indexCart]);
        localStorage.setItem("cart", JSON.stringify(cartContent));
        /*let addedArticleInfo: HTMLParagraphElement = document.createElement("p");
        addedArticleInfo.innerText = cartContent[indexCart].info;
        addedArticleInfo.classList.add("article-info");
        (<HTMLDivElement>document.querySelector("#selection")).appendChild(addedArticleInfo);*/
    }
    Endabgabe.handleAddToCartClick = handleAddToCartClick;
    function showAddedArticles() {
        selectedArticles = JSON.parse(localStorage.getItem("cart"));
        console.log(selectedArticles);
        for (let i = 0; i < selectedArticles.length; i++) {
            let addedArticleInfo = document.createElement("p");
            addedArticleInfo.innerText = selectedArticles[i].info;
            addedArticleInfo.classList.add("article-info");
            document.querySelector("#selection").appendChild(addedArticleInfo);
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map