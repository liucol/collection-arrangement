/**
 * Created by yangliu on 2017/3/26.
 */
var start=0
var send=true
$(".wrap>.btn").on("click",function(){
    if(send){
        $.ajax({
            url:"/news",
            type:"get",
            data:start,
            dataType:"json",
        }).done(function(ret) {
            send=false
            if(ret.status===0){
                appendHtml(ret.data)
                start++
                send=true
            }else{
                alert("获取数据失败")
            }
        }).fail(function(){
            console.log("系统异常")
        })
    }

})

function appendHtml(arr){
    console.log(arr)
    if(arr[0]===null){
        $("<p>没有更多数据了</p>").replaceAll(".btn")
        return;
    }
        var htmls='';
        $.each(arr,function(index,val){
            htmls+='<li>'
            htmls+='<a class="clearfix" href='+val.link+'>'
            htmls+='<img src='+val.src+'>'
            htmls+='<div class="text">'
            htmls+='<h3>'+val.h3+'</h3>'
            htmls+='<p>'+val.p+'</p>'
            htmls+='</div></a></li>'

        })
        $(".wrap>.lists").append(htmls)
 }

