namespace Aufgabe06 {

    interface ArtikelBouldern {
        image: string;
        name: string;
        desc: string;
        price: number;
        category: string;
    }

    let articles: ArtikelBouldern[] = [
        {
            image: "../Aufgabe04/Artikelbilder/kletterschuhe-beginner.jpg",
            name: "La Sportiva Tarantula",
            desc: "Ideal als erster Kletterschuh, endlich keine Leihschuhe mehr!",
            price: 79.99,
            category: "shoes"
        },
        {
            image: "../Aufgabe04/Artikelbilder/kletterschuhe-intermediate.jpg",
            name: "Scarpa Arpia",
            desc: "Bequemer Einstieg in die Welt der High Performance Schuhe.",
            price: 119.99,
            category: "shoes"
        },
        {
            image: "../Aufgabe04/Artikelbilder/instinct-kletterschuhe.jpg",
            name: "Scarpa Instinct VS-R",
            desc: "Weichere Version des bewährten Instinct VS in schickem Blau.",
            price: 144.99,
            category: "shoes"
        },
        {
            image: "../Aufgabe04/Artikelbilder/kletterschuhe-pro.jpg",
            name: "La Sportiva Skwama",
            desc: "La Sportivas erfolgreichster High Performance Schuh.",
            price: 149.99,
            category: "shoes"
        },
        {
            image: "../Aufgabe04/Artikelbilder/kletterschuhe-pro2.jpg",
            name: "Scarpa Drago",
            desc: "Idealer Schuh für schwere, überhängende Boulder.",
            price: 149.99,
            category: "shoes"
        },
        {
            image: "../Aufgabe04/Artikelbilder/furia-kletterschuhe.jpg",
            name: "Scarpa Furia Air",
            desc: "Starke Vorspannung, hohe Asymmetrie und geringes Gewicht",
            price: 159.99,
            category: "shoes"
        },
        {
            image: "../Aufgabe04/Artikelbilder/boulderbucket-moon.jpg",
            name: "Chalkbag",
            desc: "Geräumiger Chalkbucket von Moon in schlichtem Schwarz.",
            price: 29.99,
            category: "gear"
        },
        {
            image: "../Aufgabe04/Artikelbilder/block-chalk.jpg",
            name: "Chalk Block",
            desc: "Magnesiumcarbonat in Blockform zum selbst zerkleinern.",
            price: 2.49,
            category: "gear"
        },
        {
            image: "../Aufgabe04/Artikelbilder/boulderbuerste.jpg",
            name: "Boulderbürste",
            desc: "Zur mühelosen und gründlichen Reinigung mittlerer und großer Griffe.",
            price: 5.99,
            category: "gear"
        },
        {
            image: "../Aufgabe04/Artikelbilder/climb-on.jpg",
            name: "Climb On Hautpflege",
            desc: "Hilft bei durchs Klettern strapazierter Haut schnell und effektiv.",
            price: 8.49,
            category: "gear"
        },
        {
            image: "../Aufgabe04/Artikelbilder/tape.jpg",
            name: "Klettertape",
            desc: "Sehr hilfreich bei Wunden oder zum Stabilisieren der Gelenke.",
            price: 4.99,
            category: "gear"
        },
        {
            image: "../Aufgabe04/Artikelbilder/crashpad.jpg",
            name: "Crashpad",
            desc: "Mittelgroßes Crashpad für regelmäßige Outdoorseesions.",
            price: 219.99,
            category: "gear"
        }
    ];

    //#endregion 

    //formatiert den price von Typ number in die gängige Euro Preis Darstellung um

    function formatNumberToEuro(_price: number): string {
        return _price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    }

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
        articleDesc.appendChild(articleDesc);

        let articlePrice: HTMLParagraphElement = document.createElement("p");
        articlePrice.innerText = formatNumberToEuro(articles[i].price);
        articlePrice.classList.add("article-price");
        articleDiv.appendChild(articlePrice);

        let articleButton: HTMLButtonElement = document.createElement("button");
        articleButton.innerText = "In den Einkaufswagen";
        articleButton.classList.add("article-button");
        articleDiv.appendChild(articleButton);

        document.getElementById(articles[i].category + "-cat")?.appendChild(articleDiv);

        /* articleButton.addEventListener("click", () => {
             alert(articles[i].name + " added to cart!");
             console.log(articles[i]);
         });*/

    }

    //#endregion
}
