var express = require("express");
var server = express();

const PORT = process.env.PORT || 3000;

server.get(
  "/.well-known/apple-app-site-association",
  function (request, response) {
    response.sendFile(
      "/.well-known/apple-app-site-association/apple-app-site-association"
    );
  }
);

//server.listen(80);

server.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
