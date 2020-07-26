"use strict";
var Endabgabe;
(function (Endabgabe) {
    let checkoutarticles = [];
    let checkoutPriceSum = 0;
    let totalPrice = document.createElement("h2");
    totalPrice.innerText = "Warenkorb ist leer";
    document.getElementById("cartsum")?.appendChild(totalPrice);
    if (localStorage.getItem("cart") !== null) {
        checkoutarticles = JSON.parse(localStorage.getItem("cart"));
        createCheckoutArticles();
    }
    function createCheckoutArticles() {
        let cartContentTable = document.createElement("table");
        cartContentTable.setAttribute("id", "carttable");
        document.querySelector("#carttablediv").appendChild(cartContentTable);
        let cartContentTableHead = document.createElement("thead");
        cartContentTableHead.setAttribute("id", "cartthead");
        document.querySelector("#carttable").appendChild(cartContentTableHead);
        let cartContentTableHeadRow = document.createElement("tr");
        cartContentTableHeadRow.setAttribute("id", "carttrow");
        document.querySelector("#cartthead").appendChild(cartContentTableHeadRow);
        let cartContentTableHeadArticle = document.createElement("th");
        cartContentTableHeadArticle.innerText = "Artikel";
        document.querySelector("#carttrow").appendChild(cartContentTableHeadArticle);
        let cartContentTableHeadPrice = document.createElement("th");
        cartContentTableHeadPrice.innerText = "Preis";
        document.querySelector("#carttrow").appendChild(cartContentTableHeadPrice);
        let cartContentTableHeadRemove = document.createElement("th");
        cartContentTableHeadRemove.innerText = "";
        document.querySelector("#carttrow").appendChild(cartContentTableHeadRemove);
        let cartContentTableBody = document.createElement("tbody");
        cartContentTableBody.setAttribute("id", "carttbody");
        document.querySelector("#carttable").appendChild(cartContentTableBody);
        for (let i = 0; i < checkoutarticles.length; i++) {
            let checkoutTableRow = document.createElement("tr");
            document.getElementById("carttbody").appendChild(checkoutTableRow);
            checkoutTableRow.classList.add("article");
            checkoutTableRow.setAttribute("id", "tr" + i);
            let checkoutInfo = document.createElement("td");
            checkoutInfo.innerText = checkoutarticles[i].info;
            checkoutTableRow.appendChild(checkoutInfo);
            let checkoutPrice = document.createElement("td");
            checkoutPrice.innerText = checkoutarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            checkoutTableRow.appendChild(checkoutPrice);
            let checkoutRemove = document.createElement("td");
            checkoutTableRow.appendChild(checkoutRemove);
            let checkoutRemoveIcon = document.createElement("img");
            checkoutRemoveIcon.setAttribute("src", "Bilder/trash.svg");
            checkoutRemoveIcon.setAttribute("alt", "Warenkorb");
            checkoutRemoveIcon.setAttribute("currentindex", i.toString());
            checkoutRemoveIcon.addEventListener("click", handleRemoveArticle);
            checkoutRemove.appendChild(checkoutRemoveIcon);
            checkoutPriceSum += checkoutarticles[i].price;
            totalPrice.innerText = "Summe: " + checkoutPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        }
    }
    function handleRemoveArticle(_event) {
        let currentIndex = parseInt(_event.target.getAttribute("currentindex"));
        checkoutPriceSum -= checkoutarticles[currentIndex].price;
        totalPrice.innerText = "Summe: " + checkoutPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        (_event.target.parentElement).remove();
        checkoutarticles.splice(currentIndex, 1);
        localStorage.setItem("cart", JSON.stringify(checkoutarticles));
        location.reload();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=checkout.js.map