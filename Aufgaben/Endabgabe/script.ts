namespace Endabgabe {

    window.addEventListener("load", init);

    function init(): void {
        getArticlesFromJSON("articles.json");
    }

    export function createArticles(): void {
        for (let i: number = 0; i < articles.length; i++) {

            let articleDiv: HTMLDivElement = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.setAttribute("id", "article" + i);
            articleDiv.setAttribute("currentindex", i.toString());

            /* let articleName: HTMLHeadingElement = document.createElement("h2");
             articleName.innerText = articles[i].name;
             articleName.classList.add("article-name");
             articleDiv.appendChild(articleName);*/

            let articleIMG: HTMLImageElement = document.createElement("img");
            articleIMG.setAttribute("alt", articles[i].info);
            articleIMG.setAttribute("src", articles[i].image);
            articleIMG.classList.add("article-img");
            articleDiv.appendChild(articleIMG);

            let articleDesc: HTMLParagraphElement = document.createElement("p");
            articleDesc.innerText = articles[i].info;
            articleDesc.classList.add("article-desc");
            articleDiv.appendChild(articleDesc);

            let articlePrice: HTMLParagraphElement = document.createElement("p");
            articlePrice.innerText = articles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            articlePrice.classList.add("article-price");
            articleDiv.appendChild(articlePrice);

            let articleButton: HTMLButtonElement = document.createElement("button");
            articleButton.innerText = "In den Einkaufswagen";
            articleButton.classList.add("article-button");
            articleButton.setAttribute("currentindex", i.toString());
            //articleButton.addEventListener("click",);
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

        }
        else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showice") {
            (<HTMLDivElement>document.getElementById("ice-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("toppings-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("containers-cat")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2ice")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("h2toppings")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2containers")).style.display = "none";

        }
        else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showtoppings") {
            (<HTMLDivElement>document.getElementById("ice-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("toppings-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("containers-cat")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2ice")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2toppings")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("h2containers")).style.display = "none";

        } else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showcontainers") {
            (<HTMLDivElement>document.getElementById("ice-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("toppings-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("containers-cat")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("h2ice")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2toppings")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("h2containers")).style.display = "block";

        }
    }
    //#endregion


}