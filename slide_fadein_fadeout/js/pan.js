/**
 * Created by yangliu on 2017/3/31.
 */
var $imgct=$(".ct-image"),
    $prebtn=$(".btn-pre"),
    $nextbtn=$(".btn-nex"),
    $bullet=$(".bullet")

var $img_lis=$imgct.find("li"),
    $img_lis_length=$img_lis.length
    $bullet_lis=$bullet.find("li"),
    current_index=0

play(0)
autoplay()

$prebtn.on("click",function(){
    current_index--
    if (current_index===-1){
        current_index=$img_lis_length-1
    }
    play(current_index)
    active_bullet()
})
$nextbtn.on("click",next_img)
function next_img(){
    current_index++
    if (current_index===$img_lis_length){
        current_index=0
    }
    play(current_index)
    active_bullet()
}
$bullet.on("click","li",function(){
    current_index=$(this).index()
    play(current_index)
})


function play(index){
    $img_lis.eq(index).siblings().fadeOut(1000)
    $img_lis.eq(index).fadeIn(2000)
    active_bullet()
}
//转换bullet的样式
function active_bullet(){
    $bullet_lis.removeClass("active")
    $bullet_lis.eq(current_index).addClass("active")
}
function autoplay(){
    var setinterval_time=setInterval(next_img,2000)
}
