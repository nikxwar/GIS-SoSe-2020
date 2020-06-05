namespace Aufgabe05 {


    //formatiert den price von Typ number in die gängige Euro Preis Darstellung um

   

    //#region for schleife

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
        articleDiv.appendChild(articleButton);

        document.getElementById(articles[i].category + "-cat")?.appendChild(articleDiv);

    }

    //#endregion
}
