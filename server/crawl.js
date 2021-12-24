const axios = require("axios");
const cheerio = require("cheerio");
const { range } = require("express/lib/request");
var fs = require('fs');
const db=require('./config/db');
var request = require('request')

//public/images폴더에 크롤링이미지 저장
var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
      request(uri).pipe(fs.createWriteStream("../client/public/images/"+filename)).on('close', callback);
    });
  };
const getHTML = async()=>{
    try{
        return await axios.get("https://www.animal.go.kr/front/awtis/protection/protectionList.do")
    }catch(err){
        console.log(err);
    }
}
const parsing = async()=>{
    const html = await getHTML();
    const $ = cheerio.load(html.data);
    const $animallist =  $(".list li");
    let animals=[];
    var n=1
    $animallist.each((idx,node)=>{
        
        var date= $(node).find('dd:eq(1)').text()
        var kind= $(node).find('dd:eq(2)').text()
        var gender= $(node).find('dd:eq(3)').text()
        var place= $(node).find('dd:eq(4)').text()
        img =  $(node).find(".thumbnail a img").attr("src")
        
        if (idx>0){
            animals.push({
                id:idx,
                date: date,
                kind: kind,
                gender:gender,
                place: place,
                img:  img
                
            })
        }        
        
    })

    animals.map(data=>{
        download("https://www.animal.go.kr/"+data.img, 'img'+n+'.jpg', function(){
            console.log('done');
            console.log(data.img);
            
       });
       var sql = "INSERT INTO CrawlData(id,date,kind,gender,place,img) VALUES(?,?,?,?,?,?)"; 
       var param = [data.id,data.date,data.kind,data.gender,data.place,"img"+data.id+".jpg"];
       db.query(sql,param,function(err,result) {
        if(err){
          console.log(err);
        }else{
          console.log("inserted");
        }
      });
       n=n+1;
    })
    console.log(animals)
}

parsing();