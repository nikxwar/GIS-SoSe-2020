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
            let cartDiv = document.createElement("div");
            document.getElementById("cartcontent").appendChild(cartDiv);
            cartDiv.classList.add("article");
            cartDiv.setAttribute("id", "div" + i);
            let cartIMG = document.createElement("img");
            cartIMG.setAttribute("src", cartarticles[i].image);
            cartDiv.appendChild(cartIMG);
            let cartInfo = document.createElement("p");
            cartInfo.innerText = cartarticles[i].info;
            cartDiv.appendChild(cartInfo);
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
    let toCheckout = document.createElement("a");
    document.getElementById("checkout").appendChild(toCheckout);
    toCheckout.setAttribute("href", "checkout.html");
    toCheckout.innerText = "Zur Kasse";
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
        totalPrice.innerText = "Warenkorb ist leer";
        localStorage.clear();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=cartscript.js.map