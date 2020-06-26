namespace Aufgabe09 {

    let formData: FormData;
    let url: string;
    (<HTMLButtonElement>document.querySelector("#sendhtml")).addEventListener("click", handleClickHTML);
    (<HTMLButtonElement>document.querySelector("#sendjson")).addEventListener("click", handleClickJSON);

    function setURL(): void {
        url = "https://nikxwargissose2020.herokuapp.com";
        //url = "http://localhost:8100";
    }
    async function handleClickHTML(): Promise<void> {
        setURL();
        formData = new FormData(document.forms[0]);
         //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/html";
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        console.log(responseString);

        let responseParagraph: HTMLParagraphElement = document.createElement("p");
        document.getElementById("serverresponse")?.appendChild(responseParagraph);
        responseParagraph.innerHTML = responseString;
        setURL();

    }

    async function handleClickJSON(): Promise<void> {
        setURL();
        formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/json";
        url = url + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseJSON: string = await response.json();

        console.log(responseJSON);

       /* interface Answers {
            fname: string;
            lname: string;
            message: string;
            mood: number;
            sellsoul: string;
        }

        let responseArray: Answers[] = [];

        responseArray = JSON.parse(responseJSON);
        console.log("Array" + responseArray);

        for (let i: number = 0; i < responseArray.length; i++) {

            let responseDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("serverresponse")?.appendChild(responseDiv);

            let firstName: HTMLParagraphElement = document.createElement("p");
            firstName.innerText = "Vorname: " + responseArray[i].fname;
            responseDiv.appendChild(firstName);

            let lastName: HTMLParagraphElement = document.createElement("p");
            lastName.innerText = "Nachname: " + responseArray[i].lname;
            responseDiv.appendChild(lastName);

            let message: HTMLParagraphElement = document.createElement("p");
            message.innerText = "Nachrricht: " + responseArray[i].message;
            responseDiv.appendChild(message);

            let mood: HTMLParagraphElement = document.createElement("p");
            mood.innerText = "Stimmung: " + responseArray[i].mood.toString + "%";
            responseDiv.appendChild(mood);

            if (responseArray[i].sellsoul == "on") {
                let soulsold: HTMLParagraphElement = document.createElement("p");
                soulsold.innerText = "Seele wurde verkauft!";
                responseDiv.appendChild(soulsold);
            }

        }*/
        setURL();


    }



}