
namespace Aufgabe08 {
    let formData: FormData;
    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    submit.addEventListener("click", handleClickSubmit);



    async function communicate(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let responseString: string = await response.text();
        console.log(responseString);



        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }



    }
    function handleClickSubmit(_event: Event): void {
        communicate("https://nikxwargissose2020.herokuapp.com/");
        //communicate("http://localhost:8100");

    }
}