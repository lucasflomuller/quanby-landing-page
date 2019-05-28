const express = require("express");
const app = express();

app.use(express.static("public"))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const acceptedLang = req.headers["accept-language"];

  if (acceptedLang.includes("pt-BR")) {
    res.render("index-pt");
  } else {
    res.render("index-en");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
