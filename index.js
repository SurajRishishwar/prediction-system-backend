const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const port=8000||process.env.port;
const app = express();
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
    let case_id;
    let data = {case_person: req.body.case_person,case_email: req.body.case_email};
    let sql = "INSERT INTO patients_details SET ?";
    let query = mysqlconnection.query(sql, data,(err, results) => {
      console.log(results.insertId);
      let diseases={
        itching: req.body.itching ,
        skin_rash: req.body.itching   ,
        nodal_skin_eruptions: req.body.itching ,
        continuous_sneezing: req.body.itching  ,
        shivering: req.body.itching   ,
        chills: req.body.itching   ,
        joint_pain: req.body.itching  ,
        stomach_pain: req.body.itching   ,
        acidity: req.body.itching 	 ,
        ulcers_on_tongue: req.body.itching  ,
        muscle_wasting: req.body.itching  ,
        vomiting: req.body.itching  ,
        burning_micturition: req.body.itching  ,
        spotting_urination: req.body.itching  ,
        fatigue: req.body.itching  ,
        weight_gain : req.body.itching  ,
        anxiety: req.body.itching 	,
        cold_hands_and_feets : req.body.itching  ,
        mood_swings : req.body.itching  ,
        weight_loss: req.body.itching  ,
        restlessness: req.body.itching ,
        lethargy  : req.body.itching ,
        patches_in_throat: req.body.itching  ,
        irregular_sugar_level : req.body.itching ,
        cough : req.body.itching ,
        high_fever  : req.body.itching ,
        sunken_eyes : req.body.itching ,
        breathlessness  : req.body.itching ,
        sweating : req.body.itching  ,
        dehydration	 : req.body.itching ,
        indigestion	: req.body.itching ,
        headache : req.body.itching ,
        yellowish_skin  : req.body.itching ,
        dark_urine  : req.body.itching ,
        nausea : req.body.itching ,
        loss_of_appetite  : req.body.itching ,
        pain_behind_the_eyes : req.body.itching ,
        back_pain  : req.body.itching ,
        constipation  : req.body.itching ,
        abdominal_pain : req.body.itching ,
        diarrhoea : req.body.itching ,
        mild_fever  : req.body.itching,
        yellow_urine : req.body.itching,
        yellowing_of_eyes  : req.body.itching,
        acute_liver_failure  : req.body.itching,
        fluid_overload : req.body.itching,
        swelling_of_stomach  : req.body.itching,
        swelled_lymph_nodes : req.body.itching,
        malaise  : req.body.itching,
        blurred_and_distorted_vision : req.body.itching ,
        phlegm  : req.body.itching,
        throat_irritation  : req.body.itching,
        redness_of_eyes: req.body.itching,
        sinus_pressure  : req.body.itching,
        runny_nose  : req.body.itching,
        congestion  : req.body.itching,
        chest_pain : req.body.itching,
        weakness_in_limbs : req.body.itching,
        fast_heart_rate: req.body.itching,
        pain_during_bowel_movements  : req.body.itching,
        pain_in_anal_region  : req.body.itching,
        bloody_stool  : req.body.itching,
        irritation_in_anus : req.body.itching,
        neck_pain  : req.body.itching,
        dizziness  : req.body.itching,
        cramps  : req.body.itching,
        bruising : req.body.itching,
        obesity  : req.body.itching,
        swollen_legs : req.body.itching,
        swollen_blood_vessels : req.body.itching,
        puffy_face_and_eyes  : req.body.itching,
        enlarged_thyroid  : req.body.itching,
        brittle_nails  : req.body.itching,
        swollen_extremeties  : req.body.itching,
        swollen_extremeties  : req.body.itching,
        excessive_hunger  : req.body.itching,
        extra_marital_contacts : req.body.itching,
        drying_and_tingling_lips  : req.body.itching,
        slurred_speech : req.body.itching,
        knee_pain  : req.body.itching,
        hip_joint_pain  : req.body.itching,
        muscle_weakness  : req.body.itching,
        stiff_neck  : req.body.itching,
        swelling_joints  : req.body.itching,
        movement_stiffness  : req.body.itching,
        spinning_movements : req.body.itching,
        loss_of_balance	 : req.body.itching,
        unsteadiness : req.body.itching,
        weakness_of_one_body_side  : req.body.itching,
        loss_of_smell : req.body.itching,
        bladder_discomfort : req.body.itching,
        foul_smell_of_urine : req.body.itching,
        continuous_feel_of_urine : req.body.itching,
        passage_of_gases : req.body.itching,
        internal_itching : req.body.itching,
        toxic_look_typhos : req.body.itching,
        depression: req.body.itching,
        irritability : req.body.itching,
        muscle_pain_altered_sensorium : req.body.itching,
        red_spots_over_body  : req.body.itching,
        belly_pain: req.body.itching,
        abnormal_menstruation : req.body.itching,
        dischromic_patches : req.body.itching,
        watering_from_eyes : req.body.itching,
        increased_appetite : req.body.itching,
        polyuria : req.body.itching,
        family_history : req.body.itching,
        mucoid_sputum : req.body.itching,
        rusty_sputum: req.body.itching,
        lack_of_concentration : req.body.itching,
        visual_disturbances : req.body.itching,
        receiving_blood_transfusion: req.body.itching,
        receiving_unsterile_injections : req.body.itching,
        coma : req.body.itching,
        stomach_bleeding : req.body.itching,
        distention_of_abdomen : req.body.itching,
        history_of_alcohol_consumption : req.body.itching,
        blood_in_sputum : req.body.itching,
        prominent_veins_on_calf : req.body.itching,
        palpitations : req.body.itching,
        painful_walking : req.body.itching,
        pus_filled_pimples : req.body.itching,
        blackheads : req.body.itching,
        scurring: req.body.itching,
        skin_peeling : req.body.itching,
        silver_like_dusting : req.body.itching,
        small_dents_in_nails : req.body.itching,
        inflammatory_nails : req.body.itching,
        blister : req.body.itching,
        red_sore_around_nose : req.body.itching,
        yellow_crust_ooze : req.body.itching,
        case_id:results.insertId




      };
      let sqlfordiseases = "INSERT INTO case_symptoms SET ?";
      let queryfordiseases = mysqlconnection.query(sqlfordiseases, diseases,(err, resultsfor) => {
        if(err) console.log(err);
        res.send(JSON.stringify({"status": 200, "error": null, "response": resultsfor}));
      });
      
    });
});

app.listen(port, () => {
    console.log("Server running successfully on 8000");
});
   
