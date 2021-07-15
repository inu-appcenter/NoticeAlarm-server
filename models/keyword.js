//키워드 테이블
const Sequelize = require('sequelize');

module.exports = class Keyword extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            //아이디는 자동으로 설정
            word:{//키워드 값 저장 키워드는 단어로 할 것이기 떄문에 길이는 5로지정
                type:Sequelize.STRING(5),
                allowNull:true,
            }
        },{
            sequelize,
            timestamps:false,//생성,수정 칼럼 생성x
            underscored:false,
            modelName:'Keyword',
            tableName:'keywords',
            paranoid:false,//삭제 컬럼은 없이
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){
        
    }
};

