const express=require('express');
const Route=express.Router();
const nodemailer=require("nodemailer")
const employeeCrud=require("../db/helpers/employeeCrud")
const fs=require('fs')
Route.get('/login',(req,res)=>{

    let userid= '';
   userid= req.query.userid;
let password='';
password=req.query.password;
let role=req.query.role;


})
Route.get('/register',(req,res)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jating06@gmail.com',
          pass: 'monalisa9654588365'
        }
      });
      
      var mailOptions = {
        from: 'admin',
        to: 'goeljatin95@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'account created successfully'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
    newUser= {name:req.query.name,password:req.query.password,phoneNo:req.query.phoneNo,role:req.query.role,emailId:req.query.emailId}

   employeeCrud.add(newUser,res)
})
Route.get('/employee',(req,res)=>{
    employeeCrud.fetch(res);
})
Route.post('/addissue',(req,res)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jating06@gmail.com',
      pass: 'monalisa9654588365'
    }
  });
  
  var mailOptions = {
    from: 'admin',
    to: req.body.emailId,
    subject: 'NEW ISSUE DETECTED',
    text: `New Bug assigned by ${req.body.reportingofficer}\n 
          severity:${req.body.severity}\n
           timeAlloted:${req.body.timeAlloted}`,
    attachments:[{
      filename:req.body.file,
      path:req.file.path,
      contents:'img'
    }]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
     
obj={issue:req.body.issue,officer:req.body.reportingofficer,assignedTo:req.body.Assignto,assigned:req.body.assigned,severity:req.body.severity,timeAlloted:req.body.timeAlloted,AllotedOn:req.body.AllotedOn,Description:req.body.Description}
 employeeCrud.addIssue(obj)
})


Route.get('/developerUpdate',(req,res)=>{
  status=req.query.Status
 issueid=req.query.issueid
 userid=req.query.Userid
 employeeCrud.updateIssue(issueid,status,userid,res)
})
Route.get('/fetchStatus',(req,res)=>{
  userid=req.query.userid

  employeeCrud.fetchStatus(res,userid)
})

module.exports=Route;