const {sequelize} = require('../models');
const Student = require('../models/student')
//푸쉬관련 작업을 하는 함수 pushFunction
const pushFunction = require('./push');

//새로운 데이터를 푸쉬작업 후에 새로운 데이터가 아님을 알려주기위해
//checking 컬럼을 old로 업데이트 해주는 함수 updateCheck
const updateCheck = require('./check');

//새로운 데이터가 들어왔을 때 기존의 오래된 데이터를 삭제하는 함수
const deleteData =require('./delete');


//키워드로 먼저 선별작업을 해주는 함수
const matching = async(next)=>{
    try{
        //키워드 테이블과 크롤링 데이터를 비교함
        //비교후 제목에 키워드가 포함되는 데이터만 읽어옴 like,concat 이용
        const [result,metadata] = await sequelize.query(
            `select keywords.word as keyword,datas.* 
            from keywords,datas 
            where checking = 'new' and datas.title like concat('%',keywords.word,'%');`
        )
        // if(result){
        //     console.log(result[0]);
        // }
        // console.log(result);
        // console.log(result.length);

        
        // console.log(result.length);

        //비교해서 온 데이터들(푸쉬 알람 보낼 수 있는 데이터들)이 있으면
        if(result){
            //각 row만큼 반복시킴
            for(var i = 0; i < result.length; i++){
                //각 row별로 학과,키워드가 같은 학생들을 읽어옴
                const students = await Student.findAll({
                    where:{
                        major:result[i].major,
                        keyword:result[i].keyword
                    }
                })

                //해당 제목에 키워드 설정한 학생이 있다면
                if(students){
                    //학생들의 수만큼 반복
                    for(var j = 0; j < students.length; j++){                        
                        //위에서 원하는 데이터만 선별작업을 완료하고 이제 푸쉬 알람을 보내는 것
                        //학생 정보(토큰,키워드)와 새로푸쉬해야하는 정보의 링크, 제목을 같이 담아서 보냄
                        //하나하나 전부 푸쉬 알람을 보내는 것
                        // await pushFunction(students[j],result[i].link,result[i].title);
                    }
                }

                //푸쉬를 보낸 데이터의 checking을 'old'로 바꿔야 함
                //아래 함수는 old로 업데이트를 해주는 함수임
                await updateCheck();

            }
        }
        
        
    }catch(error){
        console.error(error);
        next(error);
    }  
}

module.exports = matching;