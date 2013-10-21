// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  var crypto = require('crypto');
  var express = require('express');
  var yaml = require('js-yaml');
  var　str = "";
  config = "test: !!js/function > \n  \
  function f() { \n    \
   str="HelloWorld" \n  \
  }();"
  
  yaml.load(config);
  response.success(str);
});