const admin = require("firebase-admin");
const request = require("request");
//파이어베이스 프로젝트에서 만든 키값이 있음
var serviceAccount = require("../key/noticealarm-2271d-firebase-adminsdk-j9f5e-bddea59dd0.json");


//파이어베이스 연결
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

//푸쉬 알람 전송을 담당하는 함수
const pushFunction = async(pushData,link,title,next)=>{
    const target_token =pushData.token;
    
    console.log(link);
    console.log(title);
    console.log(pushData.token);
    console.log(pushData.keyword);

    const options = {
        uri:'https://fcm.googleapis.com/fcm/send', 
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "key=AAAAf984HVU:APA91bFHGL8D-Z7ttM2Yb7Tpt42nV_3t6Woo5Ehm9LIEP5qUMXxMqDlRwrt21VFZJwJlDnSaLvjJb2MoNWAb0Q8aUpJZzZnmkrQ60S1z0d1Vixb72XWOYpRFdd_EHnmNsPLvFueAKTbS"
        },
        json: {
            'to': target_token,
            "priority" : "high",
            "data" : {
                "title" : "#키워드",
                "body" : "#키워드 알람이 도착했습니다.",
                "link" : link,
                "name" : title,
                "keyword" : pushData.keyword,
            },
            notification:{//푸쉬알람이 보이는 형태 재난문자처럼
                        title:'#키워드',
                        body:'#키워드 알림이 왔습니다'
                    }
        }
      }
    request.post(options)
    // const message = {
    //     data:{//여기에 데이터를 담아야 클라측에서 볼 수 있음
    //         title:title,
    //         body:link,
    //         keyword:pushData.keyword
    //     },
    //     token:target_token,
    //     notification:{//푸쉬알람이 보이는 형태 재난문자처럼
    //         title:'#키워드',
    //         body:'#키워드 알림이 왔습니다'
    //     }
    // }

    // admin.messaging().send(message)
    //     .then((response)=>{
    //         console.log('send message successfully:',response)
    //     })
    //     .catch((error)=>{
    //         console.log('Error sending message:',error)
    //     })
}
  
  
  //여러기기에 메세지 전송 ->sendMulticast(message)
  // admin.messaging().sendMulticast(message)
  //   .then((response) => {
  //     console.log(response.successCount + ' messages were sent successfully');
  //   });
  
  //푸쉬 알림이 실패하는 경우가 좀 있다고 함. 그 때 아래처럼 실패한 것들 받아서 다시 배열에 넣어주는 식으로
  // admin.messaging().sendMulticast(message)
  //   .then((response) => {
  //     if (response.failureCount > 0) {
  //       const failedTokens = [];
  //       response.responses.forEach((resp, idx) => {
  //         if (!resp.success) {
  //           failedTokens.push(registrationTokens[idx]);
  //         }
  //       });
  //       console.log('List of tokens that caused failures: ' + failedTokens);
  //     }
  //   });
  
  module.exports = pushFunction;