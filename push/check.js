const Data = require('../models/data');

const deleteData = require('./delete');

//푸쉬를 보낸 데이터에 대해서 checking을 'old'로 업데이트 해주는 함수
//이 checking을 이용해서 오래된 데이터를 지우거나
//새로운 데이터인지 판별하여 푸쉬알람을 보낼 수 있는 것
const updateCheck = async()=>{
    try{
        //새로 들어온 데이터를 모두 찾는다.
        const result = await Data.findAll({
            where:{
                checking:'new',
            }
        })
        console.log(result);

        //새로운 데이터가 들어왔을 때 삭제
        for(var i=0; i < result.length; i ++){
            await deleteData(result[i].major);
        }
        console.log(result.length);

        //새로 들어온 데이터를 모두 old로 업데이트(푸쉬 알람을 보냈기 때문)
        const update = await Data.update(
            {
            checking:'old'
            },
            {
            where:{
                checking:'new'
            }
        })
        
    }catch(error){
        console.error(error);
        return error;
    }
    
}

module.exports = updateCheck;