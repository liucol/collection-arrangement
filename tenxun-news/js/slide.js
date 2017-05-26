$(function(){

    var $ct = $('.img-ct'),
        $items = $ct.children(),
        $bullet = $('.bullet'),
        imgWidth = $items.width(),
        imgCount = $items.length;
var curIdx = 0;
var isAnimate = false;
$bullet.find('li').on('click', function(){
    var idx = $(this).index();
    play(idx);
});

play(0);
autoPlay();



function playNext(){
    play((curIdx+1)%imgCount)
}

function play(idx){
    if(isAnimate) return;
    isAnimate = true;
    $items.eq(curIdx).fadeOut(2000);
    $items.eq(idx).fadeIn(2000, function(){
        isAnimate = false;
    });

    curIdx = idx;
    setBullet();
}

function setBullet(){
    $bullet.children().removeClass('active')
        .eq(curIdx).addClass('active');
}
function stopAuto(){
    clearInterval(clock);
}

function autoPlay(){
    clock = setInterval(function(){
        playNext();
    }, 2000);
}
});