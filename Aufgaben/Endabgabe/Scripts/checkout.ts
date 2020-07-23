namespace Endabgabe{
    let cartarticles: Articles[] = JSON.parse(localStorage.getItem("cart")!);
    let cartPriceSum: number = 0;
    let totalPrice: HTMLHeadingElement = document.createElement("h2");
    totalPrice.innerText = "Warenkorb ist leer"
    document.getElementById("cartsum")?.appendChild(totalPrice);
    if (cartarticles[0] !== undefined) {
        createCartArticles();
    }


    function createCartArticles(): void {
        for (let i: number = 0; i < cartarticles.length; i++) {

            let cartTableRow: HTMLDivElement = document.createElement("tr");
            (<HTMLElement>document.getElementById("cartcontent")).appendChild(cartTableRow);
            cartTableRow.classList.add("article");
            cartTableRow.setAttribute("id", "tr" + i);

            let cartInfo: HTMLTableCellElement = document.createElement("td");
            cartInfo.innerText = cartarticles[i].info;
            cartTableRow.appendChild(cartInfo);

            let cartPrice: HTMLParagraphElement = document.createElement("p");
            cartPrice.innerText = cartarticles[i].price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
            cartTableRow.appendChild(cartPrice);

           /* let cartButton: HTMLButtonElement = document.createElement("button");
            cartButton.innerText = "Artikel entfernen";
            cartTableRow.appendChild(cartButton);
            cartButton.setAttribute("currentindex", i.toString());
            cartButton.addEventListener("click", handleRemoveArticle);*/

            cartPriceSum += cartarticles[i].price;
            totalPrice.innerText = "Summe: " + cartPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

        }
}