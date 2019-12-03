"use strict";

let xhr = new XMLHttpRequest()

xhr.addEventListener("load", function(){

  //console.log(xhr.responseText);
  let obj = JSON.parse(xhr.responseText);
  let s = JSON.stringify(obj, null, "\t");
  console.log(s);
  //document.write("<pre>" + s + "</pre>");
});


xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559");
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send()
