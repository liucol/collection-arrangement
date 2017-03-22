var $title_ul=$(".title-ul")
var $title_li=$(".title-ul>li")

$title_ul.on("click","li",function(){
	var $this=$(this)
	var index=$this.index()
	
	$this.siblings().removeClass("active")
	$this.addClass("active")
	
	var $ct_li=$this.parents(".box").find(".ct-ul>li")
	$ct_li.removeClass("active")
	$ct_li.eq(index).addClass("active")
})

