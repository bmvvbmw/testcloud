// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  var crypto = require('crypto');
  var express = require('express');
  response.success(express);
});