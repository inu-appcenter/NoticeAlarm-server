const puppeteer = require("puppeteer");
const { majorList } = require("./majorLinkList");
const dataFunction = require('../insert/data');
//학과 공지사항 크롤링 함수
//학과 공지사항 크롤링 함수
async function majorCrawling() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //majorList.js 파일에 있는 학과들 링크에 순서대로 접근해서 공지사항 첫페이지 글(제목, 링크, 작성일) 크롤링(해당 학과는 밑에 for문에서 따로 추가)
    for await (let { major, link } of majorList) {
        await page.goto(link);

        //null 값이 포함된 완벽하지않은 크롤링 리스트
        let unperfectedMajorCrawlingList = await page.$$eval("tbody > tr", (firms) =>
            firms.map((firm) => {
                let a = firm.querySelector("td > a");
                let b = firm.querySelector("td:nth-child(4)").innerText;
                if (!b.includes("-")) b = firm.querySelector("td:nth-child(3)").innerText;
                let c = firm.querySelector("td.no");
                if (c.children.length == 0) {
                    return {
                        link: a.href,
                        title: a.innerText,
                        writeTime: b,
                    };
                }
            })
        );

        let majorCrawlingList = [];

        //위의 리스트에서 null값을 제거하고 major를 추가 후, 공지사항 글 10개까지만 포함시키기.
        for (let list of unperfectedMajorCrawlingList) {
            if (list != null) {
                list.major = major;
                majorCrawlingList.push(list);

                if (majorCrawlingList.length == 10) break;
            }
        }
        try{
            dataFunction(majorCrawlingList);
        }catch(error){
            console.error(error);
        }
    }
}
module.exports = majorCrawling;
