console.log("server is starting...");

let express = require('express');

let app = express();
let server = app.listen(3000, listening);
// Добавим функцию прослушивания
function listening() {
    console.log("Listening...");
}
// Осуществили запрос с параметрами
app.get('/:name&:message', (req, res) => {
    const utf8 = require('utf8');
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8'});
    res.write('Hello, ' + req.params.name + "! " + req.params.message + "! ");
    res.end();
});


