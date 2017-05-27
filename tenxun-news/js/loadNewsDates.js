/**
 * Created by yangliu on 2017/5/27.
 */
var isshow=true,
    pagenum=1
var $addMoreNews=$(".addMoreNews a")
$addMoreNews.on("click",function(){
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
    })
}
function sucess(ret){
    if(ret&&ret.status&&ret.status.code==='0'){
        console.log(ret.data)
       /* appendHtml(ret.data)*/
    }else{
        console.log('get data error')
    }
}