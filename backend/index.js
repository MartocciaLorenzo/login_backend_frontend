var express = require("express");
var cors = require("cors");
var apiServer = express();
var fs = require("fs");

var port = 3000;
var host = "localhost";

apiServer.listen(port, host, () => {
  console.log("server running at https://%s:d%", host, port);
});

