namespace Aufgabe06 {

    for (let i: number = 0; i < articles.length; i++) {

        let articleDiv: HTMLDivElement = document.createElement("div");
        articleDiv.classList.add("article");

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
        articleButton.setAttribute("article_price", articles[i].price.toString());
        articleButton.addEventListener("click", handleAddToCartClick);
        articleDiv.appendChild(articleButton);

        document.getElementById(articles[i].category + "-cat")?.appendChild(articleDiv);

    }

    //#region Eventhandling für "in den Einkaufswagen" Button
    let cartCounter: number = 0;

    let priceSum: number = 0;

    let cartSpan: HTMLSpanElement = document.createElement("span");
    document.getElementById("cart")?.appendChild(cartSpan);


    function handleAddToCartClick(_event: Event): void {
        let pressButton: HTMLButtonElement = <HTMLButtonElement>_event.target;

        let buttonPrice: string = <string>pressButton.getAttribute("article_price");

        let priceFloat: number = parseFloat(buttonPrice);

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
    let anchorShowAll: HTMLAnchorElement = document.createElement("a");
    anchorShowAll.innerText = "Alle";
    anchorShowAll.setAttribute("id", "showall");
    anchorShowAll.classList.add("navtext");
    anchorShowAll.addEventListener("click", showSelectedCategory);
    document.getElementById("navall")?.appendChild(anchorShowAll);

    let anchorShowShoes: HTMLAnchorElement = document.createElement("a");
    anchorShowShoes.innerText = "Schuhe";
    anchorShowShoes.setAttribute("id", "showshoes");
    anchorShowShoes.classList.add("navtext");
    anchorShowShoes.addEventListener("click", showSelectedCategory);
    document.getElementById("navshoes")?.appendChild(anchorShowShoes);

    let anchorShowGear: HTMLAnchorElement = document.createElement("a");
    anchorShowGear.innerText = "Ausrüstung";
    anchorShowGear.setAttribute("id", "showgear");
    anchorShowGear.classList.add("navtext");
    anchorShowGear.addEventListener("click", showSelectedCategory);
    document.getElementById("navgear")?.appendChild(anchorShowGear);

    function showSelectedCategory(_event: Event): void {
        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "showall") {
            (<HTMLDivElement>document.getElementById("shoes-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("gear-cat")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("hgear")).style.visibility = "visible";
            (<HTMLHeadingElement>document.getElementById("hshoes")).style.visibility = "visible";
            
        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "showshoes") {
            (<HTMLDivElement>document.getElementById("shoes-cat")).style.display = "grid";
            (<HTMLDivElement>document.getElementById("gear-cat")).style.display = "none";
            (<HTMLHeadingElement>document.getElementById("hgear")).style.visibility = "hidden";
            (<HTMLHeadingElement>document.getElementById("hshoes")).style.visibility = "visible";

        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "showgear") {
            (<HTMLDivElement>document.getElementById("shoes-cat")).style.display = "none";
            (<HTMLDivElement>document.getElementById("gear-cat")).style.display = "grid";
            (<HTMLHeadingElement>document.getElementById("hshoes")).style.visibility = "hidden";
            (<HTMLHeadingElement>document.getElementById("hgear")).style.visibility = "visible";



        }
    }

    //#endregion 

}
