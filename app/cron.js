//CRON---------------------------------------------------------------------------------------------------------------------------------
var ComidaGP_exe_path = 'C:\\R365\\ComidaGP.exe'; //official path per Matthew Bair

var CronJob = require('cron').CronJob;

try {
    // '00 */15 * * * *' is the 00th second of every 15th minute of every hour ( 15, 30, 45, 60)
    new CronJob('00 */15 * * * *', 
        function() {
            // const execFile = require('child_process').execFile;
            // const child = execFile(ComidaGP_exe_path, ['run'], {});
            try {
                console.log("run_Comida path: " + ComidaGP_exe_path)
                const execFile = require('child_process').execFile;
                const child = execFile(ComidaGP_exe_path, ['run'], (error, stdout, stderr) => {
                    if (error) {
                        alert('ERROR: The ComidaGP.exe file was not found in the default location. Please select the file manually with the "Choose File" button below.');
                        throw error;
                    }
                    // console.log(stdout);
                });
            }
            catch(err) {
                alert('ERROR: The ComidaGP.exe file was not found in the default location. Please select the file manually with the "Choose File" button below.');
            }
        },
        null, true, null);
} catch(ex) {
    console.log("cron pattern not valid");
}
