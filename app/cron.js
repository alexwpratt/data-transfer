//CRON---------------------------------------------------------------------------------------------------------------------------------
var CronJob = require('cron').CronJob;

try {
    // '00 */15 * * * *' is the 00th second of every 15th minute of every hour ( 15, 30, 45, 60)
    new CronJob('00 */15 * * * *', 
        function() {
            const execFile = require('child_process').execFile;
            const child = execFile(ComidaGP_exe_path, ['run'], {});
        },
        null, true, null);
} catch(ex) {
    console.log("cron pattern not valid");
}
