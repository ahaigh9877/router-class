const express = require("express");
const router = require("./router");

const app = express();
app.use(router);

const port = 4000;
app.listen(port, () => console.log(`A soiver is listening on port ${port}!!!`));
