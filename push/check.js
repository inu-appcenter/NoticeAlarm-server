const Data = require('../models/data');

//푸쉬를 보낸 데이터에 대해서 checking을 'old'로 업데이트 해주는 함수
//이 checking을 이용해서 오래된 데이터를 지우거나
//새로운 데이터인지 판별하여 푸쉬알람을 보낼 수 있는 것
const updateCheck = async(resultId)=>{
    try{
        const result = await Data.update({
            checking:'old',
        },
        {
            where:{
                id:resultId,
            }
        })
        console.log(result);
    }catch(error){
        console.error(error);
        return error;
    }
    
}

module.exports = updateCheck;