// const express = require('express');
// const admin = require("firebase-admin");

// //파이어베이스 프로젝트에서 만든 키값이 있음
// var serviceAccount = require("../key/noticealarm-2271d-firebase-adminsdk-j9f5e-bddea59dd0.json");
// const router = express.Router();

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// //get방식으로 fcm서버에 요청을 보냄
// router.get('/push_send',(req,res,next)=>{
//     const target_token ='adsf';

//     const message = {
//         data:{//여기에 데이터를 담아야 클라측에서 볼 수 있음
//             title:'test title',
//             body:'is data ok?',
//         },
//         token:target_token,
//         notification:{//푸쉬알람이 보이는 형태 재난문자처럼
//             title:'notification title',
//             body:'notification body',
//         }
//     }

//     admin.messaging().send(message)
//         .then((response)=>{
//             console.log('send message successfully:',response)
//         })
//         .catch((error)=>{
//             console.log('Error sending message:',error)
//             next(error);
//         })
// })

// //여러기기에 메세지 전송 ->sendMulticast(message)
// // admin.messaging().sendMulticast(message)
// //   .then((response) => {
// //     console.log(response.successCount + ' messages were sent successfully');
// //   });

// //푸쉬 알림이 실패하는 경우가 좀 있다고 함. 그 때 아래처럼 실패한 것들 받아서 다시 배열에 넣어주는 식으로
// // admin.messaging().sendMulticast(message)
// //   .then((response) => {
// //     if (response.failureCount > 0) {
// //       const failedTokens = [];
// //       response.responses.forEach((resp, idx) => {
// //         if (!resp.success) {
// //           failedTokens.push(registrationTokens[idx]);
// //         }
// //       });
// //       console.log('List of tokens that caused failures: ' + failedTokens);
// //     }
// //   });

// module.exports = router;