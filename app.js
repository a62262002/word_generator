const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const generateWord = require("./generate_word");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: true }));

// setting routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body;
  const word = generateWord(req.body);
  res.render("index", { word: word, options: options });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});
