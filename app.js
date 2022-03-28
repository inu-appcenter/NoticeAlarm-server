const express = require('express');
const cookieparser = require('cookie-parser');
const morgan =require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const schedule = require('node-schedule');//특정 시간에 알림을 보내기 위한 스케줄 모듈
const nunjucks = require('nunjucks')

dotenv.config();


//라우터 연결
const infoRouter = require('./routes/info');
const deleteRouter = require('./routes/delete');
const updateRouter = require('./routes/update');
const studentRouter = require('./routes/student');
const mainpageRouter = require('./routes/mainpage');
const listRouter = require('./routes/list');
const popularRouter = require('./routes/popular');

const {sequelize} = require('./models');//db모델 서버에 연결하기 위해서 사용함

const app = express();
app.set('port', process.env.PORT || 8001);

//set view
app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
    watch:true,
});

sequelize.sync({force:false})
    .then(()=>{
        console.log('데이터베이스 연결 성공');
    })
    .catch((err)=>{
        console.error(err);
    });
//index.js에서 db를 불러와서 sync메서드를 사용해 서버 실행 시 MYSQL과 연동되는 것
//force:false 옵션을 true로 설정하면 서버 실행 시마다 테이블을 재생성함
//테이블 잘못 만든 경우에 true로 설정함

app.use(morgan('dev'));//요청과 응답에 대한 정보를 콘솔에 기록하기위해 morgan사용
//dev 외에 combined(배포할 때 많이 사용),common,short,tiny 등이 있음
app.use(express.static(path.join(__dirname,'public')));
//static 미들웨어는 정적인 파일들을 제공하는 라우터 역할
//기본제공 되므로 express객체 안에서 꺼내서 사용
//app.use('요청경로',express.static('실제경로'));

// const{swaggerUi, specs} = require('./swagger/swagger');
// app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(specs));
//api명세를 위해 스웨거를 사용함


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieparser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    },
}));




//라우터 분기
app.use('/info',infoRouter);
app.use('/delete',deleteRouter);
app.use('/update',updateRouter);
app.use('/student',studentRouter);
app.use('/mainpage',mainpageRouter);
app.use('/list',listRouter);
app.use('/popular',popularRouter);

const dataFunction = require('./crawling/crawling');
//특정 시간에 알림
const storeAlarm1 = schedule.scheduleJob('00 00 00 * * *',()=>{
    dataFunction();
});

const matchFunction = require('./push/compare');
const pushAlarm1 = schedule.scheduleJob('00 00 01 * * *',()=>{
    matchFunction();
});

const storeAlarm2 = schedule.scheduleJob('00 30 09 * * *',()=>{
    dataFunction();
});

const pushAlarm2 = schedule.scheduleJob('00 00 10 * * *',()=>{
    matchFunction();
});
//schedule.scheduleJob('* * * * * *',콜백함수)
//위의 *은 앞에서부터 초,분,시간,일,달 그리고 마지막 *은 일주일중에 하루를 고르는 것
//하루에 하나씩 보낼거면 초,분,시간만 설정하고 나머지 *로하면 매일 작동할 것
//alarm 함수 안에 동작할 것을 넣으면 됨

//404 error
app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url}라우터가 없습니다.`);
    error.status = 404;
    next(error);

});

//500 error
app.use((err, req, res, next) => {
    console.log(err.status)
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production'? err:{};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기 중');
});
