app.get("/getNews",function(req,res){
	var news=[
	"11111111111111111111",
	"22222222222222222222",
	"33333333333333333333",
	"44444444444444444444",
	"55555555555555555555",
	"66666666666666666666"
	]
	var arrnews=[]
	for (var i=0;i<3;i++) {
		var index=parseInt(Math.random()*news.length)
		arrnews.push(news[index])
		news.splice(index,1)
	}
	res.header("Access-Control-Allow-Origin","http://a.jrg.com:8080")
	
	res.send(arrnews)
})
