/**
 *
 * Created by yangliu on 2017/5/26.
 */
$(function(){

    var $container=$(".tab .container"),
        $newList=$(".tab .container .newList"),
        $head_li=$(".head>ul li"),
        /*设备body宽度*/
        getBodyWidth=document.body.clientWidth

    setWidth(getBodyWidth)

    /*单击tab的头部标题*/
    $head_li.on("click",function(){
        var index=$(this).index()
        for(var i=0;i<$head_li.length;i++){
            $head_li.eq(i).removeClass("active")
        }
        $(this).addClass("active")
        /*设置新闻内容的转换*/
        $container.css("transform","translate3d(-"+getBodyWidth*index+"px,0,0)")
    })
    /*设置container和newList宽度的函数*/
    function setWidth(WidthDate){
        $container.css("width",function(){
            return WidthDate*$newList.length+"px"
        })
        $newList.css("width",WidthDate+"px")
    }
})
