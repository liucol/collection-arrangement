app.get('/login',function(req,res){
	var username=req.query.username;
	var passw=req.query.passw;
	var dates;
	
	if(username==='xiaoming'&&passw==='abcd1234') {
		dates="登录成功!";
	}else{
		dates="用户名或密码不正确...";
	}
	console.log(dates);
    res.send(dates);
})
