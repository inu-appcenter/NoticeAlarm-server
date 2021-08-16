const express = require('express');
const Student = require('../models/student')

const router = express.Router();

//키워드 삭제 라우터
router.patch('/',async(req,res,next)=>{
    try{
        //요청 객체에 토큰과 변경할 학과정보로 정보를 업데이트함
        const result = await Student.update({
            major:req.body.major
        },{
            where:{
                token:req.body.token, //해당 학생의 모든 학과정보를 업데이트
            }
        })
        console.log(result);
        if(result >= 1){
            res.status(200).json('Major Update Ok');
        }else{
            res.json('토큰에 해당하는 학생이 없습니다');
        }
    }catch(error){
        console.error(error);
        next(error);
    }
})



module.exports = router;