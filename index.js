const http = require('http');
let userCount = 0;
const server = http.createServer(function (req, res) {

    switch (req.url) {
        case '/':
            userCount++;
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.end(`<h1>Корневая страница</h1> <br/> Просмотров: ${userCount} <br/><br/>  <a href = "about"> Перейти на страницу обо мне! </a> <br/>`)
            break
        case '/about':
            userCount++;
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.end(`<h1>Страница About</h1> <br/> Просмотров: ${userCount} <br/><br/>  <a href = "/"> Перейти на страницу главная! </a> <br/>`)
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
            res.end('<h1>Страница 404</h1>')
            break
    }

});
const port = '3000';
server.listen(port, () => {
    console.log(`Сервер слушает порт: ${port}`);
});
