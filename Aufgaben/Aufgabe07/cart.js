"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let cartarticles = JSON.parse(localStorage.getItem("cart"));
    console.log(cartarticles[0].price);
    let cartPriceSum = 0;
    let totalPrice = document.createElement("h2");
    for (let i = 0; i < cartarticles.length; i++) {
        let cartDiv = document.createElement("div");
        document.getElementById("cartcontent").appendChild(cartDiv);
        cartDiv.setAttribute("id", "div" + i);
        let cartName = document.createElement("p");
        cartName.innerText = cartarticles[i].name;
        cartDiv.appendChild(cartName);
        let cartIMG = document.createElement("img");
        cartIMG.setAttribute("src", cartarticles[i].image);
        cartDiv.appendChild(cartIMG);
        let cartDesc = document.createElement("p");
        cartDesc.innerText = cartarticles[i].desc;
        cartDiv.appendChild(cartDesc);
        let cartPrice = document.createElement("p");
        cartPrice.innerText = cartarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        cartPrice.setAttribute("article_price", cartPrice.innerText);
        cartDiv.appendChild(cartPrice);
        let cartButton = document.createElement("button");
        cartButton.innerText = "Artikel entfernen";
        cartDiv.appendChild(cartButton);
        cartButton.setAttribute("currentindex", i.toString());
        cartButton.addEventListener("click", handleRemoveArticle);
        cartPriceSum += cartarticles[i].price;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        document.getElementById("cartsum")?.appendChild(totalPrice);
        console.log(cartPriceSum);
    }
    let clearCartButton = document.createElement("button");
    document.getElementById("clearcart").appendChild(clearCartButton);
    clearCartButton.innerText = "Warenkorb leeren";
    clearCartButton.addEventListener("click", handleClearCart);
    function handleRemoveArticle(_event) {
        let currentIndex = _event.target.getAttribute("currentindex");
        let indexToSubtract = parseInt(currentIndex);
        cartPriceSum = cartPriceSum - cartarticles[indexToSubtract].price;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        (_event.target.parentElement).remove();
    }
    function handleClearCart(_event) {
        for (let i = 0; i < cartarticles.length; i++) {
            document.getElementById("div" + i).remove();
        }
        cartPriceSum = 0;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        localStorage.clear();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=cart.js.map