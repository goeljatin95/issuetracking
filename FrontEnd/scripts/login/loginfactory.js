app.factory('loginfactory',($http,$q,FETCH_EMPLOYEE)=>{
    return {
        fetchEmployee(){
          
            let defer = $q.defer();
          
            $http.get(FETCH_EMPLOYEE).then((data)=>{
            
                defer.resolve(data);
            },(error)=>{
                defer.reject(error);
            });
           
            return defer.promise;
        }
    }
})