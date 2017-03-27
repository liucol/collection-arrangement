/**
 * Created by yangliu on 2017/3/27.
 */
app.get("/loadmore",function(req,res){
    var index=req.query.dat
    console.log(index)
    var start=index*3
    var end=index*3+3
    var result=[]
    for(var i=start;i<end;i++){
        result.push(i)
    }
    res.send(result)
    })