"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let lengthLocalStorage = parseInt(localStorage.getItem("articleAmount"));
    let cartPriceSum = 0;
    let totalPrice = document.createElement("h2");
    for (let i = 0; i <= lengthLocalStorage - 1; i++) {
        let cartDiv = document.createElement("div");
        document.getElementById("cartcontent").appendChild(cartDiv);
        cartDiv.setAttribute("id", "div" + i);
        let cartName = document.createElement("p");
        cartName.innerText = localStorage.getItem("articleName" + i);
        cartDiv.appendChild(cartName);
        let cartIMG = document.createElement("img");
        cartIMG.setAttribute("src", localStorage.getItem("articleIMG" + i));
        cartDiv.appendChild(cartIMG);
        let cartDesc = document.createElement("p");
        cartDesc.innerText = localStorage.getItem("articleDescription" + i);
        cartDiv.appendChild(cartDesc);
        let cartPrice = document.createElement("p");
        cartPrice.innerText = localStorage.getItem("articlePrice" + i) + "€";
        cartPrice.setAttribute("article_price", cartPrice.innerText);
        cartDiv.appendChild(cartPrice);
        let cartButton = document.createElement("button");
        cartButton.innerText = "Artikel entfernen";
        cartDiv.appendChild(cartButton);
        cartButton.addEventListener("click", handleRemoveArticle);
        cartPriceSum += parseFloat(cartPrice.innerHTML);
        totalPrice.innerText = "Summe: " + cartPriceSum.toFixed(2) + "€";
        document.getElementById("cartsum")?.appendChild(totalPrice);
    }
    let clearCartButton = document.createElement("button");
    document.getElementById("clearcart").appendChild(clearCartButton);
    clearCartButton.innerText = "Warenkorb leeren";
    clearCartButton.addEventListener("click", handleClearCart);
    function handleRemoveArticle(_event) {
        let priceString = _event.target.parentElement.getAttribute("article_price");
        cartPriceSum = cartPriceSum - parseFloat(priceString);
        totalPrice.innerText = "Summe: " + cartPriceSum.toFixed(2) + "€";
        (_event.target.parentElement).remove();
    }
    function handleClearCart(_event) {
        for (let i = 0; i <= lengthLocalStorage; i++) {
            document.getElementById("div" + i).remove();
            totalPrice.innerText = "Summe: 0,00€";
            localStorage.clear();
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=cart.js.map