const express = require("express");
const server = express();


server.use("/image", require("./image"));
server.use("/", require("./main"));


const PORT = 5567;

server.listen(PORT, () => console.log(`server started on port ${PORT}`));