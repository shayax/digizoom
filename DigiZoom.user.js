// ==UserScript==
// @name         DigiZoom
// @namespace    https://github.com/shayax/digizoom/
// @version      1.0
// @description  Appends the address of Full Size Image of a Product to Digikala's Logo at the top.
// @author       https://github.com/shayax/
// @match        https://www.digikala.com/Product/*
// @grant        none
// ==/UserScript==
var ii = document.querySelector(".thumb-image > img").getAttribute("data-imagezoom");
var node = document.querySelector(".logo-box > a");
var a = document.createAttribute("href");
a.value = ii;
node.setAttributeNode(a);
//var gz = "<img src='http:" + ii + "'" + "/>";
//function dz(){document.write(gz)};
