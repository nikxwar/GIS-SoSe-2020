"use strict";
var Endabgabe;
(function (Endabgabe) {
    let checkoutarticles = JSON.parse(localStorage.getItem("cart"));
    let checkoutPriceSum = 0;
    let totalPrice = document.createElement("h2");
    totalPrice.innerText = "Warenkorb ist leer";
    document.getElementById("cartsum")?.appendChild(totalPrice);
    if (checkoutarticles[0] !== undefined) {
        createCheckoutArticles();
    }
    function createCheckoutArticles() {
        if (checkoutarticles[0])
            for (let i = 0; i < checkoutarticles.length; i++) {
                let checkoutTableRow = document.createElement("tr");
                document.getElementById("cartcontent").appendChild(checkoutTableRow);
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
                /* let cartButton: HTMLButtonElement = document.createElement("button");
                 cartButton.innerText = "Artikel entfernen";
                 checkoutTableRow.appendChild(cartButton);
                 cartButton.setAttribute("currentindex", i.toString());
                 cartButton.addEventListener("click", handleRemoveArticle);*/
                checkoutPriceSum += checkoutarticles[i].price;
                totalPrice.innerText = "Summe: " + checkoutPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
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
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=checkout.js.map