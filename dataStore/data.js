const {Data} = require('../models');

const storeFunction =async()=>{
    console.log('check1');
    if(crawling){//크롤링 데이터 있는지 체크
        console.log('check2');
        for(var i; i<crawling.length; i++){
            try{
                //크롤링한 데이터 저장
                const data = await Data.create({
                    link:crawling[i].link,
                    title:crawling[i].title,
                    major:crawling[i].major,
                })
            }catch(error){
                console.error(error)
            }
        }
    }
}


// exports.module =store = async(crawling,next)=>{
//     if(crawling){//크롤링 데이터 있는지 체크
//         for(var i; i<crawling.length; i++){
//             try{
//                 //크롤링한 데이터 저장
//                 const data = await Data.create({
//                     link:crawling[i].link,
//                     title:crawling[i].title,
//                     major:crawling[i].major,
//                 })
//             }catch(error){
//                 console.error(error)
//                 next(error)
//             }
//         }
//     }
// }
// exports.module = store;
exports.module = storeFunction;