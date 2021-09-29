const express = require('express');
const {sequelize} = require('../models');

const router = express.Router();

//인기 키워드를 알려주는 라우터
//학생들이 지정한 키워드들의 개수를 세서 많은 것 순으로 정렬하여 5개까지 보여줌
router.get('/',async(req,res,next) => {
    try{
        const [result,metadata] = await sequelize.query(
            `select keyword, count(*) from students 
            group by keyword order by count(*) DESC limit 5;`
        )
        res.json(result);
    }catch(error){
        console.error(error);
        next(error);
    }
})

module.exports = router;