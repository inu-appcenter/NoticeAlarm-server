//크롤링한 데이터를 키워드로 정제한 테이블
//알림이 가야하는 테이블임
const Sequelize = require('sequelize');

module.exports = class Notice extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            //아이디는 자동으로 설정
            link:{//해당 공지사항 주소
                type:Sequelize.STRING,
                allowNull:true
            },
            title:{//해당 공지사항 제목
                type:Sequelize.STRING,
                allowNull:true
            },
            // wirteTime:{//해당 공지사항 등록 시간
            //     type:Sequelize.DATE,
            //     allowNull:true
            // },
            token:{//푸쉬알람을 보내야하는 토큰값
                type:Sequelize.STRING,
                allowNull:true
            },
            major:{//전공학과
                type:Sequelize.STRING(10),
                allowNull:true
            },
            keyword:{//키워드
                type:Sequelize.STRING(5),
                allowNull:true
            }
        },{
            sequelize,
            timestamps:false,//생성,수정 칼럼은 없앰
            underscored:false,
            modelName:'Notice',
            tableName:'notices',
            paranoid:false,//삭제 컬럼은 없이
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){

    }
};

