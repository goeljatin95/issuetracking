app.controller('ctrl2',($scope,$http)=>{
     $scope.register=()=>{ 
       
   
        return $http({
        method:'GET',
        url:'/register',
        params:{
            name:$scope.name,
            password:$scope.password,
            phoneNo:$scope.phoneNo,
            role:$scope.role,
            emailId:$scope.emailId
        },
        

    })
}
})