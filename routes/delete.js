const express = require('express');
const Student = require('../models/student')

const router = express.Router();

//키워드 삭제 라우터
router.delete('/',async(req,res,next)=>{
    try{
        const result = await Student.destroy({
            where:{
                token:req.body.token,
                keyword:req.body.keyword
            }
        })
        console.log(result);
        if(result == 1){
            res.json('Keyword delete Ok');
        }else{
            res.json('해당 키워드가 없습니다');
        }
    }catch(error){
        console.error(error);
        next(error);
    }
})



module.exports = router;