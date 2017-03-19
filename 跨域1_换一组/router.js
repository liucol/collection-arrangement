app.get('/readnew',function(req,res){
	var fn=req.query.callback;
	var news=[
		"xxxxxxxxxxxxxxxxxx",
		"yyyyyyyyyyyyyyyyyy",
		"zzzzzzzzzzzzzzzzzz",
		"aaaaaaaaaaaaaaaaaa",
		"bbbbbbbbbbbbbbbbbb",
		"cccccccccccccccccc"
	]
	var arr=[];
	for (var i=0;i<3;i++) {
		var dates=parseInt(Math.random()*news.length)
		arr.push(news[dates])
		//把取出的这条新闻在原json数组中删除，防止再次取到
		news.splice(dates,1)
	}
	res.send(fn+'('+JSON.stringify(arr)+')')
})