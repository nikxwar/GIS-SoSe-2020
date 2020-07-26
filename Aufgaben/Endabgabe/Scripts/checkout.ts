namespace Endabgabe {
    let checkoutarticles: Articles[] = [];
    let checkoutPriceSum: number = 0;
    let totalPrice: HTMLHeadingElement = document.createElement("h2");
    totalPrice.innerText = "Warenkorb ist leer"
    document.getElementById("cartsum")?.appendChild(totalPrice);

    if (localStorage.getItem("cart") !== null) {
        checkoutarticles = JSON.parse(localStorage.getItem("cart")!);
        createCheckoutArticles();
    }


    function createCheckoutArticles(): void {

        let cartContentTable: HTMLTableElement = document.createElement("table");
        cartContentTable.setAttribute("id", "carttable");
        (<HTMLElement>document.querySelector("#carttablediv")).appendChild(cartContentTable);

        let cartContentTableHead: HTMLElement = document.createElement("thead");
        cartContentTableHead.setAttribute("id", "cartthead");
        (<HTMLElement>document.querySelector("#carttable")).appendChild(cartContentTableHead);

        let cartContentTableHeadRow: HTMLTableRowElement = document.createElement("tr");
        cartContentTableHeadRow.setAttribute("id", "carttrow");
        (<HTMLElement>document.querySelector("#cartthead")).appendChild(cartContentTableHeadRow);

        let cartContentTableHeadArticle: HTMLElement = document.createElement("th");
        cartContentTableHeadArticle.innerText = "Artikel";
        (<HTMLElement>document.querySelector("#carttrow")).appendChild(cartContentTableHeadArticle);

        let cartContentTableHeadPrice: HTMLElement = document.createElement("th");
        cartContentTableHeadPrice.innerText = "Preis";
        (<HTMLElement>document.querySelector("#carttrow")).appendChild(cartContentTableHeadPrice);

        let cartContentTableHeadRemove: HTMLElement = document.createElement("th");
        cartContentTableHeadRemove.innerText = "";
        (<HTMLElement>document.querySelector("#carttrow")).appendChild(cartContentTableHeadRemove);

        let cartContentTableBody: HTMLElement = document.createElement("tbody");
        cartContentTableBody.setAttribute("id", "carttbody");
        (<HTMLElement>document.querySelector("#carttable")).appendChild(cartContentTableBody);

        for (let i: number = 0; i < checkoutarticles.length; i++) {

            let checkoutTableRow: HTMLTableRowElement = document.createElement("tr");
            (<HTMLElement>document.getElementById("carttbody")).appendChild(checkoutTableRow);
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
            checkoutRemoveIcon.setAttribute("src", "Bilder/trash.svg");
            checkoutRemoveIcon.setAttribute("alt", "Warenkorb");
            checkoutRemoveIcon.setAttribute("currentindex", i.toString());
            checkoutRemoveIcon.addEventListener("click", handleRemoveArticle);
            checkoutRemove.appendChild(checkoutRemoveIcon);

            checkoutPriceSum += checkoutarticles[i].price;
            totalPrice.innerText = "Summe: " + checkoutPriceSum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

        }
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

    document.getElementById("sendorder")?.addEventListener("click", sendOrder);

    let url: string;
    export function setURL(): void {
        //url = "https://nikxwargissose2020.herokuapp.com";
        url = "http://localhost:8100";
    }
    async function sendOrder(): Promise<void> {
        setURL();
        let formData: FormData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/send" + "?" + query.toString();
        await fetch(url);
        
    }
}
