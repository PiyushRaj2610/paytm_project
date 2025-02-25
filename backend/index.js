const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");
const accountRouter = require("./routes/account")

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
app.use("/api/v1", accountRouter);

app.listen(3000, () => {
  console.log("server running on port 3000")
})
