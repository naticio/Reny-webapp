const app = require("express")();
//var router = express.Router();

const PORT = process.env.PORT || 3000;

// app.get("", (req, res) => {
//   res.send("Reny webapp");
// });

app.get("/", function (req, res) {
  res.redirect("/src/index.html");
});

app.get("/apple-app-site-association", (request, response) => {
  response.json(__dirname + "/apple-app-site-association");
});

// app.get("/apple-app-site-association", (req, res) => {
//   res.send("apple-app-site-association");
// });

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
