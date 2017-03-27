/**
 * Created by yangliu on 2017/3/27.
 */
var $img=$("img").not(".load")
loading()
$(window).on("scroll",loading)
function loading(){
    $img.each(function(){
        $this=$(this)
        var srcval=$this.attr("data-src")
        if (isshow($this)){
            $this.attr("src",srcval)
        }
    })
}

function  isshow($node){
    var scrollTop=$(window).scrollTop()
    var $bHeight=$(window).height()+scrollTop
    var offsetTop=$node.offset().top
    var $sHeight=offsetTop+$node.outerHeight()

    if (offsetTop<$bHeight&&$sHeight>scrollTop){
        $node.addClass("load")
        return true
    }else{
       return false
    }
}