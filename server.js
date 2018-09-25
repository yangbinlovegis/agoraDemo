var http = require('http');
var path = require('path');
var fs = require('fs');
var staticUrl = '/Users/yangbin/code/git/agoraDemo/Agora_Web_SDK_FULL/index.html';

var server = http.createServer(function(req, res) {
    console.log('url=', req.url);
    var file = path.resolve(__dirname) + req.url;
    console.log('filePath=', file);
    fs.readFile(file, function(err, data) {
        if (err){
            res.writeHeader(404, {
                'content-type': 'text/html;charset="UTF-8"'
            });
            res.write('<h1>404错误<h1><p>你要找的页面不存在</p>');
            res.end();
        }
        else{
            res.writeHeader(200, {
                'content-type': 'text/html;charset="UTF-8"'
            });
            res.write(data);
            res.end();
        }
    })
}).listen('8888');
console.log('server started succed');
console.log('url=http://localhost:8888/sdk/index.html');
console.log('key=75a345b464cd49f28e054738ca92dc8f');