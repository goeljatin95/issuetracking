app.controller('ctrl4',($scope,testerfactory,$rootScope,$http
    )=>{
      
   userid=$rootScope.userid

 $scope.func=(developers)=>{
    $scope.flag=!$scope.flag
   
    $scope.descr=developers.Description
}
$scope.func2=()=>{
    $scope.flag=!$scope.flag
}
$scope.statusold=false
$scope.statusnew=false
$scope.statusChange=(developers,status)=>{
    $scope.statusold=true
    $scope.statusnew=true
    $http({
        method:'GET',
        url:'/developerUpdate',
        params:{
            Status:status,
            issueid:developers._id,
            Userid:userid
        }
    })
} 
var a=0
           
    let promise = testerfactory.fetchEmployee();
     
    userid=$rootScope.userid
    promise.then(data=>{
        employee = data.data['employee'];
        length=employee.length;
        
        let b=[]
        let k=0
        let m=0;
        for(i=0;i<length;i++){
            if(employee[i].role=='developer'){
                if(employee[i].name==userid){
                a=employee[i].assignedBy
                 
                }
            }  
         }
          
         $scope.list=a    
    

       
             
    }) 
    
})




