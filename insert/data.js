const Data = require('../models/data');

//처음에 함수로 했는데 잘 안돼서 우선 axios로 라우터로 요청 보냈었음
//그러다 우선 해결할 것들 해결하고나서 다시 함수화 시켜서 테스트 하니
//잘 동작하는 것 같아 이걸로 사용 예정임
const dataFunction = async(crawling)=>{
    // const crawling = req.body;
    console.log('--------------------------------------------------');
    // console.log(crawling);
    if(crawling){//크롤링 데이터 있는지 체크
        console.log(crawling.length);
        // console.log(crawling);
        // console.log(crawling[0].link);
        // console.log(crawling[0].title);
        for(var i = crawling.length -1; i >= 0; i --){
            try{
                //크롤링한 데이터 저장
                //항상 새로운 데이터만 저장할 수 있게 findOrCreate사용
                const data = await Data.findOrCreate({
                    where:{
                        link:crawling[i].link,
                        title:crawling[i].title,
                        major:crawling[i].major,
                    },
                    defaults:{
                        link:crawling[i].link,
                        title:crawling[i].title,
                        major:crawling[i].major,
                        time:crawling[i].writeTime,
                        checking:'new'
                    }
                    
                })
                
            }catch(error){
                console.error(error);
                next(error);
            }
        }
    }
}
module.exports = dataFunction;