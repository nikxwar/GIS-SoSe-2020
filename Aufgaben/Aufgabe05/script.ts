namespace Aufgabe05 {

    interface ArtikelBouldern {
        image: string;
        name: string;
        desc: string;
        price: string;
    }

    //#region Schuhe

    let schuh1: ArtikelBouldern = {
        image: "Artikelbilder/kletterschuhe-beginner.jpg",
        name: "La Sportiva Tarantula",
        desc: "Ideal als erster Kletterschuh, endlich keine Leihschuhe mehr!",
        price: "79,99€"
    };

    let schuh2: ArtikelBouldern = {
        image: "Artikelbilder/kletterschuhe-intermediate.jpg",
        name: "Scarpa Arpia",
        desc: "Bequemer Einstieg in die Welt der High Performance Schuhe.",
        price: "119,99€"

    };
    let schuh3: ArtikelBouldern = {
        image: "Artikelbilder/instinct-kletterschuhe",
        name: "Scarpa Instinct VS-R",
        desc: "Weichere Version des bewährten Instinct VS in schickem Blau.",
        price: "144,99€<"

    };
    let schuh4: ArtikelBouldern = {
        image: "Artikelbilder/kletterschuhe-pro.jpg",
        name: "La Sportiva Skwama",
        desc: "La Sportivas erfolgreichster High Performance Schuh.",
        price: "149,99€"

    };
    let schuh5: ArtikelBouldern = {
        image: "Artikelbilder/kletterschuhe-pro2.jpg",
        name: "Scarpa Drago",
        desc: "Idealer Schuh für schwere, überhängende Boulder.",
        price: "149,99€"

    };
    let schuh6: ArtikelBouldern = {
        image: "/Artikelbilder/furia-kletterschuhe.jpg",
        name: "Scarpa Furia Air",
        desc: "Starke Vorspannung, hohe Asymmetrie und geringes Gewicht",
        price: "159,99€"

    };
    //#endregion
    //#region Ausrüstung
    let gear1: ArtikelBouldern = {
        image: "Artikelbilder/boulderbucket-moon.jpg",
        name: "Chalkbag",
        desc: "Geräumiger Chalkbucket von Moon in schlichtem Schwarz.",
        price: "29,99€"

    };
    let gear2: ArtikelBouldern = {
        image: "Artikelbilder/block-chalk.jpg",
        name: "Chalk Block",
        desc: "Magnesiumcarbonat in Blockform zum selbst zerkleinern.",
        price: "2,50€"

    };
    let gear3: ArtikelBouldern = {
        image: "Artikelbilder/boulderbuerste.jpg",
        name: "Boulderbürste",
        desc: "Zur mühelosen und gründlichen Reinigung mittlerer und großer Griffe.",
        price: "5,99€"

    };
    let gear4: ArtikelBouldern = {
        image: "Artikelbilder/climb-on.jpg",
        name: "Climb On Hautpflege",
        desc: "Hilft bei durchs Klettern strapazierter Haut schnell und effektiv.",
        price: "8,50€"

    };
    let gear5: ArtikelBouldern = {
        image: "Artikelbilder/tape.jpg",
        name: "Klettertape",
        desc: "Sehr hilfreich bei Wunden oder zum Stabilisieren der Gelenke.",
        price: "4,99€"

    };
    let gear6: ArtikelBouldern = {
        image: "../Aufgabe04/Artikelbilder/crashpad.jpg",
        name: "Crashpad",
        desc: "Mittelgroßes Crashpad für regelmäßige Outdoorseesions.",
        price: "219,99€"

    };

    //#endregion 

    let alleSchuhe: ArtikelBouldern[] = [schuh1, schuh2, schuh3, schuh4, schuh5, schuh6];
    let alleGear: ArtikelBouldern[] = [gear1, gear2, gear3, gear4, gear5, gear6];

    //DOM Manipulation



    for (let i: number = 0; i < alleSchuhe.length; i++) {

        let setDiv: HTMLDivElement = document.createElement("div");
        setDiv.setAttribute("class", "artikel");
        //setDiv.setAttribute("id", "artikelID" + i);
        setDiv.id = "artikelID" + i;

        document.getElementById("katschuhe")?.appendChild(setDiv);


        let setH2: HTMLHeadingElement = document.createElement("h2");
        setH2.innerHTML = alleSchuhe[i].name;
        document.getElementById("artikelID" + i)?.appendChild(setH2);

        let setIMG: HTMLImageElement = document.createElement("img");
        setIMG.setAttribute("alt", alleSchuhe[i].name);
        document.getElementById("artikelID" + i)?.appendChild(setIMG);

        let setDesc: HTMLParagraphElement = document.createElement("p");
        setDesc.setAttribute("class", "beschreibung");
        setDesc.innerHTML = alleSchuhe[i].desc;
        document.getElementById("artikelID" + i)?.appendChild(setIMG);


        let setPrice: HTMLParagraphElement = document.createElement("p");
        setDesc.setAttribute("class", "preis");
        setPrice.innerHTML = alleSchuhe[i].price;
        document.getElementById("artikelID" + i)?.appendChild(setPrice);

        


    }
    for (let i: number = 0; i < alleSchuhe.length; i++) {

        let setDiv: HTMLDivElement = document.createElement("div");
        setDiv.setAttribute("class", "artikel");
        //setDiv.setAttribute("id", "artikelID" + i);
        setDiv.id = "artikelID" + i;

        document.getElementById("katgear")?.appendChild(setDiv);


        let setH2: HTMLHeadingElement = document.createElement("h2");
        setH2.innerHTML = alleGear[i].name;
        document.getElementById("artikelID" + i)?.appendChild(setH2);

        let setIMG: HTMLImageElement = document.createElement("img");
        setIMG.setAttribute("alt", alleGear[i].name);
        document.getElementById("artikelID" + i)?.appendChild(setIMG);

        let setDesc: HTMLParagraphElement = document.createElement("p");
        setDesc.setAttribute("class", "beschreibung");
        setDesc.innerHTML = alleGear[i].desc;
        document.getElementById("artikelID" + i)?.appendChild(setIMG);


        let setPrice: HTMLParagraphElement = document.createElement("p");
        setDesc.setAttribute("class", "preis");
        setPrice.innerHTML = alleGear[i].price;

        


    }


    
}
