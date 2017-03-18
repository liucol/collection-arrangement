app.get("/loadMore",function(req,res){
	var count=req.query.count;
	var len=req.query.length;
	var dates=[];
	
	for (var i=0;i<len;i++) {
		dates.push("内容"+(parseInt(count)+i));
	}
	setTimeout(function(){
		res.send(dates)
	},2000)
})
