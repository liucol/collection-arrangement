/**
 * Created by yangliu on 2017/4/9.
 */
var imgHeight=200;
var wrapWidth=$('.wrap').width();
onerow()
var $img_contain=$('.img-contain').last()

load()
$(window).on('scroll',load)
//实现懒加载
function load(){
    console.log(isshow($img_contain))
    if(isshow($img_contain)){
        onerow()
        $img_contain=$('.img-contain').last()
    }
    function isshow($img_contain){
        var offsetTop=$img_contain.offset().top
        var windowHeight=$(window).height()
        var scorllTop=$(window).scrollTop()
        var imgOuterHeight=$img_contain.outerHeight()
        if (offsetTop<windowHeight+scorllTop&&scorllTop<offsetTop+imgOuterHeight){
            return true
        }else{
            return false
        }
    }
}


function onerow(){
    var imgList=[]
    var sumWidth=0
    for(var i=0;i<10;i++){
        //随机生成图片宽度
        var width=creatWidth()
        //判断数组里面的宽度和与容器宽度对比
        if(sumWidth<wrapWidth){
            imgList.push(width)
            sumWidth+=width
            continue
        }else if(sumWidth>wrapWidth){
            sumWidth-=imgList[imgList.length-1]
            imgList.pop()
            //刚好再添加一个宽度会导致总宽度大于容器宽度，那么根据算法扩大高度，使宽度和刚好等于图片容器宽度
            enlarge(imgList,sumWidth)
            break
        }else{
            //数组宽度和刚好等于容器宽度，直接把对应宽度的图片添加到html页面里面
            appendHtml(imgList)
            break
        }
    }
}

function creatWidth(){
    var randomWidth=parseInt((Math.random()*5+2)*100)
    return randomWidth
}
//扩大高度
function enlarge(imgList,sumWidth){
     var x=imgHeight*wrapWidth/sumWidth-imgHeight
    for(var i=0;i<imgList.length;i++){
         imgList[i]=(imgHeight+x)*imgList[i]/imgHeight
    }
    imgHeight=imgHeight+x
    appendHtml(imgList)
    imgHeight=imgHeight-x
}
//图片天添加到页面的函数方法
function appendHtml(imgList){
    var $wrap=$('.wrap')
    var $imgContain=$("<div class='img-contain'></div>")
    for(var i=0;i<imgList.length;i++){
        var $img=$("<img>")
        var width=imgList[i]
        var src='https://unsplash.it/'+width+'/'+imgHeight+'/?random'
        $img.attr('src',src)
        $imgContain.append($img)
    }
    $wrap.append($imgContain)
}

