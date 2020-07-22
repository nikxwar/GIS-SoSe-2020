namespace Endabgabe {

    let cartarticles: Articles[] = JSON.parse(localStorage.getItem("cart")!);
    let cartPriceSum: number = 0;
    let totalPrice: HTMLHeadingElement = document.createElement("h2");
    totalPrice.innerText = "Warenkorb ist leer"
    document.getElementById("cartsum")?.appendChild(totalPrice);
    if (cartarticles[0] !== undefined) {
        createCartArticles();
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    }


    function createCartArticles(): void {
        for (let i: number = 0; i < cartarticles.length; i++) {

            let cartDiv: HTMLDivElement = document.createElement("div");
            (<HTMLElement>document.getElementById("cartcontent")).appendChild(cartDiv);
            cartDiv.classList.add("article");
            cartDiv.setAttribute("id", "div" + i);

            let cartIMG: HTMLImageElement = document.createElement("img");
            cartIMG.setAttribute("src", cartarticles[i].image);
            cartDiv.appendChild(cartIMG);

            let cartInfo: HTMLParagraphElement = document.createElement("p");
            cartInfo.innerText = cartarticles[i].info;
            cartDiv.appendChild(cartInfo);

            let cartPrice: HTMLParagraphElement = document.createElement("p");
            cartPrice.innerText = cartarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            cartDiv.appendChild(cartPrice);

            let cartButton: HTMLButtonElement = document.createElement("button");
            cartButton.innerText = "Artikel entfernen";
            cartDiv.appendChild(cartButton);
            cartButton.setAttribute("currentindex", i.toString());
            cartButton.addEventListener("click", handleRemoveArticle);

            cartPriceSum += cartarticles[i].price;
            totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

        }

    }

    let clearCartButton: HTMLButtonElement = document.createElement("button");
    (<HTMLButtonElement>document.getElementById("clearcart")).appendChild(clearCartButton);
    clearCartButton.innerText = "Warenkorb leeren";
    clearCartButton.addEventListener("click", handleClearCart);

    let toCheckout: HTMLAnchorElement = document.createElement("a");
    (<HTMLButtonElement>document.getElementById("checkout")).appendChild(toCheckout);
    toCheckout.setAttribute("href", "checkout.html");
    toCheckout.innerText = "Zur Kasse";


    function handleRemoveArticle(_event: Event): void {
        let currentIndex: number = parseInt(<string>(<HTMLElement>_event.target).getAttribute("currentindex")!);
        cartPriceSum -= cartarticles[currentIndex].price;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

        ((<HTMLDivElement>_event.target).parentElement!).remove();

        cartarticles.splice(currentIndex, 1);
        localStorage.setItem("cart", JSON.stringify(cartarticles));
        location.reload();
        createCartArticles();
    }

    function handleClearCart(_event: Event): void {
        for (let i: number = 0; i < cartarticles.length; i++) {
            (<HTMLDivElement>document.getElementById("div" + i)).remove();
        }
        cartPriceSum = 0;
        totalPrice.innerText = "Warenkorb ist leer"
        localStorage.clear();


    }

}