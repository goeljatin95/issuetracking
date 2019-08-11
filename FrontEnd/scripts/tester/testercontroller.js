app.controller("ctrl3",($rootScope,$scope,testerfactory,$http,loginfactory,$window,Upload)=>{
$scope.flag=false
  $scope.change=()=>{
   $scope.flag=true
 }
  userid=$rootScope.userid;
  $scope.date = new Date();
$http({
  url:'/fetchStatus',
  method:'GET',
  params:{
    userid:userid
  }
})

 let Status=testerfactory.fetchStatus();
   Status.then(data=>{
     employee=data.data['employee'];
     console.log(employee)
     size=employee.length;
     let b=[];
    k=0
     for(i=0;i<size;i++){
       
       for(j=0;j<employee[i].assignedBy.length;j++)
       {
       b[k]={AllotedTo:employee[i].name,issue:employee[i].assignedBy[j].issue,TimeAlloted:employee[i].assignedBy[j].TimeAlloted,AllotedOn:employee[i].assignedBy[j].AllotedOn,Status:employee[i].assignedBy[j].Status}
          k++
      }}
    $scope.list=b
   }) 
 
  
    let promise = testerfactory.fetchEmployee();
        
    promise.then(data=>{
       employee = data.data['employee'];
       length=employee.length;
       let a=[];
       let k=0
       for(i=0;i<length;i++){
           if(employee[i].role=='developer'){
               
               a[k]=employee[i].name;
                k++
           }  
        }
        
         let b=[];
       let j=0
       for(i=0;i<length;i++){
           if(employee[i].role=='tester'){
               
               b[j]=employee[i].name;
                j++
           }  
        }
         $scope.tester=b;
         $scope.assignto=a;
         
         
    }) 

    
    $scope.assigned=0;
    $scope.solved=0;
    $scope.TBD=0;
    $scope.NAB=0;
    
    
    
         $scope.addIssue=(file)=>{
      
       $scope.assigned=  $scope.assigned+1;
       for(i=0;i<length;i++){
         if(employee[i].name==$scope.assignTo)
         {
           emailId=employee[i].emailId
         }
       }
       Upload.upload({
        method:'POST',
        url:'addissue',
        data:{
          issue:$scope.issue,
          Description:$scope.description,
          Assignto:$scope.assignTo,
          reportingofficer:userid,
          assigned:$scope.assigned,
          severity:$scope.severity,
          timeAlloted:$scope.timeAlloted,
          AllotedOn:$scope.date,
          file: file,
         emailId:emailId
        

        }
     


    }).then(function (resp) {
        $scope.msg = resp['data']['msg'];
        console.log('Success ',resp);
        
       
    }, function (resp) {
        console.log('Error status: ' + resp.status);
    }, function (evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ' );
    });

      $scope.issue='',
      $scope.description='';
      $scope.assignTo='';
       $scope.severity='';
       $scope.timeAlloted='';
       $scope.file=''
           

         }
         
    let pr = loginfactory.fetchEmployee()
        tester=[];
     
        pr.then(data=>{
     
     
     employee=data.data['employee']   
    
    })
  
     for(let i=0;i<length;i++){
       if(userid==employee[i].name){
         tester=employee[i]
       }
     }
     
     $scope.assigned=tester.assigned;
     $scope.solved=tester.solved;
     $scope.NAB=tester.NAB;
     $scope.TBD=tester.TBD




     $scope.msg = '';
    $scope.uploadfile = function(fileObject) {
            console.log('File is ',fileObject);
          $scope.upload($scope.file);
        };
      

  


})
