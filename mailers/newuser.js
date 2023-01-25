const nodeMailer= require("../config/nodemailer");


exports.newuserverify = (admin,case_email,case_id,case_person)=>{
    console.log('inside');

    let htmlString=nodeMailer.renderTemplate({admin:admin,user_email:case_email,accesstoken:case_id,user_name:case_person},'/userverify/newuser.ejs');


    nodeMailer.transporter.sendMail({
        from:'"Prediction Team" <expengement@gmail.com>',
        to:admin,
        subject:'New Case Confirmation',
        html:htmlString,
       
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('mail delivered',info);
        return;
    });
}


exports.userotpverification = (case_email,otp,case_person)=>{
    

    let htmlString=nodeMailer.renderTemplate({user_email:case_email,otp:otp,user_name:case_person},'/userverify/verifyuser.ejs');


    nodeMailer.transporter.sendMail({
        from:'"Prediction Team" <expengement@gmail.com>',
        to:case_email,
        subject:'OTP for Verification',
        html:htmlString,
       
    },(err,info)=>{
        if(err){
            console.log('error in sending mail',err);
            return;
        }
        console.log('mail delivered',info);
        return;
    });
}