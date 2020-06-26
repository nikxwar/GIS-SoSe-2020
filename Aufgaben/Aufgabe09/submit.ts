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
        url += "/html" + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseString: string = await response.text();
        console.log(responseString);

        (<HTMLParagraphElement>document.querySelector("#responseparagraph")).innerHTML = responseString;
        setURL();
    }

    async function handleClickJSON(): Promise<void> {
        setURL();
        formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "/json" + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseJSON: string = await response.json();

        console.log(responseJSON);
        setURL();

       
        }



    }