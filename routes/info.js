const express = require('express');

const {Keyword,Student} = require('../models');

const router = express.Router();

//앱 초기 사용자 정보 설정
router.post('/',async(req,res,next)=>{
    console.log(req.body.keyword);
    console.log(req.body.keyword.length)
    //리스트로 보낸 키워드 길이
    const length = req.body.keyword.length;
    try{
        for(var i = 0; i< length; i++){//키워드 길이만큼 로우 생성
            const students = await Student.create({
                number:req.body.number,
                major:req.body.major,
                token:req.body.token,
                keyword:req.body.keyword[i]
            })
            console.log(students);
        }
        res.json('ok');
    }catch(error){
        console.error(error);
        next(error);
    }

})

module.exports = router;