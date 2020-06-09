"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.articles = [
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
    Aufgabe07.anchorShowAll = document.createElement("a");
    Aufgabe07.anchorShowAll.innerText = "Alle";
    Aufgabe07.anchorShowAll.setAttribute("id", "showall");
    Aufgabe07.anchorShowAll.classList.add("navtext");
    document.getElementById("navall")?.appendChild(Aufgabe07.anchorShowAll);
    Aufgabe07.anchorShowShoes = document.createElement("a");
    Aufgabe07.anchorShowShoes.innerText = "Schuhe";
    Aufgabe07.anchorShowShoes.setAttribute("id", "showshoes");
    Aufgabe07.anchorShowShoes.classList.add("navtext");
    document.getElementById("navshoes")?.appendChild(Aufgabe07.anchorShowShoes);
    Aufgabe07.anchorShowGear = document.createElement("a");
    Aufgabe07.anchorShowGear.innerText = "Ausrüstung";
    Aufgabe07.anchorShowGear.setAttribute("id", "showgear");
    Aufgabe07.anchorShowGear.classList.add("navtext");
    document.getElementById("navgear")?.appendChild(Aufgabe07.anchorShowGear);
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=data.js.map