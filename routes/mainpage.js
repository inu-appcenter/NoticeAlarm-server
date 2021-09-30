const express = require('express');
const {sequelize} = require('../models');
const {Data,Student} = require('../models');

const router = express.Router();

//키워드별 최근 공지 하나 가져오는 것(메인화면에 필요)
//토큰값을 보내주어야 함. -> 토큰으로 해당 학생의 키워드를 찾음
//학과값을 보내주어야 함. -> 학과로 해당 학과의 공지사항을 찾음
router.post('/',async(req,res,next)=>{
    try{
        const keywords = await Student.findAll({
            attributes:["keyword"],
            where:{
                token: req.body.token,
            }
        });
        let datas = [];
        for(keyword of keywords){
            //각 키워드별로 해당학과의 공지사항 하나를 추출함
            const [notice,metadata] = await sequelize.query(
                `select datas.link, datas.title from datas 
                where major = '${req.body.major}' and datas.title like concat('%','${keyword.keyword}','%')
                order by id asc limit 1;`
            )
            
            notice[0].keyword = keyword.keyword; //응답에 키워드 값 추가
            datas.push(notice[0]);//대괄호 없애려고 가장 첫 값에 접근해서 푸쉬
        }
        res.status('200').json(datas);
    }catch(error){
        console.error(error);
        next(error);
    }
    
})

module.exports = router;