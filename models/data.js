//크롤링한 데이터를 담아두는 테이블
//따로 정제하지 않고 바로 담아두는 용도
//정제는 다른 테이블에서 쿼리문 사용하여 담을 예정
const Sequelize = require('sequelize');

module.exports = class Data extends Sequelize.Model{
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
            //     allowNull:true,
            //     defaultValue: Sequelize.NOW
            // },
            major:{//전공학과
                type:Sequelize.STRING(10),
                allowNull:true
            },
            checking:{//새로운 데이터인지 확인 유무
                type:Sequelize.STRING(3),
                allowNull:true,
            }

        },{
            sequelize,
            timestamps:false,//생성,수정 칼럼은 없앰
            underscored:false,
            modelName:'Data',
            tableName:'datas',
            paranoid:false,//삭제 컬럼은 없이
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){

    }
};

