const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const port=8000||process.env.port;
const app = express();
const linkmail= require('./mailers/newuser');
const mysql=require("mysql");
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection
const mysqlconnection = mysql.createPool({

    
    host : "sql.freedb.tech",   
    port : 3306,
    database : "freedb_patients",
    user : "freedb_suraj-admin",
    password : "&RW5uB3V7x6FngV",
    connectionLimit: 20,
    multipleStatements:true
});
mysqlconnection.getConnection((err)=>{
    if(err){
        console.log('Not Connected',err);
    }
    else{
        console.log('ho gya hogya');
    }
});

app.post('/store-data',(req, res) => {
    console.log("value is ",Number(req.body.itching));
    let data = {case_person: req.body.case_person,case_email: req.body.case_email};
    let sql = "INSERT INTO patients_details SET ?";
    let query = mysqlconnection.query(sql, data,(err, results) => {
      console.log(results.insertId);
      let diseases={
        itching: req.body.itching ,
        skin_rash: req.body.skin_rash   ,
        nodal_skin_eruptions: req.body.nodal_skin_eruptions ,
        continuous_sneezing: req.body.continuous_sneezing  ,
        shivering: req.body.shivering   ,
        chills: req.body.chills   ,
        joint_pain: req.body.joint_pain  ,
        stomach_pain: req.body.stomach_pain   ,
        acidity: req.body.acidity 	 ,
        ulcers_on_tongue: req.body.ulcers_on_tongue  ,
        muscle_wasting: req.body.muscle_wasting  ,
        vomiting: req.body.vomiting  ,
        burning_micturition: req.body.burning_micturition  ,
        spotting_urination: req.body.spotting_urination  ,
        fatigue: req.body.fatigue  ,
        weight_gain : req.body.weight_gain  ,
        anxiety: req.body.anxiety 	,
        cold_hands_and_feets : req.body.cold_hands_and_feets  ,
        mood_swings : req.body.mood_swings  ,
        weight_loss: req.body.weight_loss  ,
        restlessness: req.body.restlessness ,
        lethargy  : req.body.lethargy ,
        patches_in_throat: req.body.patches_in_throat  ,
        irregular_sugar_level : req.body.irregular_sugar_level ,
        cough : req.body.cough ,
        high_fever  : req.body.high_fever ,
        sunken_eyes : req.body.sunken_eyes ,
        breathlessness  : req.body.breathlessness ,
        sweating : req.body.sweating  ,
        dehydration	 : req.body.dehydration ,
        indigestion	: req.body.indigestion ,
        headache : req.body.headache ,
        yellowish_skin  : req.body.yellowish_skin ,
        dark_urine  : req.body.dark_urine ,
        nausea : req.body.nausea ,
        loss_of_appetite  : req.body.loss_of_appetite ,
        pain_behind_the_eyes : req.body.pain_behind_the_eyes ,
        back_pain  : req.body.back_pain ,
        constipation  : req.body.constipation ,
        abdominal_pain : req.body.abdominal_pain ,
        diarrhoea : req.body.diarrhoea ,
        mild_fever  : req.body.mild_fever,
        yellow_urine : req.body.yellow_urine,
        yellowing_of_eyes  : req.body.yellowing_of_eyes,
        acute_liver_failure  : req.body.acute_liver_failure,
        fluid_overload : req.body.fluid_overload,
        swelling_of_stomach  : req.body.swelling_of_stomach,
        swelled_lymph_nodes : req.body.swelled_lymph_nodes,
        malaise  : req.body.malaise,
        blurred_and_distorted_vision : req.body.blurred_and_distorted_vision ,
        phlegm  : req.body.phlegm,
        throat_irritation  : req.body.throat_irritation,
        redness_of_eyes: req.body.redness_of_eyes,
        sinus_pressure  : req.body.sinus_pressure,
        runny_nose  : req.body.runny_nose,
        congestion  : req.body.congestion,
        chest_pain : req.body.chest_pain,
        weakness_in_limbs : req.body.weakness_in_limbs,
        fast_heart_rate: req.body.fast_heart_rate,
        pain_during_bowel_movements  : req.body.pain_during_bowel_movements,
        pain_in_anal_region  : req.body.pain_in_anal_region,
        bloody_stool  : req.body.bloody_stool,
        irritation_in_anus : req.body.irritation_in_anus,
        neck_pain  : req.body.neck_pain,
        dizziness  : req.body.dizziness,
        cramps  : req.body.cramps,
        bruising : req.body.bruising,
        obesity  : req.body.obesity,
        swollen_legs : req.body.swollen_legs,
        swollen_blood_vessels : req.body.swollen_blood_vessels,
        puffy_face_and_eyes  : req.body.puffy_face_and_eyes,
        enlarged_thyroid  : req.body.enlarged_thyroid,
        brittle_nails  : req.body.brittle_nails,
        swollen_extremeties  : req.body.swollen_extremeties,
        excessive_hunger  : req.body.excessive_hunger,
        extra_marital_contacts : req.body.extra_marital_contacts,
        drying_and_tingling_lips  : req.body.drying_and_tingling_lips,
        slurred_speech : req.body.slurred_speech,
        knee_pain  : req.body.knee_pain,
        hip_joint_pain  : req.body.hip_joint_pain,
        muscle_weakness  : req.body.muscle_weakness,
        stiff_neck  : req.body.stiff_neck,
        swelling_joints  : req.body.swelling_joints,
        movement_stiffness  : req.body.movement_stiffness,
        spinning_movements : req.body.spinning_movements,
        loss_of_balance	 : req.body.loss_of_balance,
        unsteadiness : req.body.unsteadiness,
        weakness_of_one_body_side  : req.body.weakness_of_one_body_side,
        loss_of_smell : req.body.loss_of_smell,
        bladder_discomfort : req.body.bladder_discomfort,
        foul_smell_of_urine : req.body.foul_smell_of_urine,
        continuous_feel_of_urine : req.body.continuous_feel_of_urine,
        passage_of_gases : req.body.passage_of_gases,
        internal_itching : req.body.internal_itching,
        toxic_look_typhos : req.body.toxic_look_typhos,
        depression: req.body.depression,
        irritability : req.body.irritability,
        muscle_pain_altered_sensorium : req.body.muscle_pain_altered_sensorium,
        red_spots_over_body  : req.body.red_spots_over_body,
        belly_pain: req.body.belly_pain,
        abnormal_menstruation : req.body.abnormal_menstruation,
        dischromic_patches : req.body.dischromic_patches,
        watering_from_eyes : req.body.watering_from_eyes,
        increased_appetite : req.body.increased_appetite,
        polyuria : req.body.polyuria,
        family_history : req.body.family_history,
        mucoid_sputum : req.body.mucoid_sputum,
        rusty_sputum: req.body.rusty_sputum,
        lack_of_concentration : req.body.lack_of_concentration,
        visual_disturbances : req.body.visual_disturbances,
        receiving_blood_transfusion: req.body.receiving_blood_transfusion,
        receiving_unsterile_injections : req.body.receiving_unsterile_injections,
        coma : req.body.coma,
        stomach_bleeding : req.body.stomach_bleeding,
        distention_of_abdomen : req.body.distention_of_abdomen,
        history_of_alcohol_consumption : req.body.history_of_alcohol_consumption,
        blood_in_sputum : req.body.blood_in_sputum,
        prominent_veins_on_calf : req.body.prominent_veins_on_calf,
        palpitations : req.body.palpitations,
        painful_walking : req.body.painful_walking,
        pus_filled_pimples : req.body.pus_filled_pimples,
        blackheads : req.body.blackheads,
        scurring: req.body.scurring,
        skin_peeling : req.body.skin_peeling,
        silver_like_dusting : req.body.silver_like_dusting,
        small_dents_in_nails : req.body.small_dents_in_nails,
        inflammatory_nails : req.body.inflammatory_nails,
        blister : req.body.blister,
        red_sore_around_nose : req.body.red_sore_around_nose,
        yellow_crust_ooze : req.body.yellow_crust_ooze,
        case_id:results.insertId




      };
      let sqlfordiseases = "INSERT INTO case_symptoms SET ?";
      let queryfordiseases = mysqlconnection.query(sqlfordiseases, diseases,(err, resultsfor) => {
        if(err) console.log(err);
        let admin=['rishishwarsuraj@gmail.com','guptashub3009@gmail.com'];
        linkmail.newuserverify("rishishwarsuraj@gmail.com",req.body.case_email,results.insertId,req.body.case_person);
        res.send(JSON.stringify({"status": 200, "error": null, "response": resultsfor}));
      });
      
    });
});


