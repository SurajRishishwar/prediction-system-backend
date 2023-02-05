const nodeMailer= require("../config/nodemailer");


exports.newuserverify = (admin,case_email,case_id,case_person)=>{
    console.log('inside');
    let adminlist=['rishishwarsuraj@gmail.com','guptashub3009@gmail.com','tishagaur2012@gmail.com','riyapal0222@gmail.com','parasarya289@gmail.com'];
    let htmlString=nodeMailer.renderTemplate({admin:adminlist,user_email:case_email,accesstoken:case_id,user_name:case_person},'/userverify/newuser.ejs');


    nodeMailer.transporter.sendMail({
        from:'"Prediction Team" <expengement@gmail.com>',
        to:adminlist,
        subject:`New Case Arrived ID #${case_id}`,
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


exports.userdiseaseconfirm = (case_email,id,dis,case_person)=>{
    

    let htmlString=nodeMailer.renderTemplate({user_email:case_email,id:id,dis:dis,case_person:case_person},'/userverify/diseaseconfrimation.ejs');


    nodeMailer.transporter.sendMail({
        from:'"Prediction Team" <expengement@gmail.com>',
        to:case_email,
        subject:`Diagnosis Report ID #${id}`,
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