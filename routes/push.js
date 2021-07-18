const express = require('express');
const admin = require("firebase-admin");

//파이어베이스 프로젝트에서 만든 키값이 있음
var serviceAccount = require("../key/noticealarm-2271d-firebase-adminsdk-j9f5e-bddea59dd0.json");
const router = express.Router();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//get방식으로 fcm서버에 요청을 보냄
router.get('/push_send',(req,res,next)=>{
    const target_token ='adsf';

    const message = {
        data:{
            title:'test title',
            body:'is data ok?',
        },
        token:target_token,
    }

    admin.messaging().send(message)
        .then((response)=>{
            console.log('send message successfully:',response)
        })
        .catch((error)=>{
            console.log('Error sending message:',error)
            next(error);
        })
})

module.exports = router;