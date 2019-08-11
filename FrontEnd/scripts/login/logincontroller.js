app.controller('ctrl1',($rootScope,$scope,loginfactory,$location,$http,$window)=>{
   $scope.register=()=>{
     $location.path('/register')
   }
    $scope.flag=true
    $scope.sumbit=(valid)=>{
        if(valid){
            
            $scope.flag= false;
        }
        else{
           $scope.flag=true
        }
    
    }
    
    $scope.sumbit=()=>{
       
       $rootScope.userid=$scope.userid;
       $rootScope.role=$scope.role;
      
                                                                             
          
    
        let promise = loginfactory.fetchEmployee();
        
        promise.then(data=>{
         
           employee = data.data['employee'];
           
           let flag=0;
         length=employee.length;
        
         for(i=0;i<length;i++){
          if(($scope.password==employee[i].password)&&($scope.userid==employee[i].name)&&($scope.role==employee[i].role)){
               flag=1; 
               
        }
             }
          
            if(flag==1){
               url='/'+$scope.role
               $location.path(url)
             
                }
                else
                {    $window.alert('You are not a valid User')
                    $location.path('/register')
                }
            

        },error=>{
            $scope.error = error;
        })
         



    }


})
   