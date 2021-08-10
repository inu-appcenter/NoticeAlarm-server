const puppeteer = require("puppeteer");
const { majorList } = require("./majorLinkList");
const axios = require('axios')
const dataFunction = require('../insert/data');
//학과 공지사항 크롤링 함수
async function majorCrawling() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //majorList.js 파일에 있는 학과들 링크에 순서대로 접근해서 공지사항 첫페이지 글(제목, 링크, 작성일) 크롤링(해당 학과는 밑에 for문에서 따로 추가)
    for await (let { major, link } of majorList) {
        await page.goto(link);

        let majorCrawlingList = await page.$$eval("tbody > tr", (firms) =>
            firms.map((firm) => {
                let a = firm.querySelector("td > a");
                let b = firm.querySelector("td:nth-child(4)").innerText;
                if (!b.includes("-")) b = firm.querySelector("td:nth-child(3)").innerText;
                return {
                    link: a.href,
                    title: a.innerText,
                    writeTime: b,
                };
            })
        );

        // 크롤링한 객체에 해당 학과 키 밸류 추가
        for (let list of majorCrawlingList) {
            list.major = major;
        }
        // console.log(majorCrawlingList);
        // const data = majorCrawlingList
        // try{
        //     await axios.post('http://localhost:8001/data',majorCrawlingList)
        // }catch(error){
        //     console.error(error);
        // }
        try{
            dataFunction(majorCrawlingList);
        }catch(error){
            console.error(error);
        }
    }
}
//();
module.exports = majorCrawling;
