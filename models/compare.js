//비교테이블
//새로 크롤링한 데이터를 읽어와서 중복되지 않는 것만 notice에 추가해줄 것
const Sequelize = require('sequelize');

module.exports = class Compare extends Sequelize.Model{
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
            // check:{//새로운 데이터인지 확인 유무
            //     type:Sequelize.STRING(3),
            //     allowNull:true,
            //     defalutValue:'new'
            // }

        },{
            sequelize,
            timestamps:false,//생성,수정 칼럼은 없앰
            underscored:false,
            modelName:'Compare',
            tableName:'compares',
            paranoid:false,//삭제 컬럼은 없이
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){

    }
};

