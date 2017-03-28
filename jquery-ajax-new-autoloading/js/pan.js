/**
 * Created by yangliu on 2017/3/26.
 */
var $btn=$(".btn")
var start=0
var send=true
var end=false

getdata()

$(window).on("scroll",function(){
    if (isShow($btn) && send &&!end){
        getdata()
    }
})

function getdata(){
    if(send){
        send=false
        $.ajax({
            url:"/news",
            type:"get",
            data:{
                dt:start
            },
            dataType:"json",
        }).done(function(ret) {
            if(ret.status===0){
                appendHtml(ret.data)
                start++
                send=true
                if (isShow($btn) && send &&!end){
                    getdata()
                }
            }else{
                alert("获取数据失败")
            }
        }).fail(function(){
            console.log("系统异常")
        })
    }
}

function appendHtml(arr){
    if(arr.length===0){
        end=true
        $("<p>没有更多数据了</p>").appendTo($(".wrap"))
        return;
    }
        var htmls='';
        $.each(arr,function(index,val){
            htmls+='<li>'
            htmls+='<a class="clearfix" href='+val.a_link+'>'
            htmls+='<img src='+val.a_src+'>'
            htmls+='<div class="text">'
            htmls+='<h3>'+val.a_h3+'</h3>'
            htmls+='<p>'+val.a_p+'</p>'
            htmls+='</div></a></li>'

        })
        $(".wrap>.lists").append(htmls)
 }

 function isShow($node){
    //滚动高度
    var scrollTop=$(window).scrollTop()
     //窗口高度+滚动高度（元素刚好要进入窗口）
    var s_rTop=$(window).height()+scrollTop
     //元素到文档顶部高度
    var offsetTop= $node.offset().top
     //元素底部刚好出窗口上边（元素刚好要离开窗口）
    var e_rTop=offsetTop+$node.outerHeight()

     if(offsetTop<s_rTop&&scrollTop<e_rTop){
         return true
     }else{
         return false
     }
 }

