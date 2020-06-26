"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let url;
    document.querySelector("#sendhtml").addEventListener("click", handleClickHTML);
    document.querySelector("#sendjson").addEventListener("click", handleClickJSON);
    function setURL() {
        //url = "https://nikxwargissose2020.herokuapp.com";
        url = "http://localhost:8100";
    }
    async function handleClickHTML() {
        setURL();
        formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        url += "/html";
        url = url + "?" + query.toString();
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
        url += "/json";
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseJSON = await response.json();
        console.log(responseJSON);
        setURL();
        let responseArray;
        responseArray = JSON.parse(JSON.stringify(responseJSON));
        console.log(responseArray.length);
        for (let i = 0; i < responseArray.length; i++) {
            let responseDiv = document.createElement("div");
            document.getElementById("serverresponse")?.appendChild(responseDiv);
            /* let firstName: HTMLParagraphElement = document.createElement("p");
             firstName.innerText = "Vorname: " + responseArray[i].fname;
             responseDiv.appendChild(firstName);
 
             let lastName: HTMLParagraphElement = document.createElement("p");
             lastName.innerText = "Nachname: " + responseArray[i].lname;
             responseDiv.appendChild(lastName);
 
             let message: HTMLParagraphElement = document.createElement("p");
             message.innerText = "Nachrricht: " + responseArray[i].message;
             responseDiv.appendChild(message);
 
             let mood: HTMLParagraphElement = document.createElement("p");
             mood.innerText = "Stimmung: " + responseArray[i].mood.toString() + "%";
             responseDiv.appendChild(mood);
 
             if (responseArray[i].sellsoul == "on") {
                 let soulsold: HTMLParagraphElement = document.createElement("p");
                 soulsold.innerText = "Seele wurde verkauft!";
                 responseDiv.appendChild(soulsold);
 
 */
        }
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=submit.js.map