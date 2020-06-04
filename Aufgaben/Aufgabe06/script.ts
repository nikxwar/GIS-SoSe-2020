namespace Aufgabe06 {

    interface ArtikelBouldern {
        image: string;
        name: string;
        desc: string;
        price: number;

    }

    //#region Schuhe

    let schuh1: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/kletterschuhe-beginner.jpg",
        name: "La Sportiva Tarantula",
        desc: "Ideal als erster Kletterschuh, endlich keine Leihschuhe mehr!",
        price: 79.99

    };

    let schuh2: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/kletterschuhe-intermediate.jpg",
        name: "Scarpa Arpia",
        desc: "Bequemer Einstieg in die Welt der High Performance Schuhe.",
        price: 119.99

    };
    let schuh3: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/instinct-kletterschuhe.jpg",
        name: "Scarpa Instinct VS-R",
        desc: "Weichere Version des bewährten Instinct VS in schickem Blau.",
        price: 144.99

    };
    let schuh4: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/kletterschuhe-pro.jpg",
        name: "La Sportiva Skwama",
        desc: "La Sportivas erfolgreichster High Performance Schuh.",
        price: 149.99

    };
    let schuh5: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/kletterschuhe-pro2.jpg",
        name: "Scarpa Drago",
        desc: "Idealer Schuh für schwere, überhängende Boulder.",
        price: 149.99

    };
    let schuh6: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/furia-kletterschuhe.jpg",
        name: "Scarpa Furia Air",
        desc: "Starke Vorspannung, hohe Asymmetrie und geringes Gewicht",
        price: 159.99

    };
    //#endregion
    //#region Ausrüstung
    let gear1: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/boulderbucket-moon.jpg",
        name: "Chalkbag",
        desc: "Geräumiger Chalkbucket von Moon in schlichtem Schwarz.",
        price: 29.99

    };
    let gear2: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/block-chalk.jpg",
        name: "Chalk Block",
        desc: "Magnesiumcarbonat in Blockform zum selbst zerkleinern.",
        price: 2.49

    };
    let gear3: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/boulderbuerste.jpg",
        name: "Boulderbürste",
        desc: "Zur mühelosen und gründlichen Reinigung mittlerer und großer Griffe.",
        price: 5.99

    };
    let gear4: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/climb-on.jpg",
        name: "Climb On Hautpflege",
        desc: "Hilft bei durchs Klettern strapazierter Haut schnell und effektiv.",
        price: 8.49

    };
    let gear5: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/tape.jpg",
        name: "Klettertape",
        desc: "Sehr hilfreich bei Wunden oder zum Stabilisieren der Gelenke.",
        price: 4.99

    };
    let gear6: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/crashpad.jpg",
        name: "Crashpad",
        desc: "Mittelgroßes Crashpad für regelmäßige Outdoorseesions.",
        price: 219.99

    };

    //#endregion 

    let alleSchuhe: ArtikelBouldern[] = [schuh1, schuh2, schuh3, schuh4, schuh5, schuh6];
    let alleGear: ArtikelBouldern[] = [gear1, gear2, gear3, gear4, gear5, gear6];

    //formatiert den price von number in die gängige Euro Preis Darstellung um

    function formatNumberToEuro(_price: number): string {
        return _price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    }

    //DOM Manipulation

    for (let i: number = 0; i < alleSchuhe.length; i++) {

        let articleDiv: HTMLDivElement = document.createElement("div");
        articleDiv.setAttribute("class", "artikel");
        articleDiv.setAttribute("id", "schuhID" + i);
        document.getElementById("katschuhe")?.appendChild(articleDiv);

        let articleH2: HTMLHeadingElement = document.createElement("h2");
        articleH2.innerHTML = alleSchuhe[i].name;
        document.getElementById("schuhID" + i)?.appendChild(articleH2);

        let articleIMG: HTMLImageElement = document.createElement("img");
        articleIMG.setAttribute("alt", alleSchuhe[i].name);
        articleIMG.src = alleSchuhe[i].image;
        document.getElementById("schuhID" + i)?.appendChild(articleIMG);

        let articleDesc: HTMLParagraphElement = document.createElement("p");
        articleDesc.setAttribute("class", "beschreibung");
        articleDesc.innerHTML = alleSchuhe[i].desc;
        document.getElementById("schuhID" + i)?.appendChild(articleDesc);


        let articlePrice: HTMLParagraphElement = document.createElement("p");
        articlePrice.setAttribute("class", "preis");
        articlePrice.innerHTML = formatNumberToEuro(alleSchuhe[i].price);
        document.getElementById("schuhID" + i)?.appendChild(articlePrice);

        let articleButton: HTMLButtonElement = document.createElement("button");
        articleButton.setAttribute("id", "buttonschuh" + i);
        articleButton.innerHTML = "In den Einkaufswagen";
        document.getElementById("schuhID" + i)?.appendChild(articleButton);

    }
    for (let i: number = 0; i < alleGear.length; i++) {

        let articleDiv: HTMLDivElement = document.createElement("div");
        articleDiv.setAttribute("class", "artikel");
        articleDiv.setAttribute("id", "gearID" + i);

        document.getElementById("katgear")?.appendChild(articleDiv);

        let articleH2: HTMLHeadingElement = document.createElement("h2");
        articleH2.innerHTML = alleGear[i].name;
        document.getElementById("gearID" + i)?.appendChild(articleH2);

        let articleIMG: HTMLImageElement = document.createElement("img");
        articleIMG.setAttribute("alt", alleGear[i].name);
        articleIMG.src = alleGear[i].image;
        document.getElementById("gearID" + i)?.appendChild(articleIMG);

        let articleDesc: HTMLParagraphElement = document.createElement("p");
        articleDesc.setAttribute("class", "beschreibung");
        articleDesc.innerHTML = alleGear[i].desc;
        document.getElementById("gearID" + i)?.appendChild(articleDesc);

        let articlePrice: HTMLParagraphElement = document.createElement("p");
        articlePrice.setAttribute("class", "preis");
        articlePrice.innerHTML = formatNumberToEuro(alleGear[i].price);
        document.getElementById("gearID" + i)?.appendChild(articlePrice);

        let articleButton: HTMLButtonElement = document.createElement("button");
        articleButton.setAttribute("id", "buttongear" + i);
        articleButton.innerHTML = "In den Einkaufswagen";
        document.getElementById("gearID" + i)?.appendChild(articleButton);
        
    }


   
 




}
