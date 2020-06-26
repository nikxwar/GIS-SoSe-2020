"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let url;
    document.querySelector("#sendhtml").addEventListener("click", handleClickHTML);
    document.querySelector("#sendjson").addEventListener("click", handleClickJSON);
    function setURL() {
        url = "https://nikxwargissose2020.herokuapp.com";
        //url = "http://localhost:8100";
    }
    async function handleClickHTML() {
        setURL();
        formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        url += "/html" + "?" + query.toString();
        let response = await fetch(url);
        let responseString = await response.text();
        console.log(responseString);
        document.querySelector("#responseparagraph").innerHTML = responseString;
        setURL();
    }
    async function handleClickJSON() {
        setURL();
        formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        url += "/json" + "?" + query.toString();
        let response = await fetch(url);
        let responseJSON = await response.json();
        console.log(responseJSON);
        setURL();
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=submit.js.map