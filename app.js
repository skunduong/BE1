console.log("Hello World")
const fs =require('fs');
/*fs.writeFileSync('firstapp.txt','hello World, file system');
fs.test='a';
var content= fs.readFileSync('firstapp.txt','utf-8');
console.log(content)
*/
const express=require ('express');
var app=express();
app.use(express.static(__dirname + '/Public'));
app.get('/',function(req,res){
    res.send('./Public/index.html');
})
app.get('/image/add',function(req,res){
  //Khai bao
    var data = fs.readFileSync("imageData.json",'utf-8');
    var JData = JSON.parse(data);
    var imageInfo = {
      name : req.query.name,
      imageLink : req.query.imagelink,
      description : req.query.description
    }
    JData.push(imageInfo);
    fs.writeFileSync('imageData.json', JSON.stringify(JData));
    res.send('Success');
});
app.get('/image/get', (req, res) => {
    var data = fs.readFileSync("imageData.json",'utf-8');
    var JData = JSON.parse(data);
    var show = "";
    for (var i in JData) {
        show += "<b>Name: "+JData[i].name+"</b></br><b>Description: <b>"+JData[i].description+"</br><img src='"+JData[i].imageLink+"' style='height:200px'/> <br/> <br/>";
    };
    res.send(show);
});
app.listen(6969,function(req,res){
    console.log('app listen on 6969');
})
