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
            num: 3,
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
        /*测试数据获取情况*/
        /*console.log(ret.data)*/
        appendHtml(ret.data)
    }else{
        console.log('get data error')
    }
}
function appendHtml(newsdata){
     var $addNewsListUL=$(".addNewsList ul")
     var $fragement=$(document.createDocumentFragment())
     for(var i=0;i<newsdata.length;i++){
         var $html=''
         $html+='<li class="clearfix">'
         $html+='<div class="img"><img src='+newsdata[i].img_url+' alt=""></div>'
         $html+=' <h2>'+newsdata[i].short_name+'</h2>'
         $html+='<p>'+newsdata[i].name+'</p>'
         $html+='</li>'
         $fragement.append($html)
     }
    $addNewsListUL.append($fragement)
}