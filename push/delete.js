const Data = require('../models/data');

//푸쉬 알람을 보낸 후 일정량의 데이터를 유지하기 위한 함수
//해당 학과의 새로운 정보가 들어오면 푸쉬 알람 후 제일 오래된 것을 삭제
const deleteData = async(major)=>{
    try{
        //delete from datas where major ='국어국문학과' order by id asc limit 1;
        //아이디가 작은 것 부터 삭제 -> 크롤링 끝 값 부터 집어넣을 예정
        //먼저 들어온 것이 아이디 값이 작으니 오름차순으로 정렬하여 
        //limit 1로 제일 위에 값만 제거하는 것
        const result = await Data.destroy({
           where:{
               major:major
           },
           order:'id asc',
           limit:1
           
        })
        console.log(result);
    }catch(error){
        console.error(error);
        return error;
    }
    
}

module.exports = deleteData;