require('dotenv').config();

module.exports={
  "development": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,//.env 파일에 비밀번호 설정
    "database": "Notice",//db 이름
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "Notice",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "Notice",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
