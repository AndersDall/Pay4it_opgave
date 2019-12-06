"use strict";
/*
var request = new XMLHttpRequest()

request.open('GET', "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559", true)
request.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");

request.setRequestHeader("Cache-Control", "no-cache");
*/

/*
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status === 200 && request.status < 400) {
    data.for(Shelves => {
      console.log(Shelves.Price)
    })
  } else {
    console.log('error')
  }
}

request.send()
*/
// Create a request variable and assign a new XMLHttpRequest object to it.
let xhr = new XMLHttpRequest()

xhr.addEventListener("load", function(){


  //console.log(xhr.responseText);

  let obj = JSON.parse(xhr.responseText);
  let s = JSON.stringify(obj, null, "\t");
  console.log(s);

  document.write("<pre>" + s + "</pre>");
});

// Open a new connection, using the GET request on the URL endpoint

xhr.open("GET", "https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=559");
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.setRequestHeader("Cache-Control", "no-cache");

xhr.send()
