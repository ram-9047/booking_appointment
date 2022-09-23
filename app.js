const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./util/database");
const app = express();

app.set("views", "views");

const userRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(userRoutes);

const port = 3030 || process.env.PORT;

sequelize
  .sync()
  .then(() => {
    console.log("database connected");
    app.listen(port, () => {
      console.log(`server is started at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err, "error in connecting to database");
  });
