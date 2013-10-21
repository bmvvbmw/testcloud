// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  require('crypto');
  require('express');
  response.success("Hello world!");
});