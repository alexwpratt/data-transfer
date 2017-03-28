
//AUTO-LAUNCH--------------------------------------------------------------------------------------------------------------
var AutoLaunch = require('auto-launch');

var myAppAutoLauncher = new AutoLaunch({
    name: 'Data Transfer'
});

console.log(myAppAutoLauncher.path);

myAppAutoLauncher.enable();

//myAppAutoLauncher.disable();

myAppAutoLauncher.isEnabled()
.then(function(isEnabled){
    if(isEnabled){
        return;
    }
    myAppAutoLauncher.enable();
})
.catch(function(err){
    // handle error
});
