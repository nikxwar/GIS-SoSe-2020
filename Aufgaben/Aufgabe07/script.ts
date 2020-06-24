namespace Aufgabe07 {

    //#region Artikel erstellen
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

            let articleName: HTMLHeadingElement = document.createElement("h2");
            articleName.innerText = articles[i].name;
            articleName.classList.add("article-name");
            articleDiv.appendChild(articleName);

            let articleIMG: HTMLImageElement = document.createElement("img");
            articleIMG.setAttribute("alt", articles[i].name);
            articleIMG.setAttribute("src", articles[i].image);
            articleIMG.classList.add("article-img");
            articleDiv.appendChild(articleIMG);

            let articleDesc: HTMLParagraphElement = document.createElement("p");
            articleDesc.innerText = articles[i].desc;
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
            articleButton.addEventListener("click", handleAddToCartClick);
            articleDiv.appendChild(articleButton);

            document.getElementById(articles[i].category + "-cat")?.appendChild(articleDiv);

        }
    }

   
    //#endregion

    //#region Eventhandling für "in den Einkaufswagen" Button
    let cartCounter: number = 0;

    let priceSum: number = 0;

    let cartSpan: HTMLSpanElement = document.createElement("span");
    document.getElementById("cart")?.appendChild(cartSpan);


    let cartContent: ArtikelBouldern[] = [];


    export function handleAddToCartClick(_event: Event): void {
        let pressButton: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let index: number = parseInt(<string>pressButton.getAttribute("currentindex"));

        let priceFloat: number = articles[index].price;

        priceSum += priceFloat;
        console.log("Gesamtwert des Warenkorbs: " + priceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" }));

        if (cartCounter == 0) {
            cartSpan.setAttribute("id", "counter");
        }
        cartCounter++;
        cartSpan.innerText = cartCounter.toString();

        let indexCart: number = parseInt((<HTMLDivElement>(<HTMLElement>_event.target).parentElement).getAttribute("currentindex")!);
        cartContent.push(articles[indexCart]);
        localStorage.setItem("cart", JSON.stringify(cartContent));
    }
    //#endregion

    //#region Eventhandling Artikel über Navbar aus/einblenden

    let anchorShowAll: HTMLAnchorElement = document.createElement("a");
    anchorShowAll.innerText = "Alle";
    anchorShowAll.setAttribute("id", "showall");
    anchorShowAll.classList.add("navtext");
    document.getElementById("navall")?.appendChild(anchorShowAll);
    anchorShowAll.addEventListener("click", showSelectedCategory);

    let anchorShowShoes: HTMLAnchorElement = document.createElement("a");
    anchorShowShoes.innerText = "Schuhe";
    anchorShowShoes.setAttribute("id", "showshoes");
    anchorShowShoes.classList.add("navtext");
    document.getElementById("navshoes")?.appendChild(anchorShowShoes);
    anchorShowShoes.addEventListener("click", showSelectedCategory);

    let anchorShowGear: HTMLAnchorElement = document.createElement("a");
    anchorShowGear.innerText = "Ausrüstung";
    anchorShowGear.setAttribute("id", "showgear");
    anchorShowGear.classList.add("navtext");
    document.getElementById("navgear")?.appendChild(anchorShowGear);
    anchorShowGear.addEventListener("click", showSelectedCategory);



    function showSelectedCategory(_event: Event): void {
        if ((<HTMLDivElement>_event.target).getAttribute("id") == "showall") {
            (<HTMLDivElement>document.getElementById("shoes-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("gear-cat")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("hgear")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("hshoes")).style.display = "block";

        }
        else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showshoes") {
            (<HTMLDivElement>document.getElementById("shoes-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("gear-cat")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("hshoes")).style.display = "block";
            (<HTMLHeadingElement>document.getElementById("hgear")).style.display = "none";

        }
        else if ((<HTMLDivElement>_event.target).getAttribute("id") == "showgear") {
            (<HTMLDivElement>document.getElementById("shoes-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("gear-cat")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("hshoes")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("hgear")).style.display = "block";
            
        }
    }
    //#endregion 

}
