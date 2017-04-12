/**
 * Created by yangliu on 2017/4/11.
 */
var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

    var temp = url.parse(request.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = request.method

    //从这里开始看，上面不要看

    if(path === '/'){  // 如果用户请求的是 / 路径
        var string = fs.readFileSync('./index.html')  // 就读取 index.html 的内容
        response.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头 Content-Type
        response.end(string)   // 设置响应消息体
    }else if(path === '/css/style.css'){   // 如果用户请求的是 /style.css 路径
        var string = fs.readFileSync('./css/style.css')
        response.setHeader('Content-Type', 'text/css')
        response.end(string)
    }else if(path === '/js/jquery-3.2.0.min.js'){  // 如果用户请求的是 /main.js 路径
        var string = fs.readFileSync('./js/jquery-3.2.0.min.js')
        response.setHeader('Content-Type', 'application/javascript')
        response.end(string)
    }else if(path === '/js/router.js'){  // 如果用户请求的是 /main.js 路径
        var string = fs.readFileSync('./js/router.js')
        response.setHeader('Content-Type', 'application/javascript')
        response.end(string)
    }else if(path === '/img/23.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/23.jpg')
        response.end(string)
    }else{  // 如果上面都不是用户请求的路径
        response.setHeader('Content-Type', 'text/html;charset=utf-8')  // 设置响应头 Content-Type
        response.end('找不到对应的路径，你需要自行修改 index.js')
    }

    // 代码结束，下面不要看
    console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 8888 成功')