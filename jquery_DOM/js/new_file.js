var products = [
	{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}
];

var $btn=$(".btn")
var $ul=$(".box>ul")
$btn.on("click",function(){
	var str=""
	for (var i=0;i<products.length;i++) {
		var obj=products[i]
		var Osrc=obj.img
		console.log(typeof Osrc)
		var Op=obj.name
		var Oprice=obj.price
		
		str+="<li>"
		str+="<div class='cover'><a href='javascript: ;'>立即抢购</a></div>"
		str+="<img src="+Osrc+">"
		str+="<p>"+Op+"</p>"
		str+="<p class='price'>"+Oprice+"</p>"
		str+="</li>"
	} 
	$ul.append(str);
})
