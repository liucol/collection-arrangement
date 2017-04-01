/**
 * Created by yangliu on 2017/3/31.
 */
var $imgct=$(".ct-image"),
    $prebtn=$(".btn-pre"),
    $nextbtn=$(".btn-nex"),
    $bullet=$(".bullet")

var $firstimg=$imgct.find("li").last()
var $lastimg=$imgct.find("li").first()
var $imgwidth=$firstimg.width()
var curpageindex=0
var imglength=$imgct.children().length
var isAnimate=false

$imgct.prepend($firstimg.clone())
$imgct.append($lastimg.clone())

$imgct.width($imgwidth*$imgct.children().length)
$imgct.css({"left":-700})


autoplay()

$prebtn.on("click",function(e){
    e.preventDefault()
    playpre()
})
$nextbtn.on("click",function(e){
    e.preventDefault()
    playNext()
})
//单击bullet,滑动图片
$bullet.on("click","li",function(){
    var  $bullet_li_index=$(this).index()
    curpageindex=$bullet_li_index-1
    playNext()
})


//下一张
function playNext(){
    if(isAnimate) {
        return;
    }
    isAnimate=true
    $imgct.animate({
        left: $imgwidth*(-2-curpageindex)
    },playnext_animate_complete)
}
//下一张动画完成立即执行下面这个函数
function playnext_animate_complete(){
    curpageindex++
    if (curpageindex===imglength){
        $imgct.css({'left':'-'+$imgwidth+'px'})
        curpageindex=0
    }
    isAnimate=false
    setbullet()
}


//上一张
function playpre(){
    if(isAnimate) {
        return;
    }
    isAnimate=true
    $imgct.animate({
            left: -curpageindex*$imgwidth
        }, playpre_animate_complete)
}
//上一张动画完成立即执行的函数
function playpre_animate_complete(){
        curpageindex--
        if(curpageindex===-1) {
            $imgct.css({'left': -(imglength * $firstimg.width())})
            curpageindex = imglength-1
    }
    isAnimate=false
    setbullet()
}


//根据当前curpageindex的值判断哪个bullet 的li该显示成选中状态
function setbullet(){
    if(curpageindex===5){
        curpageindex=0
    }
    $bullet.children().removeClass('active').eq(curpageindex).addClass('active')
}

//自动播放
function autoplay(){
    //循环播放
    var setinetrval_time=setInterval(playNext,2000)
}