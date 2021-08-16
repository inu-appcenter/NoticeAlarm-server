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
            const students = await Student.findOrCreate({
                where:{//찾아보고
                    major:req.body.major,
                    token:req.body.token,
                    keyword:req.body.keyword[i]
                },
                defaluts:{//없으면 defaults 값으로 생성
                    major:req.body.major,
                    token:req.body.token,
                    keyword:req.body.keyword[i]
                }
                
            })
            console.log(students);

            //키워드 테이블에서 찾고 없으면 생성함
            const keyword = await Keyword.findOrCreate({
                where:{//키워드가 있는지 찾아보고
                    word:req.body.keyword[i]
                },
                defaults:{//없으면 defaults 값으로 그 키워드를 생성
                    word:req.body.keyword[i]
                }
            })
            console.log(keyword);
        }
        res.status(200).json('Student,Keyword Ok');
    }catch(error){
        console.error(error);
        next(error);
    }
})

module.exports = router;