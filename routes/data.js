const express = require('express');

const {Data} = require('../models');

const router = express.Router();

//크롤링 데이터 설정
router.post('/',async(req,res,next)=>{
    const crawling = req.body;
    console.log('--------------------------------------------------');
    // console.log(crawling);
    if(crawling){//크롤링 데이터 있는지 체크
        console.log(crawling.length)
        for(let list of crawling){
            try{
                //크롤링한 데이터 저장
                //항상 새로운 데이터만 저장할 수 있게 findOrCreate사용
                const data = await Data.findOrCreate({
                    where:{
                        link:list.link,
                        title:list.title,
                        major:list.major,
                    },
                    defaults:{
                        link:list.link,
                        title:list.title,
                        major:list.major,
                        time:list.writeTime,
                        checking:'new'
                    }
                    
                })
            }catch(error){
                console.error(error);
                next(error);
            }
        }
    }
    res.json('ok');

})

module.exports = router;