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
    }else if(path === '/css/normalize.css'){   // 如果用户请求的是 /style.css 路径
        var string = fs.readFileSync('./css/normalize.css')
        response.setHeader('Content-Type', 'text/css')
        response.end(string)
    }else if(path === '/css/style.css'){   // 如果用户请求的是 /style.css 路径
        var string = fs.readFileSync('./css/style.css')
        response.setHeader('Content-Type', 'text/css')
        response.end(string)
    }else if(path === '/js/jquery-3.2.0.min.js'){  // 如果用户请求的是 /main.js 路径
        var string = fs.readFileSync('./js/jquery-3.2.0.min.js')
        response.setHeader('Content-Type', 'application/javascript')
        response.end(string)
    }else if(path === '/js/slide.js'){  // 如果用户请求的是 /main.js 路径
        var string = fs.readFileSync('./js/slide.js')
        response.setHeader('Content-Type', 'application/javascript')
        response.end(string)
    }else if(path === '/js/tab.js'){  // 如果用户请求的是 /main.js 路径
        var string = fs.readFileSync('./js/tab.js')
        response.setHeader('Content-Type', 'application/javascript')
        response.end(string)
    }else if(path === '/js/loadNewsDates.js'){  // 如果用户请求的是 /main.js 路径
        var string = fs.readFileSync('./js/loadNewsDates.js')
        response.setHeader('Content-Type', 'application/javascript')
        response.end(string)
    }else if(path === '/js/pan.js'){  // 如果用户请求的是 /main.js 路径
        var string = fs.readFileSync('./js/pan.js')
        response.setHeader('Content-Type', 'application/javascript')
        response.end(string)
    }else if(path === '/img/0.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/0.jpg')
        response.end(string)
    }else if(path === '/img/1.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/1.jpg')
        response.end(string)
    }else if(path === '/img/2.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/2.jpg')
        response.end(string)
    }else if(path === '/img/3.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/3.jpg')
        response.end(string)
    }else if(path === '/img/4.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/4.jpg')
        response.end(string)
    }else if(path === '/img/6.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/6.jpg')
        response.end(string)
    }else if(path === '/img/7.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/7.jpg')
        response.end(string)
    }else if(path === '/img/game_1.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_1.png')
        response.end(string)
    }else if(path === '/img/game_2.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_1.png')
        response.end(string)
    }else if(path === '/img/game_3.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_3.jpg')
        response.end(string)
    }else if(path === '/img/game_4.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_4.png')
        response.end(string)
    }else if(path === '/img/game_5.jpg'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_5.jpg')
        response.end(string)
    }else if(path === '/img/game_6.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_6.png')
        response.end(string)
    }else if(path === '/img/game_7.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_7.png')
        response.end(string)
    }else if(path === '/img/game_8.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/game_8.png')
        response.end(string)
    }else if(path === '/img/17783136.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/17783136.png')
        response.end(string)
    }else if(path === '/img/flagicon.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/flagicon.png')
        response.end(string)
    }else if(path === '/img/headbg.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/headbg.png')
        response.end(string)
    }else if(path === '/img/headerbg_v2.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/headerbg_v2.png')
        response.end(string)
    }else if(path === '/img/icon_v2.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/icon_v2.png')
        response.end(string)
    }else if(path === '/img/logo.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/logo.png')
        response.end(string)
    }else if(path === '/img/tab_ui.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/tab_ui.png')
        response.end(string)
    }else if(path === '/img/yticon.png'){  // 如果用户请求的是 /print-style.css 路径
        var string = fs.readFileSync('./img/yticon.png')
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