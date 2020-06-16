namespace Aufgabe07 {

    let lengthLocalStorage: number = parseInt(localStorage.getItem("articleAmount")!);
    let cartPriceSum: number = 0;
    let totalPrice: HTMLHeadingElement = document.createElement("h2");

    for (let i: number = 0; i <= lengthLocalStorage - 1; i++) {

        let cartDiv: HTMLDivElement = document.createElement("div");
        (<HTMLElement>document.getElementById("cartcontent")).appendChild(cartDiv);
        cartDiv.setAttribute("id", "div" + i);

        let cartName: HTMLParagraphElement = document.createElement("p");
        cartName.innerText = localStorage.getItem("articleName" + i)!;
        cartDiv.appendChild(cartName);

        let cartIMG: HTMLImageElement = document.createElement("img");
        cartIMG.setAttribute("src", localStorage.getItem("articleIMG" + i)!);
        cartDiv.appendChild(cartIMG);

        let cartDesc: HTMLParagraphElement = document.createElement("p");
        cartDesc.innerText = localStorage.getItem("articleDescription" + i)!;
        cartDiv.appendChild(cartDesc);

        let cartPrice: HTMLParagraphElement = document.createElement("p");
        cartPrice.innerText = localStorage.getItem("articlePrice" + i) + "€"!;
        cartPrice.setAttribute("article_price", cartPrice.innerText);
        cartDiv.appendChild(cartPrice);

        let cartButton: HTMLButtonElement = document.createElement("button");
        cartButton.innerText = "Artikel entfernen";
        cartDiv.appendChild(cartButton);
        cartButton.addEventListener("click", handleRemoveArticle);

        cartPriceSum += parseFloat(cartPrice.innerHTML);
        totalPrice.innerText = "Summe: " + cartPriceSum.toFixed(2) + "€";
        document.getElementById("cartsum")?.appendChild(totalPrice);

    }

    let clearCartButton: HTMLButtonElement = document.createElement("button");
    (<HTMLButtonElement>document.getElementById("clearcart")).appendChild(clearCartButton);
    clearCartButton.innerText = "Warenkorb leeren";
    clearCartButton.addEventListener("click", handleClearCart);

    function handleRemoveArticle(_event: Event): void {
        let priceString: string = (<HTMLParagraphElement>(<HTMLElement>_event.target).parentElement).getAttribute("article_price")!;
        cartPriceSum = cartPriceSum - parseFloat(priceString);
        totalPrice.innerText = "Summe: " + cartPriceSum.toFixed(2) + "€";
        ((<HTMLDivElement>_event.target).parentElement!).remove();
    }

    function handleClearCart(_event: Event): void {
        for (let i: number = 0; i <= lengthLocalStorage; i++) {
            (<HTMLDivElement>document.getElementById("div" + i)).remove();
            totalPrice.innerText = "Summe: 0,00€";
            localStorage.clear();
        }

    }


}