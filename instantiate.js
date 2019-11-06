// import Express
const express = require("express");
// destructure its Router class
const { Router } = express;
// create a new router instance
const router = new Router();
// register an endpoint that listens on the '/' route
router.get("/", (req, res) => res.send("test"));
// create an new express server named app.
const app = express();
// register the router as middleware
app.use(router);
// tell the server to listen on port 4000; start the server.
const port = 4000;
app.listen(port, () =>
  console.log(`An appapaappappp is listening on port ${port}!!!`)
);
