const http = require('http');
const pug = require('pug');
const querystring = require('querystring');
let todos = [
    { id: 1, title: 'Back-end Ex1', status: 'Done' },
    { id: 2, title: 'Font-end Ex1', status: 'New' },
    { id: 3, title: 'PHP', status: 'Progress' },
    { id: 4, title: 'Back-end Ex2', status: 'Done' },
    { id: 5, title: 'Task', status: 'New' },
    { id: 6, title: 'ahiihh', status: 'Progress' },
]

function requireListener(req, res) {
    //check dk de hien thi trang chu
    if (/^\/(\?.*)?$/.test(req.url)) {
        //regular Expression
        let page = 1, prPage = false, nextPage = 2, n = 2;
        let urlParts = req.url.split('?');
        if (urlParts.length > 1) {
            let params = querystring.decode(urlParts[1]);
            if (params.page) page = Number(params.page);
            if (params.n) n = Number(params.n);
            if (n < 2) n = 2;
            if ((page - 1) * n >= todos.length) page = 1;
        }
        if (page > 1) prPage = page - 1;
        if (todos.length - n * page > 0) nextPage = page + 1;
        let todoList = [];
        for (let i = (page - 1) * n; i < page * n; i++) {
            if (i >= todos.length) break;
            else todoList.push(todos[i]);
        }
        res.write(
            pug.renderFile("./home.pug", {
                title: "welcome Pug",
                todos: todoList,
                page,
                prPage,
                nextPage,
                n
            })
        );
        res.end();
    }
    else if (req.url == '/create') {
        if (req.method == 'GET') {
            res.write(pug.renderFile('./create.pug',
                { title: 'Create Page' }))
            res.end();
        }else if(req.method = 'POST'){
            let rawData ='';
            req.on('data', (chunk)=>{rawData+=chunk; });
            req.on('end', ()=>{
                let todo = querystring.decode(rawData);
                todo.id = todos[todos.length-1].id +1;
                todos.push(todo);
                res.writeHead(301, {"Location": "/"})
                res.end();
            })
        }
    }
}
const server = http.createServer(requireListener)
server.listen(3008, () => {
    console.log('server listen on 3000!')
})