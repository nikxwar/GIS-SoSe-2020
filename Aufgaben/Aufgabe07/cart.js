"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let cartarticles = JSON.parse(localStorage.getItem("cart"));
    let cartPriceSum = 0;
    let totalPrice = document.createElement("h2");
    totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    document.getElementById("cartsum")?.appendChild(totalPrice);
    if (cartarticles[0] !== undefined) {
        createCartArticles();
    }
    function createCartArticles() {
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
            cartDiv.appendChild(cartPrice);
            let cartButton = document.createElement("button");
            cartButton.innerText = "Artikel entfernen";
            cartDiv.appendChild(cartButton);
            cartButton.setAttribute("currentindex", i.toString());
            cartButton.addEventListener("click", handleRemoveArticle);
            cartPriceSum += cartarticles[i].price;
            totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        }
    }
    let clearCartButton = document.createElement("button");
    document.getElementById("clearcart").appendChild(clearCartButton);
    clearCartButton.innerText = "Warenkorb leeren";
    clearCartButton.addEventListener("click", handleClearCart);
    function handleRemoveArticle(_event) {
        let currentIndex = parseInt(_event.target.getAttribute("currentindex"));
        cartPriceSum -= cartarticles[currentIndex].price;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        (_event.target.parentElement).remove();
        cartarticles.splice(currentIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cartarticles));
        location.reload();
        createCartArticles();
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