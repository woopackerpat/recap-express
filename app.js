const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan')

const userRoute = require("./routes/userRoute");
const todoRoute = require("./routes/todoRoute");
const notFoundMiddleWare = require("./middlewares/notfound");
const errorMiddleware = require("./middlewares/error");

// logging http request middleware
app.use(morgan('dev'))

//enable cors middleware
app.use(cors());

// parsing request body middleware
app.use(express.json()); //content-type: application/json
app.use(express.urlencoded({ extended: false })); //content-type: application/x-www-form-urlencode

//dispatch to router level middleware
app.use("/users", userRoute);
app.use("/todos", todoRoute);

//handle resource not found middleware
app.all("*", notFoundMiddleWare);

//handle error middleware
app.use(errorMiddleware);

const port = 8002;
app.listen(port, () => console.log(`server run on port ${port}`));
