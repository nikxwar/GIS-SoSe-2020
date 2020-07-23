"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", init);
    function init() {
        Endabgabe.getArticlesFromJSON("articles.json");
        //showAddedArticles()
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
            articleButton.innerText = "Hinzufügen";
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
            document.getElementById("icejumpto").style.display = "block";
            document.getElementById("toppingsjumpto").style.display = "block";
            document.getElementById("containersjumpto").style.display = "block";
        }
        else if (_event.target.getAttribute("id") == "showice") {
            document.getElementById("ice-cat").style.display = "grid";
            document.getElementById("toppings-cat").style.display = "none";
            document.getElementById("containers-cat").style.display = "none";
            document.getElementById("h2ice").style.display = "block";
            document.getElementById("h2toppings").style.display = "none";
            document.getElementById("h2containers").style.display = "none";
            document.getElementById("icejumpto").style.display = "none";
            document.getElementById("toppingsjumpto").style.display = "none";
            document.getElementById("containersjumpto").style.display = "none";
        }
        else if (_event.target.getAttribute("id") == "showtoppings") {
            document.getElementById("ice-cat").style.display = "none";
            document.getElementById("toppings-cat").style.display = "grid";
            document.getElementById("containers-cat").style.display = "none";
            document.getElementById("h2ice").style.display = "none";
            document.getElementById("h2toppings").style.display = "block";
            document.getElementById("h2containers").style.display = "none";
            document.getElementById("icejumpto").style.display = "none";
            document.getElementById("toppingsjumpto").style.display = "none";
            document.getElementById("containersjumpto").style.display = "none";
        }
        else if (_event.target.getAttribute("id") == "showcontainers") {
            document.getElementById("ice-cat").style.display = "none";
            document.getElementById("toppings-cat").style.display = "none";
            document.getElementById("containers-cat").style.display = "grid";
            document.getElementById("h2ice").style.display = "none";
            document.getElementById("h2toppings").style.display = "none";
            document.getElementById("h2containers").style.display = "block";
            document.getElementById("icejumpto").style.display = "none";
            document.getElementById("toppingsjumpto").style.display = "none";
            document.getElementById("containersjumpto").style.display = "none";
        }
    }
    //#endregion
    let cartContent = [];
    let selectedArticles = [];
    function handleAddToCartClick(_event) {
        let indexCart = parseInt(_event.target.parentElement.getAttribute("currentindex"));
        cartContent.push(Endabgabe.articles[indexCart]);
        localStorage.setItem("cart", JSON.stringify(cartContent));
        showAddedArticles();
        /*let addedArticleInfo: HTMLParagraphElement = document.createElement("p");
        addedArticleInfo.innerText = cartContent[indexCart].info;
        addedArticleInfo.classList.add("article-info");
        (<HTMLDivElement>document.querySelector("#selection")).appendChild(addedArticleInfo);*/
    }
    Endabgabe.handleAddToCartClick = handleAddToCartClick;
    function showAddedArticles() {
        if (selectedArticles[0] == undefined) {
            let addedArticleTable = document.createElement("table");
            addedArticleTable.setAttribute("id", "selectiontable");
            document.querySelector("#selection").appendChild(addedArticleTable);
            let addedArticleTableHead = document.createElement("thead");
            addedArticleTableHead.setAttribute("id", "selectionthead");
            document.querySelector("#selectiontable").appendChild(addedArticleTableHead);
            let addedArticleTableHeadRow = document.createElement("tr");
            addedArticleTableHeadRow.setAttribute("id", "selectiontrow");
            document.querySelector("#selectionthead").appendChild(addedArticleTableHeadRow);
            let addedArticleTableHeadArticle = document.createElement("th");
            addedArticleTableHeadArticle.innerText = "Artikel";
            document.querySelector("#selectiontrow").appendChild(addedArticleTableHeadArticle);
            let addedArticleTableHeadPrice = document.createElement("th");
            addedArticleTableHeadPrice.innerText = "Preis";
            document.querySelector("#selectiontrow").appendChild(addedArticleTableHeadPrice);
            let addedArticleTableBody = document.createElement("tbody");
            addedArticleTableBody.setAttribute("id", "selectiontbody");
            document.querySelector("#selectiontable").appendChild(addedArticleTableBody);
            console.log("hi");
        }
        //let addedArticleInfo: HTMLDivElement = document.createElement("div");
        selectedArticles = JSON.parse(localStorage.getItem("cart"));
        console.log(selectedArticles);
        while (document.getElementById("selectiontbody").firstChild) {
            document.getElementById("selectiontbody").firstChild?.remove();
        }
        for (let i = 0; i < selectedArticles.length; i++) {
            let checkoutTableRow = document.createElement("tr");
            document.getElementById("selectiontbody").appendChild(checkoutTableRow);
            checkoutTableRow.classList.add("article");
            checkoutTableRow.setAttribute("id", "tr" + i);
            let checkoutInfo = document.createElement("td");
            checkoutInfo.innerText = selectedArticles[i].info;
            checkoutTableRow.appendChild(checkoutInfo);
            let checkoutPrice = document.createElement("td");
            checkoutPrice.innerText = selectedArticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            checkoutTableRow.appendChild(checkoutPrice);
        }
        /*  for (let i: number = 0; i < selectedArticles.length; i++) {
              addedArticleInfo.innerText = selectedArticles[i].info;
              addedArticleInfo.classList.add("article-info");
              (<HTMLDivElement>document.querySelector("#selection")).appendChild(addedArticleInfo);
  
  
          }*/
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=script.js.map