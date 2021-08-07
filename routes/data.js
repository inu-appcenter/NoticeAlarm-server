const express = require('express');

const {Data} = require('../models');

const router = express.Router();

//앱 초기 사용자 정보 설정
router.post('/',async(req,res,next)=>{
    console.log('check1');
    const crawling = req.body;
    console.log('--------------------------------------------------');
    // console.log(crawling);
    if(crawling){//크롤링 데이터 있는지 체크
        console.log('check2');
        console.log(crawling.length)
        // for(let list of crawling){
        //     try{
        //         //크롤링한 데이터 저장
        //         const data = await Data.create({
        //             link:list.link,
        //             title:list.title,
        //             major:list.major,
        //         })
        //     }catch(error){
        //         console.error(error)
        //     }
        //     // console.log(list.major)
        //     // console.log(list.title)
        // }
    }
    res.json('ok');

})

module.exports = router;