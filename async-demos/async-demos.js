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

})();