namespace Endabgabe {
    let checkoutarticles: Articles[] = JSON.parse(localStorage.getItem("cart")!);
    let checkoutPriceSum: number = 0;
    let totalPrice: HTMLHeadingElement = document.createElement("h2");
    totalPrice.innerText = "Warenkorb ist leer"
    document.getElementById("cartsum")?.appendChild(totalPrice);
    if (checkoutarticles[0] !== undefined) {
        createCheckoutArticles();
    }


    function createCheckoutArticles(): void {
        if(checkoutarticles[0])
        for (let i: number = 0; i < checkoutarticles.length; i++) {

            let checkoutTableRow: HTMLTableRowElement = document.createElement("tr");
            (<HTMLElement>document.getElementById("cartcontent")).appendChild(checkoutTableRow);
            checkoutTableRow.classList.add("article");
            checkoutTableRow.setAttribute("id", "tr" + i);

            let checkoutInfo: HTMLTableCellElement = document.createElement("td");
            checkoutInfo.innerText = checkoutarticles[i].info;
            checkoutTableRow.appendChild(checkoutInfo);

            let checkoutPrice: HTMLTableCellElement = document.createElement("td");
            checkoutPrice.innerText = checkoutarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            checkoutTableRow.appendChild(checkoutPrice);

            let checkoutRemove: HTMLTableCellElement = document.createElement("td");
            checkoutTableRow.appendChild(checkoutRemove);

            let checkoutRemoveIcon: HTMLImageElement = document.createElement("img");
            checkoutRemoveIcon.setAttribute("src","Bilder/trash.svg" );
            checkoutRemoveIcon.setAttribute("alt","Warenkorb" );
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

        function handleRemoveArticle(_event: Event): void {
            let currentIndex: number = parseInt(<string>(<HTMLElement>_event.target).getAttribute("currentindex")!);
            checkoutPriceSum -= checkoutarticles[currentIndex].price;
            totalPrice.innerText = "Summe: " + checkoutPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
    
            ((<HTMLDivElement>_event.target).parentElement!).remove();
    
            checkoutarticles.splice(currentIndex, 1);
            localStorage.setItem("cart", JSON.stringify(checkoutarticles));
            location.reload();
        }
    }
}