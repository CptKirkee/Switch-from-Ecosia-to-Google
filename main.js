// ==UserScript==
// @name         Ecosia -> Google redirect button
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Adds a button to Ecosia to repeat same search in Google (opens in new tab)
// @author       Malte
// @match        https://www.ecosia.org/search?q=*
// @icon         https://www.google.com/s2/favicons?domain=ecosia.org
// @require      https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js
// @require      https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js
// ==/UserScript==

//Change Log:
// Added #g to search query

(function() {
    'use strict';

    //get Ecosia search parameters
    let currentURL = location.href;
    console.log("currentURL", currentURL);
    let searchParameter1 = currentURL.split("=");
    console.log("searchParameter1", searchParameter1);
    let searchParameter2 = searchParameter1[1].split("#");
    console.log("searchParameter2", searchParameter2);

    //create new clickable element
    var newNode = document.createElement('button');
    newNode.innerText = "Open same search in Google :)";
    newNode.id = "inGoogle";
    newNode.style.fontSize = "13px";
    newNode.style.border = "orange";

    //get space to insert button
    //let navBar = document.getElementsByClassName("dropdown");
    //console.log("navBar", navBar);
    //navBar[0].after(newNode);
    let navBar2 = document.getElementsByClassName("search-form-field");
    console.log("navBar2", navBar2);
    navBar2[0].after(newNode);

    /*newNode.style.backgroundColor = "#3cccac";
      newNode.style.color = "#fff";
      newNode.style.borderRadius = "50%";
      newNode.style.padding = "14px";
      newNode.style.textAlign = "center";
      newNode.style.textDecoration = "none";
      newNode.style.display = "inline-block";
      newNode.style.postion = "relative";
      newNode.style.margin = "4px 2px";*/

    //Adds tooltip to inGoogle-Button
    tippy('#inGoogle', {
      content: "Click to search Google for the same keywords in a new tab :)",
    });

    newNode.onclick = function () {
      let searchBar = document.getElementsByClassName("search-form-input");
      console.log("searchBar", searchBar);
      searchBar[0].value = searchBar[0].value + " " + "#g";
      let searchButton = document.getElementsByClassName("search-form-button");
      console.log("searchButton", searchButton);
      searchButton[1].click();
      //window.open("https://www.google.com/search?q=" + searchParameter2[0])
    }
})();
