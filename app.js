const app = require("express")();
//why does it fail?

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Reny webapp");
});

// app.get("/apple-app-site-association", (req, res) => {
//   res.send("apple-app-site-association");
// });

app.listen(PORT, () => {
  console.log(`App up at port ${PORT}`);
});
