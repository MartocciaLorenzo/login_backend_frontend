var express = require("express");
var cors = require("cors");
var apiServer = express();
var fs = require("fs");

var port = 3000;
var host = "localhost";

apiServer.listen(port, host, () => {
    console.log("server running at https://%s:d%", host, port);
});

apiServer.get("/api/login", (req, res) => {
    console.log("ricevuti:", req.query.mail, req.query.password)
    if(req.query.mail === "lorenzo" && req.query.password === "martoccia"){
        res.statusCode = 200;
        res.json({"message:" : "login effettuato"})
    }
    res.sendStatus(400);
})