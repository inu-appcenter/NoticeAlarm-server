const express = require('express');
const {sequelize} = require('../models');

const router = express.Router();

//키워드별 공지 리스트를 가져오는 라우터
//키워드정보 필요, 학과 정보 필요
router.post('/',async(req,res,next)=>{
    try{
        const [result,metadata] = await sequelize.query(
            `select datas.link, datas.title, datas.time from datas 
            where major = '${req.body.major}' and datas.title like concat('%','${req.body.keyword}','%');`
        )
        res.status('200').json(result);
    }catch(error){
        console.error(error);
        next(error);
    }
});

module.exports = router;