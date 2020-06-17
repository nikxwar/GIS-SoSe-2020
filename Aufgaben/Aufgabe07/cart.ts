namespace Aufgabe07 {

    let cartarticles: ArtikelBouldern[] = JSON.parse(localStorage.getItem("cart")!);
    console.log(cartarticles[0].price);
    let cartPriceSum: number = 0;
    let totalPrice: HTMLHeadingElement = document.createElement("h2");

    for (let i: number = 0; i < cartarticles.length; i++) {

        let cartDiv: HTMLDivElement = document.createElement("div");
        (<HTMLElement>document.getElementById("cartcontent")).appendChild(cartDiv);
        cartDiv.setAttribute("id", "div" + i);

        let cartName: HTMLParagraphElement = document.createElement("p");
        cartName.innerText = cartarticles[i].name;
        cartDiv.appendChild(cartName);

        let cartIMG: HTMLImageElement = document.createElement("img");
        cartIMG.setAttribute("src", cartarticles[i].image);
        cartDiv.appendChild(cartIMG);

        let cartDesc: HTMLParagraphElement = document.createElement("p");
        cartDesc.innerText = cartarticles[i].desc;
        cartDiv.appendChild(cartDesc);

        let cartPrice: HTMLParagraphElement = document.createElement("p");
        cartPrice.innerText = cartarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        cartPrice.setAttribute("article_price", cartPrice.innerText);
        cartDiv.appendChild(cartPrice);

        let cartButton: HTMLButtonElement = document.createElement("button");
        cartButton.innerText = "Artikel entfernen";
        cartDiv.appendChild(cartButton);
        cartButton.setAttribute("currentindex", i.toString());
        cartButton.addEventListener("click", handleRemoveArticle);

        cartPriceSum += parseFloat(cartPrice.innerText);
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        document.getElementById("cartsum")?.appendChild(totalPrice);
        console.log(cartPriceSum);

    }

    let clearCartButton: HTMLButtonElement = document.createElement("button");
    (<HTMLButtonElement>document.getElementById("clearcart")).appendChild(clearCartButton);
    clearCartButton.innerText = "Warenkorb leeren";
    clearCartButton.addEventListener("click", handleClearCart);




    function handleRemoveArticle(_event: Event): void {
        let currentIndex: string = (<string>(<HTMLElement>_event.target).getAttribute("currentindex"))!;
        let indexToSubtract: number = parseInt(currentIndex);
        cartPriceSum = cartPriceSum - cartarticles[indexToSubtract].price;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        ((<HTMLDivElement>_event.target).parentElement!).remove();


    }

    function handleClearCart(_event: Event): void {
        for (let i: number = 0; i < cartarticles.length; i++) {
            (<HTMLDivElement>document.getElementById("div" + i)).remove();
        }
        cartPriceSum = 0;
        totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
        localStorage.clear();
    }


}