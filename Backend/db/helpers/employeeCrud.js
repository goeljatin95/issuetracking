const registerModel=require("../models/employeeOperations");
employeeOperations={
    add(newUser,response){
          registerModel.insertMany(newUser,(err)=>{
            if(err){
                response.status(500).json({'message':'Error During Add'});
        }
        else{
            response.status(500).json({'message':'Add SuccessFully'});
        }
          });
          
    },
    fetch(response){
         registerModel.find({},(err,docs)=>{
          
            if(docs){
                response.status(200).json({'employee':docs});
                }
                else{
                    response.status(404).json({'employee':[]});
                }
         })
    }, 
    addIssue(obj){
        let myquery = { name:obj.assignedTo };
       
       let newvalues = { $push: {assignedBy:[{issue:obj.issue,ReportTo:obj.officer,Severity:obj.severity,TimeAlloted:obj.timeAlloted,AllotedOn:obj.AllotedOn,Description:obj.Description}]}};
          registerModel.updateOne(myquery,newvalues,(err,res)=>{
            if (err) throw err;
           
       })
     let myquery2={name:obj.officer}
     let newvalues2={$set:{assigned:obj.assigned}};
     registerModel.updateOne(myquery2,newvalues2,(err,res)=>{
         if(err) throw err;
         
     })
    },
    fetchImage(res){
      registerModel.find({'_id': '5d2329d27f3b4904202db3fe' }, (err, result) => {
 
        if (err) return console.log(err)
       
        res.contentType('image/jpeg');
       res.send(result[0].assignedBy[10].img.image)
       
       
        
      })
    },

 updateIssue(issueId,status,userid,res){
registerModel.findOneAndUpdate({'assignedBy._id':issueId,'name':userid},{$set:{'assignedBy.$.Status':status}},function(err,success){
  if(success){
    res.status(200)
  }
  else
  {
    console.log('server error')
  }
})
  

  } ,

fetchStatus(response,userid){
  regex = new RegExp(userid);

 registerModel.find({'assignedBy.ReportTo':regex},(err,result)=>{
if(result)
{
  response.status(200).json({'employee':result});
}
else
{
 throw err
}
 })

}}

module.exports=employeeOperations