app.get('/detailed-report/:id',(req, res) => {

  
  let sql = "SELECT * FROM case_symptoms WHERE case_id = ?";
  let query = mysqlconnection.query(sql, req.params.id,(err, results) => {
    if(err) console.log(err);
      //rishishwarsuraj
      // linkmail.newuserverify("parasarya289@gmail.com",req.body.case_email,results.insertId,req.body.case_person);
    // res.send(JSON.stringify({"status": 200, "error":null, "response": results}));
    res.status(200).send(results);
  });
  
    
});

app.post('/sending-email',(req, res) => {
    var ans=req.body.case_email;
    var or_mail=ans.split('@')[1];
    // console.log(or_mail=='gmail.com');
    if(or_mail=='gmail.com'){
      
      linkmail.userotpverification(req.body.case_email,req.body.otp,req.body.case_person);
      res.status(200).send(JSON.stringify({"status": 200, "error": null, "response": "OTP Send","ok":true}));
    }else{
     
      res.status(400).send(JSON.stringify({"code": 400, "error": "Email Not Found", "response": null,"ok":false}));
    }

});
  

app.post(`/save-disease/:id/:dis`,(req,res)=>{
  id=req.params.id;
  dis=req.params.dis;
  console.log(id,"  :  ",dis);
  let data={case_id:req.params.id,case_disease:req.params.dis};
  
  let sql = "INSERT INTO case_result SET ?";
  let query = mysqlconnection.query(sql, data);
  let userid="SELECT * FROM patients_details WHERE case_id = ?";
  let mailquery = mysqlconnection.query(userid, req.params.id,(err,mail)=>{
    if(err){
      console.log(err);
    }else{   
     
      linkmail.userdiseaseconfirm(mail[0].case_email,id,dis,mail[0].case_person);
    }
  });


  return res.status(200).send(query);

});


app.listen(port, () => {
    console.log("Server running successfully on 8000");
});
   
