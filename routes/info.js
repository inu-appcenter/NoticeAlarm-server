const express = require('express');

const {Keyword,Student} = require('../models');

const router = express.Router();

//앱 초기 사용자 정보 설정
router.post('/',async(req,res,next)=>{
    console.log(req.body.keyword);
    console.log(req.body.keyword.length)
    try{
        //학생정보 생성 ->찾아보고 없으면
        const students = await Student.findOrCreate({
            where:{//찾아보고
                major:req.body.major,
                token:req.body.token,
                keyword:req.body.keyword
            },
            defaluts:{//없으면 defaults 값으로 생성
                major:req.body.major,
                token:req.body.token,
                keyword:req.body.keyword
            }
            
        });
        
        const result = await Student.destroy({
            where:{
                keyword:null
            }
        });
        console.log(result);

        //키워드 테이블에서 찾고 없으면 생성함
        const keyword = await Keyword.findOrCreate({
            where:{//키워드가 있는지 찾아보고
                word:req.body.keyword
            },
            defaults:{//없으면 defaults 값으로 그 키워드를 생성
                word:req.body.keyword
            }
        })
        console.log(keyword);
        res.status(200).json('200');
    }catch(error){
        console.error(error);
        next(error);
    }
})

module.exports = router;