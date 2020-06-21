"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let formData;
    let submit = document.getElementById("send");
    submit.addEventListener("click", handleClickSubmit);
    async function communicate(_url) {
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseString = await response.text();
        console.log(responseString);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
    function handleClickSubmit(_event) {
        communicate("https://nikxwargissose2020.herokuapp.com/");
        //communicate("http://localhost:8100");
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=submit.js.map