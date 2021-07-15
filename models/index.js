const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const Keyword = require('./keyword');
const Student = require('./student');

const db ={};

const sequelize = new Sequelize(config.databse, config.username, config.password,config);
db.sequelize = sequelize;

//db객체를 이용하여 아래 모델들에 접근 가능하게 함
db.Keyword = Keyword;
db.Student = Student;

//각 모델의 static.init메서드를 호출 ->init 실행이 되어야 테이블이 모델로 연결됨
Keyword.init(sequelize);
Student.init(sequelize);

//associate로 설정한 관계 연결함
Keyword.associate(db);
Student.associate(db);

module.exports = db;