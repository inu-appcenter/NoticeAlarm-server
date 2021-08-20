//키워드를 foreignkey로 가지는 학생 테이블
//키워드가 여러개면 중복되어 나타날 수 있음
//키워드를 자유롭게 만든다고 알고있어서 이렇게 함
//키워드를 제한한다면 키워드 별로 하위 테이블을 만드는게 좋을 것 같음
//이렇게 합쳐놔도 전교생 전원이 사용하지 않는다고 판단되어 무리는 없을 것 같음
const Sequelize = require('sequelize');

module.exports = class Student extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            //아이디는 자동으로 설정
            major:{//전공학과
                type:Sequelize.STRING(10),
                allowNull:true
            },
            token:{//파이어베이스 토큰값을 저장함
                type:Sequelize.STRING,
                allowNull:true
            },
            keyword:{//키워드 값
                type:Sequelize.STRING(5),//단어로 하므로 크기를 5로 줬음
                allowNull:true
            }
        },{
            sequelize,
            timestamps:false,//생성,수정 칼럼은 없앰
            underscored:false,
            modelName:'Student',
            tableName:'students',
            paranoid:false,//삭제 컬럼은 없이
            charset:'utf8',
            collate:'utf8_general_ci',
        });
    }
    static associate(db){//키워드 테이블과의 관계 설정

    }
};

