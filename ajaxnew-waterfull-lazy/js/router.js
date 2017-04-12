/**
 * Created by yangliu on 2017/4/11.
 */
var isshow=true,
    pagenum=1
ajax()
var $hidden=$('.hidden')

$(window).on('scroll',function(){
    ajax()
})
function ajax(){
    if(!isshow){
        return
    }
    isshow=false
    $.ajax({
        url:'http://platform.sina.com.cn/slide/album_tech',
        type:'get',
        dataType:'jsonp',
        jsonp:'jsoncallback',
        data: {
            app_key: 1271687855,
            num: 1,
            page: pagenum
        }
    }).done(function (ret){
        sucess(ret)
        isshow=true
        pagenum++
        autoajax()
    })
}

function sucess(ret){
    if(ret&&ret.status&&ret.status.code==='0'){
        console.log(ret.data)
        appendHtml(ret.data)
    }else{
        console.log('get data error')
    }
}

function appendHtml(data){
    var $wrap=$('.wrap')
    var $containwrap=$('.containWrap')

    for(var i=0;i<data.length;i++){
        var imgSrcString=data[i].img_url,
            titleSting=data[i].short_name,
            newsContainString=data[i].short_intro,
            newsHrefString=data[i].url
        var $contain=''
        $contain+='<div class="contain">'
        $contain+='<div class="img">'
        $contain+='<a href='+newsHrefString+'><img src='+imgSrcString+' alt=""></a>'
        $contain+='</div>'
        $contain+='<h3>'+titleSting+'</h3>'
        $contain+='<p>'+newsContainString+'</p>'
        $contain+='</div>'
        $containwrap.append($contain)
    }
    $wrap.prepend($containwrap)
    var contain=$('.contain')
    waterfull($containwrap,contain)
}

function autoajax(){
    if(isVisibel($hidden)){
        ajax()
    }
}

function isVisibel(node){
    var  $scrollTop=$(window).scrollTop(),
        $windowHeight=$(window).height(),
        $offsetTop=node.offset().top
    if ($offsetTop<$scrollTop+$windowHeight){
        return true
    }else{
        return false
    }
}
//瀑布流布局
function waterfull(contain,child){
    var $containWidth=contain.width()
    var $childWidth=child.width()
    var contain_num=parseInt($containWidth/$childWidth)
    var imgs_height_array=[]
    for (var i=0;i<contain_num;i++){
        imgs_height_array[i]=0
    }
    child.each(function(){
        var imgs_height_array_min=Math.min.apply(null,imgs_height_array)
        var minindex=imgs_height_array.indexOf(imgs_height_array_min)

        $(this).css({
            'top':imgs_height_array_min,
            'left':minindex*child.outerWidth(),
            'opacity':1
        })
        imgs_height_array[minindex]=imgs_height_array_min+$(this).outerHeight(true)
        $('.wrap').height(Math.max.apply(null,imgs_height_array))
    })
    console.log(Math.max.apply(null,imgs_height_array))
}

