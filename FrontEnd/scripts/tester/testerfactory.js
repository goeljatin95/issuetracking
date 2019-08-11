app.factory('testerfactory',($http,$q,FETCH_EMPLOYEE,FETCH_TESTER,FETCH_STATUS)=>{
    
    
    return {
             fetchStatus(){

                let defer = $q.defer();
          
                $http.get(FETCH_STATUS).then((data)=>{
                
                    defer.resolve(data);
                },(error)=>{
                    defer.reject(error);
                });
               
                return defer.promise;
           
           
            },
       
    
        fetchEmployee(){
          
            let defer = $q.defer();
          
            $http.get(FETCH_EMPLOYEE).then((data)=>{
            
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            });
           
            return defer.promise;
        },
       Select(employee,role,command){
        length=employee.length;
        let a=[];
        let k=0
        for(i=0;i<length;i++){
            if(employee[i].role==role){
                
                a[k]=employee[i].name;
                 k++
            }  
         }
          $scope.command=a;
       },
       fetchTester(){
        let defer = $q.defer();
          
        $http.get(FETCH_TESTER).then((data)=>{
        
            defer.resolve(data);
        },(error)=>{
            defer.reject(error);
        });
       
        return defer.promise;

       }
    }
})