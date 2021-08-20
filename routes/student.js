const express = require('express');
const Student = require('../models/student');
const router = express.Router();

//학생 정보를 저장하는 라우터. 초기 세팅을 위해 만듦
router.post('/',async(req,res,next)=>{
    try{
        const result = await Student.create({
            token:req.body.token,
            major:req.body.major
        })
        res.status(200).json('200');
    }catch(error){
        console.error(error);
        next(error);
    }
})

module.exports = router;