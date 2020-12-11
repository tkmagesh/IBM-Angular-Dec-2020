(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@Service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] triggering the service`);
        const result = addSync(x,y);
        console.log(`[@Client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient

    function addAsync(x,y, callback){
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@Service] returning result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@Client] triggering the service`);
        addAsync(x,y, function(result){
            console.log(`[@Client] result = ${result}`);
        });
        
    }

    window['addAsyncClient'] = addAsyncClient

    function addAsyncPromise(x,y, callback){
        console.log(`   [@Service] processing ${x} and ${y}`);
        const promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if (x < 0 || y < 0) {
                    rejectFn(new Error('Invalid arguments'))
                }
                const result = x + y;
                console.log(`   [@Service] returning result`);
                resolveFn(result);
            }, 5000);
        })
        return promise;
    }

    window['addAsyncPromise'] = addAsyncPromise;

    
   function addAsyncPromiseClient(x,y){
        console.log(`[@Client] triggering the service`);
        const p = addAsyncPromise(x,y);
        p.then(function(result){
            console.log(`[@Client] result = ${result}`);
        })
        .catch(function(err){
            console.log(err);
        })
        
    } 
    

   /*  async function addAsyncPromiseClient(x,y){
        console.log(`[@Client] triggering the service`);
        const result = await addAsyncPromise(x,y);
        console.log(`[@Client] result = ${result}`);
    } */

    window['addAsyncPromiseClient'] = addAsyncPromiseClient

})();