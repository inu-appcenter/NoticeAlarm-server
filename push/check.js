const Data = require('../models/data');

const deleteData = require('./delete');

//푸쉬를 보낸 데이터에 대해서 checking을 'old'로 업데이트 해주는 함수
//이 checking을 이용해서 오래된 데이터를 지우거나
//새로운 데이터인지 판별하여 푸쉬알람을 보낼 수 있는 것
const updateCheck = async(resultId,major)=>{
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

        //업데이트 됐을 시에만 삭제함
        //업데이트가 됐다는 말은 new -> old로 바뀌었단 말이고
        //새로운 데이터가 들어왔단 말
        if(result == 1){
            await deleteData(major);
        }
    }catch(error){
        console.error(error);
        return error;
    }
    
}

module.exports = updateCheck;