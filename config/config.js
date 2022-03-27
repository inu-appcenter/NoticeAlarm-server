require('dotenv').config();

module.exports={
  "development": {
    "username": process.env.SEQUELIZE_USERNAME,
    "password": process.env.SEQUELIZE_PASSWORD,//.env 파일에 비밀번호 설정
    "database": "Notice",//db 이름
    "host": process.env.SEQUELIZE_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.SEQUELIZE_USERNAME,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "Notice",
    "host": process.env.SEQUELIZE_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.SEQUELIZE_USERNAME,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "Notice",
    "host": process.env.SEQUELIZE_HOST,
    "dialect": "mysql"
  }
}
