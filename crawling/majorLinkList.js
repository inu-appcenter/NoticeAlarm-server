const majorList = [
    {
        major: "국어국문학과",
        link: "https://korean.inu.ac.kr/user/indexSub.do?codyMenuSeq=82414&siteId=korean&dum=dum&boardId=42308&page=1&command=list&boardSeq=",
    },
    {
        major: "독어독문학과",
        link: "https://german.inu.ac.kr/user/indexSub.do?codyMenuSeq=66674&siteId=german&dum=dum&boardId=44272&page=1&command=list&boardSeq=",
    },
    {
        major: "일어일문학과",
        link: "https://uijapan.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=unjapan&dum=dum&boardId=40164&page=1&command=list",
    },
    // 로그인 필요
    // {
    //     major: "영어영문학과",
    //     link: "https://ui.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=ui&dum=dum&boardId=42431&page=1&command=list",
    // },
    {
        major: "불어불문학과",
        link: "https://uifrance.inu.ac.kr/user/indexSub.do?codyMenuSeq=140242&siteId=inufrance&dum=dum&boardId=50839&page=1&command=list&boardSeq=",
    },
    {
        major: "중어중국학과",
        link: "https://uichina.inu.ac.kr/user/indexSub.do?codyMenuSeq=2305967&siteId=inuchina&dum=dum&boardId=40295&page=1&command=list&boardSeq=",
    },
    {
        major: "수학과",
        link: "https://math.inu.ac.kr/user/indexSub.do?codyMenuSeq=44529&siteId=isu&dum=dum&boardId=616&page=1&command=list&boardSeq=",
    },
    // 로그인 필요
    // {
    //     major: "물리학과",
    //     link: "https://physics.inu.ac.kr/user/indexSub.do?codyMenuSeq=45164&siteId=physics&dum=dum&boardId=46276&page=1&command=list&boardSeq=",
    // },
    {
        major: "화학과",
        link: "https://chem.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=chem&dum=dum&boardId=46500&page=1&command=list",
    },
    // 로그인 필요
    // {
    //     major: "패션산업학과",
    //     link: "https://uifashion.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=uipashion&dum=dum&boardId=516622&page=1&command=list",
    // },
    {
        major: "해양학과",
        link: "https://marine.inu.ac.kr/user/indexSub.do?codyMenuSeq=45411&siteId=marine&dum=dum&boardId=46022&page=1&command=list&boardSeq=",
    },
    {
        major: "사회복지학과",
        link: "https://socialwelfare.inu.ac.kr/user/indexSub.do?codyMenuSeq=41472&siteId=dsw&dum=dum&boardId=46940&page=1&command=list&boardSeq=",
    },
    {
        major: "신문방송학과",
        link: "https://newdays.inu.ac.kr/user/indexSub.do?codyMenuSeq=41379&siteId=shinbang&dum=dum&boardId=47260&page=1&command=list&boardSeq=",
    },
    {
        major: "문헌정보학과",
        link: "https://lis.inu.ac.kr/user/indexSub.do?codyMenuSeq=41605&siteId=cls&dum=dum&boardId=47308&page=1&command=list&boardSeq=",
    },
    {
        major: "창의인재개발학과",
        link: "https://hrd.inu.ac.kr/user/indexSub.do?codyMenuSeq=41912&siteId=hrd&dum=dum&boardId=47219&page=1&command=list&boardSeq=",
    },
    {
        major: "행정학과",
        link: "https://uipa.inu.ac.kr/user/indexSub.do?codyMenuSeq=7023&siteId=uipa&dum=dum&boardId=46638&page=1&command=list&boardSeq=",
    },
    {
        major: "정치외교학과",
        link: "https://politics.inu.ac.kr/user/indexSub.do?codyMenuSeq=41798&siteId=politics&dum=dum&boardId=47034&page=1&command=list&boardSeq=",
    },
    {
        major: "경제학과",
        link: "https://econ.inu.ac.kr/user/indexSub.do?codyMenuSeq=138678&siteId=econ&dum=dum&boardId=50596&page=1&command=list&boardSeq=",
    },
    {
        major: "무역학부",
        link: "https://trade.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=trade&dum=dum&boardId=40353&page=1&command=list",
    },
    //로그인 필요
    // {
    //     major: "소비자학과",
    //     link: "https://ccs.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=ccs&dum=dum&boardId=46583&page=1&command=list",
    // },
    // 로그인 필요
    // { major: "기계공학과", link: "https://www.inu.ac.kr/user/boardList.do?boardId=49913&NewIpsi=Y" },
    {
        major: "메카트로닉스공학",
        link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=118682&siteId=meca&dum=dum&boardId=48749&page=1&command=list&boardSeq=",
    },
    {
        major: "전기공학과",
        link: "https://elec.inu.ac.kr/user/indexSub.do?codyMenuSeq=40153&siteId=elec&dum=dum&boardId=47653&page=1&command=list&boardSeq=",
    },
    //로그인 필요
    // {
    //     major: "전자공학과",
    //     link: "https://ee.inu.ac.kr/user/indexSub.do?codyMenuSeq=46244&siteId=electron&dum=dum&boardId=47828&page=1&command=list&boardSeq=",
    // },
    {
        major: "산업경영공학과",
        link: "https://ime.inu.ac.kr/user/indexSub.do?codyMenuSeq=104720&siteId=ime&dum=dum&boardId=47884&page=1&command=list&boardSeq=",
    },
    // 로그인 필요
    // { major: "신소재공학과", link: "https://mse.inu.ac.kr/user/indexMain.do?siteId=mse" },
    {
        major: "안전공학과",
        link: "https://safety.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=safety&dum=dum&boardId=50121&page=1&command=list",
    },
    //로그인 필요
    // {
    //     major: "에너지화학공학과",
    //     link: "https://echeme.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=energy&dum=dum&boardId=336573&page=1&command=list",
    // },
    { major: "컴퓨터공학과", link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=99317&siteId=isis" },
    {
        major: "정보통신공학과",
        link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=41719&siteId=ite&dum=dum&boardId=45113&page=1&command=list&boardSeq=",
        //link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=993092&siteId=ite&dum=dum&boardId=415835&page=1&command=list&boardSeq=",
    },
    {
        major: "임베디드시스템공학과",
        link: "https://ese.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=ese&dum=dum&boardId=47876&page=1&command=list",
    },
    { major: "경영학부", link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=138022&siteId=management" },
    { major: "세무회계학과", link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=138238&siteId=tax" },
    {
        major: "한국화전공",
        link: "https://finearts.inu.ac.kr/user/indexSub.do?codyMenuSeq=91965&siteId=finearts&dum=dum&boardId=43019&page=1&command=list&boardSeq=",
    },
    //조형예술학부
    {
        major: "서양화전공",
        link: "https://finearts.inu.ac.kr/user/indexSub.do?codyMenuSeq=91965&siteId=finearts&dum=dum&boardId=43019&page=1&command=list&boardSeq=",
    },
    //학과 공지 로그인 필요
    // {
    //     major: "디자인학부",
    //     link: "https://design.inu.ac.kr/user/indexSub.do?codyMenuSeq=95050&siteId=design&dum=dum&boardId=198369&page=1&command=list&boardSeq=",
    // },
    //공지사항이 없음...
    // { major: "공연예술학과", link: "https://uipa10.inu.ac.kr/user/indexMain.do?siteId=uipa10" },
    {
        major: "체육학부",
        link: "https://inupe.inu.ac.kr/user/indexSub.do?codyMenuSeq=95417&siteId=inupe&dum=dum&boardId=44037&page=1&command=list&boardSeq=",
    },
    { major: "운동건강학부", link: "https://hlkn.inu.ac.kr/user/indexSub.do?codyMenuSeq=103387&siteId=uiex" },
    {
        major: "국어교육과",
        link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=6584&siteId=edukorean&dum=dum&boardId=198591&page=1&command=list&boardSeq=",
    },
    {
        major: "영어교육과",
        link: "https://eduenglish.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=eduenglish&dum=dum&boardId=42668&page=1&command=list",
    },
    {
        major: "일어교육과",
        link: "https://edujapanese.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=edujapanese&dum=dum&boardId=42765&page=1&command=list",
    },
    {
        major: "수학교육과",
        link: "https://edumath.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=edumath&dum=dum&boardId=42875&page=1&command=list",
    },
    {
        major: "체육교육과",
        link: "https://www.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=eduphysical&dum=dum&boardId=43071&page=1&command=list",
    },
    {
        major: "유아교육과",
        link: "https://ece.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=ece&dum=dum&boardId=43337&page=1&command=list",
    },
    {
        major: "역사교육과",
        link: "https://eduhistory.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=eduhistory&dum=dum&boardId=43466&page=1&command=list",
    },
    {
        major: "윤리교육과",
        link: "https://eduethics.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=eduethics&dum=dum&boardId=46734&page=1&command=list",
    },
    {
        major: "도시행정학과",
        link: "https://urban.inu.ac.kr/user/indexSub.do?framePath=unknownboard&siteId=urban&dum=dum&boardId=47082&page=1&command=list&categoryId=&categoryDepth=",
    },
    //도시환경공학부
    {
        major: "환경공학전공",
        link: "https://civil.inu.ac.kr/user/indexSub.do?codyMenuSeq=42045&siteId=civil&dum=dum&boardId=46855&page=1&command=list&boardSeq=",
    },
    {
        major: "환경공학과",
        link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=42281&siteId=et&dum=dum&boardId=46783&page=1&command=list&boardSeq=",
    },
    {
        major: "도시공학과",
        link: "https://www.inu.ac.kr/user/indexSub.do?codyMenuSeq=44283&siteId=ucv&dum=dum&boardId=43793&page=1&command=list&boardSeq=",
    },
    {
        major: "건축학과",
        link: "https://archi.inu.ac.kr/user/indexSub.do?codyMenuSeq=120462&siteId=archi&dum=dum&boardId=48974&page=1&command=list&boardSeq=",
    },
    {
        major: "건축공학과",
        link: "https://archi.inu.ac.kr/user/indexSub.do?codyMenuSeq=120462&siteId=archi&dum=dum&boardId=48974&page=1&command=list&boardSeq=",
    },
    {
        major: "도시설계",
        link: "https://archi.inu.ac.kr/user/indexSub.do?codyMenuSeq=120462&siteId=archi&dum=dum&boardId=48974&page=1&command=list&boardSeq=",
    },
    {
        major: "생명과학",
        link: "https://life.inu.ac.kr/user/indexSub.do?codyMenuSeq=107446&siteId=life&dum=dum&boardId=46574&page=1&command=list&boardSeq=",
    },
    {
        major: "분자의생명",
        link: "https://life.inu.ac.kr/user/indexSub.do?codyMenuSeq=107446&siteId=life&dum=dum&boardId=46574&page=1&command=list&boardSeq=",
    },
    {
        major: "생명공학",
        link: "https://bioeng.inu.ac.kr/user/indexSub.do?codyMenuSeq=108394&siteId=engineeringlife&dum=dum&boardId=198419&page=1&command=list&boardSeq=",
    },
    {
        major: "나노바이오",
        link: "https://nanobio.inu.ac.kr/user/indexSub.do?codyMenuSeq=2321971&siteId=nano&dum=dum&boardId=48234&page=1&command=list&boardSeq=",
    },
    { major: "동북아통상전공", link: "https://sonas.inu.ac.kr/user/indexSub.do?codyMenuSeq=138456&siteId=sonas" },
    { major: "한국통상전공", link: "https://sonas.inu.ac.kr/user/indexSub.do?codyMenuSeq=138456&siteId=sonas" },
];

module.exports = { majorList };
