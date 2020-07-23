"use strict";
var Endabgabe;
(function (Endabgabe) {
    let cartarticles = JSON.parse(localStorage.getItem("cart"));
    let cartPriceSum = 0;
    let totalPrice = document.createElement("h2");
    totalPrice.innerText = "Warenkorb ist leer";
    document.getElementById("cartsum")?.appendChild(totalPrice);
    if (cartarticles[0] !== undefined) {
        createCartArticles();
    }
    function createCartArticles() {
        for (let i = 0; i < cartarticles.length; i++) {
            let cartTableRow = document.createElement("tr");
            document.getElementById("cartcontent").appendChild(cartTableRow);
            cartTableRow.classList.add("article");
            cartTableRow.setAttribute("id", "tr" + i);
            let cartInfo = document.createElement("td");
            cartInfo.innerText = cartarticles[i].info;
            cartTableRow.appendChild(cartInfo);
            let cartPrice = document.createElement("p");
            cartPrice.innerText = cartarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            cartTableRow.appendChild(cartPrice);
            /* let cartButton: HTMLButtonElement = document.createElement("button");
             cartButton.innerText = "Artikel entfernen";
             cartTableRow.appendChild(cartButton);
             cartButton.setAttribute("currentindex", i.toString());
             cartButton.addEventListener("click", handleRemoveArticle);*/
            cartPriceSum += cartarticles[i].price;
            totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=checkout.js.map