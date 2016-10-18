"use strict";

/* https://open.whitehouse.gov/ data from the
   Tax Ideas Submitted by the Public
*/

var ourData = {};

window.onload = function taxIdeas () {

  let url = 'https://open.whitehouse.gov/resource/mj9q-chxc.json'

  // over 27,000 hits with the following
  // $.get(url, function(data) {
  //   console.log(data);
  // });

  // we'll do the long version to prevent overload
  $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 30
    }
  }).done(function(data) {
     ourData = data;
     taxIdeaData(ourData);
  })

};
