const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5042;

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (request, response) {
  response.sendFile(__dirname + "/dist/index.html");
});

app.listen(PORT, function () {
  global.console.log("Frontend server listens on port: " + PORT);
});
