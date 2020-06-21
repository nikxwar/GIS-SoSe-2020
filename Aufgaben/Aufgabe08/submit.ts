
namespace Aufgabe08 {
    let formData: FormData;
    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    submit.addEventListener("click", handleClickSubmit);

    function handleClickSubmit(_event: Event): void {
        communicate("https://nikxwargissose2020.herokuapp.com/");
        
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let responseString: string = await response.text();
        console.log(responseString);



        for (let entry of formData) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }



    }
}