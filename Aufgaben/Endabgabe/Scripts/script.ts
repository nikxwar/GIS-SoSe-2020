namespace Endabgabe {

    window.addEventListener("load", init);

    function init(): void {
        getArticlesFromJSON("articles.json");
        //showAddedArticles()
    }

    export function createArticles(): void {
        for (let i: number = 0; i < articles.length; i++) {

            let articleDiv: HTMLDivElement = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.setAttribute("id", "article" + i);
            articleDiv.setAttribute("currentindex", i.toString());

            let articleIMG: HTMLImageElement = document.createElement("img");
            articleIMG.setAttribute("alt", articles[i].info);
            articleIMG.setAttribute("src", articles[i].image);
            articleIMG.classList.add("article-img");
            articleDiv.appendChild(articleIMG);

            let articleInfo: HTMLParagraphElement = document.createElement("p");
            articleInfo.innerText = articles[i].info;
            articleInfo.classList.add("article-info");
            articleDiv.appendChild(articleInfo);

            let articlePrice: HTMLParagraphElement = document.createElement("p");
            articlePrice.innerText = articles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            articlePrice.classList.add("article-price");
            articleDiv.appendChild(articlePrice);

            let articleButton: HTMLButtonElement = document.createElement("button");
            articleButton.innerText = "Hinzufügen";
            articleButton.classList.add("article-button");
            articleButton.setAttribute("currentindex", i.toString());
            articleButton.addEventListener("click", handleAddToCartClick);
            articleDiv.appendChild(articleButton);

            document.getElementById(articles[i].category + "-cat")?.appendChild(articleDiv);

        }
    }

    //#region Eventhandling Artikel über Navbar aus/einblenden

    let anchorShowAll: HTMLAnchorElement = document.createElement("a");
    anchorShowAll.innerText = "Alle";
    anchorShowAll.setAttribute("id", "showall");
    anchorShowAll.classList.add("navtext");
    document.getElementById("navall")?.appendChild(anchorShowAll);
    anchorShowAll.addEventListener("click", showSelectedCategory);

    let anchorShowIce: HTMLAnchorElement = document.createElement("a");
    anchorShowIce.innerText = "Eis";
    anchorShowIce.setAttribute("id", "showice");
    anchorShowIce.classList.add("navtext");
    document.getElementById("navice")?.appendChild(anchorShowIce);
    anchorShowIce.addEventListener("click", showSelectedCategory);

    let anchorShowToppings: HTMLAnchorElement = document.createElement("a");
    anchorShowToppings.innerText = "Toppings";
    anchorShowToppings.setAttribute("id", "showtoppings");
    anchorShowToppings.classList.add("navtext");
    document.getElementById("navtoppings")?.appendChild(anchorShowToppings);
    anchorShowToppings.addEventListener("click", showSelectedCategory);

    let anchorShowContainers: HTMLAnchorElement = document.createElement("a");
    anchorShowContainers.innerText = "Waffeln/Becher";
    anchorShowContainers.setAttribute("id", "showcontainers");
    anchorShowContainers.classList.add("navtext");
    document.getElementById("navcontainers")?.appendChild(anchorShowContainers);
    anchorShowContainers.addEventListener("click", showSelectedCategory);



    function showSelectedCategory(_event: Event): void {
        if ((<HTMLDivElement>_event.target).getAttribute("id") == "showall") {
            (<HTMLDivElement>document.getElementById("ice-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("toppings-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("containers-cat")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("h2ice")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("h2toppings")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("h2containers")).style.display = "block";
            (<HTMLParagraphElement>document.getElementById("icejumpto")).style.display = "block";
            (<HTMLParagraphElement>document.getElementById("toppingsjumpto")).style.display = "block";
            (<HTMLParagraphElement>document.getElementById("containersjumpto")).style.display = "block";


        }
        else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showice") {
            (<HTMLDivElement>document.getElementById("ice-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("toppings-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("containers-cat")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2ice")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("h2toppings")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2containers")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("icejumpto")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("toppingsjumpto")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("containersjumpto")).style.display = "none";


        }
        else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showtoppings") {
            (<HTMLDivElement>document.getElementById("ice-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("toppings-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("containers-cat")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2ice")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2toppings")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("h2containers")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("icejumpto")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("toppingsjumpto")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("containersjumpto")).style.display = "none";

        } else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showcontainers") {
            (<HTMLDivElement>document.getElementById("ice-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("toppings-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("containers-cat")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("h2ice")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2toppings")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2containers")).style.display = "block";
            (<HTMLParagraphElement>document.getElementById("icejumpto")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("toppingsjumpto")).style.display = "none";
            (<HTMLParagraphElement>document.getElementById("containersjumpto")).style.display = "none";
        }
    }
    //#endregion

    let cartContent: Articles[] = [];

    let selectedArticles: Articles[] = [];
    export function handleAddToCartClick(_event: Event): void {

        let indexCart: number = parseInt((<HTMLDivElement>(<HTMLElement>_event.target).parentElement).getAttribute("currentindex")!);

        cartContent.push(articles[indexCart]);
        localStorage.setItem("cart", JSON.stringify(cartContent));

        showAddedArticles();
        /*let addedArticleInfo: HTMLParagraphElement = document.createElement("p");
        addedArticleInfo.innerText = cartContent[indexCart].info;
        addedArticleInfo.classList.add("article-info");
        (<HTMLDivElement>document.querySelector("#selection")).appendChild(addedArticleInfo);*/

    }

    function showAddedArticles(): void {
        if (selectedArticles[0] == undefined) {

            let addedArticleTable: HTMLTableElement = document.createElement("table");
            addedArticleTable.setAttribute("id", "selectiontable");
            (<HTMLElement>document.querySelector("#selection")).appendChild(addedArticleTable);

            let addedArticleTableHead: HTMLElement = document.createElement("thead");
            addedArticleTableHead.setAttribute("id", "selectionthead");
            (<HTMLElement>document.querySelector("#selectiontable")).appendChild(addedArticleTableHead);

            let addedArticleTableHeadRow: HTMLTableRowElement = document.createElement("tr");
            addedArticleTableHeadRow.setAttribute("id", "selectiontrow");
            (<HTMLElement>document.querySelector("#selectionthead")).appendChild(addedArticleTableHeadRow);

            let addedArticleTableHeadArticle: HTMLElement = document.createElement("th");
            addedArticleTableHeadArticle.innerText = "Artikel";
            (<HTMLElement>document.querySelector("#selectiontrow")).appendChild(addedArticleTableHeadArticle);

            let addedArticleTableHeadPrice: HTMLElement = document.createElement("th");
            addedArticleTableHeadPrice.innerText = "Preis";
            (<HTMLElement>document.querySelector("#selectiontrow")).appendChild(addedArticleTableHeadPrice);

            let addedArticleTableBody: HTMLElement = document.createElement("tbody");
            addedArticleTableBody.setAttribute("id", "selectiontbody");
            (<HTMLElement>document.querySelector("#selectiontable")).appendChild(addedArticleTableBody);



        }
        //let addedArticleInfo: HTMLDivElement = document.createElement("div");
        selectedArticles = JSON.parse(localStorage.getItem("cart")!);
        console.log(selectedArticles);
        while ((<HTMLElement>document.getElementById("selectiontbody")).firstChild) {
            (<HTMLElement>document.getElementById("selectiontbody")).firstChild?.remove();
        }
        for (let i: number = 0; i < selectedArticles.length; i++) {


            let checkoutTableRow: HTMLTableRowElement = document.createElement("tr");
            (<HTMLElement>document.getElementById("selectiontbody")).appendChild(checkoutTableRow);
            checkoutTableRow.classList.add("article");
            checkoutTableRow.setAttribute("id", "tr" + i);

            let checkoutInfo: HTMLTableCellElement = document.createElement("td");
            checkoutInfo.innerText = selectedArticles[i].info;
            checkoutTableRow.appendChild(checkoutInfo);

            let checkoutPrice: HTMLTableCellElement = document.createElement("td");
            checkoutPrice.innerText = selectedArticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            checkoutTableRow.appendChild(checkoutPrice);
        }

        /*  for (let i: number = 0; i < selectedArticles.length; i++) {
              addedArticleInfo.innerText = selectedArticles[i].info;
              addedArticleInfo.classList.add("article-info");
              (<HTMLDivElement>document.querySelector("#selection")).appendChild(addedArticleInfo);
  
  
          }*/

    }
}