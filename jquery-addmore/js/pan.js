/**
 * Created by yangliu on 2017/3/27.
 */
$btn=$(".box>a")
var ix=0
var sendData=true
$btn.on("click",function(){
    if (!sendData){
        return;
    }
    sendData=false
    $.ajax({
        url:"/loadmore",
        type: "get",
        data:{dat:ix}
    }).done(function(ret){
          appendHtml(ret)
          ix++
        sendData=true
    }).fail(function(){
        console.log("系统异常")
    })
})
function appendHtml(arr){
    var $lists=$(".box>.lists")
    var html=""
    for(var i=0;i<arr.length;i++){
      html+=' <li>内容'+arr[i]+'</li>'
    }
    $lists.append(html)
}