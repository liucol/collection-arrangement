/**
 * Created by yangliu on 2017/4/8.
 */
waterfull()
$(window).resize(function(){
    waterfull()
})
function waterfull(){
    var contain_num=parseInt($('.contain').width()/$('.img').width())
    var imgs_height_array=[]
    for (var i=0;i<contain_num;i++){
        imgs_height_array[i]=0
    }

    $('.img').each(function(){
        var imgs_height_array_min=Math.min.apply(null,imgs_height_array)
        var minindex=imgs_height_array.indexOf(imgs_height_array_min)
        $(this).css({
            'top':imgs_height_array_min,
            'left':minindex*$('.img').outerWidth(true)
        })
        imgs_height_array[minindex]=imgs_height_array_min+$(this).outerHeight(true)
    })
}
