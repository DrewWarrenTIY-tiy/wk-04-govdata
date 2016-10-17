Synopsis

Exercise to practice obtaining data from an API and displaying it on a simple website.

Code Example

$.ajax({
    dataType: "json",
    url: url,          url set to variable for ease of use.
    data: {
      "$limit" : 100
    }
  }).done(function(data) {
    ourData = data;
  })

Motivation

Was just taught how to access and utilize APIs. Necessary to practice for retention.

Installation

"Provide code examples and explanations of how to get the project."

API Reference

https://open.whitehouse.gov/resource/mj9q-chxc.json

Tests

No Tests.

Contributors

Solo exercise. No collaboration at this time.

License

No License.
