"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.cartarticles = JSON.parse(localStorage.getItem("cart"));
    let cartPriceSum = 0;
    let totalPrice = document.createElement("h2");
    if (Aufgabe07.cartarticles[0] !== undefined) {
        createCartArticles();
    }
    function createCartArticles() {
        for (let i = 0; i < Aufgabe07.cartarticles.length; i++) {
            let cartDiv = document.createElement("div");
            document.getElementById("cartcontent").appendChild(cartDiv);
            cartDiv.setAttribute("id", "div" + i);
            let cartName = document.createElement("p");
            cartName.innerText = Aufgabe07.cartarticles[i].name;
            cartDiv.appendChild(cartName);
            let cartIMG = document.createElement("img");
            cartIMG.setAttribute("src", Aufgabe07.cartarticles[i].image);
            cartDiv.appendChild(cartIMG);
            let cartDesc = document.createElement("p");
            cartDesc.innerText = Aufgabe07.cartarticles[i].desc;
            cartDiv.appendChild(cartDesc);
            let cartPrice = document.createElement("p");
            cartPrice.innerText = Aufgabe07.cartarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            cartPrice.setAttribute("article_price", cartPrice.innerText);
            cartDiv.appendChild(cartPrice);
            let cartButton = document.createElement("button");
            cartButton.innerText = "Artikel entfernen";
            cartDiv.appendChild(cartButton);
            cartButton.setAttribute("currentindex", i.toString());
            cartButton.addEventListener("click", handleRemoveArticle);
            cartPriceSum += Aufgabe07.cartarticles[i].price;
            totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            document.getElementById("cartsum")?.appendChild(totalPrice);
            console.log(Aufgabe07.cartarticles);
        }
    }
    let clearCartButton = document.createElement("button");
    document.getElementById("clearcart").appendChild(clearCartButton);
    clearCartButton.innerText = "Warenkorb leeren";
    clearCartButton.addEventListener("click", handleClearCart);
    function handleRemoveArticle(_event) {
        let currentIndex = _event.target.getAttribute("currentindex");
        let indexToSubtract = parseInt(currentIndex);
        cartPriceSum = cartPriceSum - Aufgabe07.cartarticles[indexToSubtract].price;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        (_event.target.parentElement).remove();
        Aufgabe07.cartarticles.splice(indexToSubtract, 1);
        localStorage.setItem("cart", JSON.stringify(Aufgabe07.cartarticles));
        location.reload();
        createCartArticles();
    }
    function handleClearCart(_event) {
        for (let i = 0; i < Aufgabe07.cartarticles.length; i++) {
            document.getElementById("div" + i).remove();
        }
        cartPriceSum = 0;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        localStorage.clear();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=cart.js.map