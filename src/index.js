const http = require("http");
const fs = require("fs");
const INIITIALIZER_DIR = process.cwd() + "/src/initializers/";

let app = require("./app");

let files = fs.readdirSync(INIITIALIZER_DIR);
files.forEach(file => {
  require(INIITIALIZER_DIR + file)(app);
});
http.createServer(app).listen(8080); //the server object listens on port 8080
