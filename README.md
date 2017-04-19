# Data Transfer

A simple electron app to periodically run an external program on the installed machine.

Copyright - Restaurant365, LLC.

Author: Alex Wilcken Pratt


## Details:

This application will run a cron job to, every 15 minutes, run the ComidaGP.exe program. I will also set itself to autolaunch upon startup of the computer. The applicaiton window will have two buttons, one to run the Comida program regularly (with the "run" argument), and another to run the program in a configuration mode to set up the instance ID and user account.

## Setup:

Simply download the installer for the intended machine type and run the installer. For Windows, it will put a shortcut on the desktop and put the program with the other installed applications. For Mac, drag the app into your apps folder for it to work.

## Changes:

When changes are ready, commit the changes to github. When merged into master (and the updated master pulled on your machine), run set the environment variable on your local machine and run the command './publish.sh' to run the publisher. It will build and upload all the build files into a publish draft, which you can then publish in Github. The next time the user runs the app on their machine, it will automatically download and install the updated version.

## To install as a Windows Service:

Head to http://nssm.cc, that's the tool I used to make turn the executable into a service. For more information, use this page: http://nssm.cc/usage

1- Download this file (http://nssm.cc/release/nssm-2.24.zip) at this page (http://nssm.cc/download) and place it on the C drive

2- On your Windows Machine, search for "environment variables" and get to the Advanced portion of the System Properties menu that will allow you to configure the Environment Variables.

3- Click the "Environment Variables" button at the bottom of the window and it will show you a window where you can configure them. Find the System Variable that is called "Path", we need to configure it to allow us to use the nssm from the command line.

4- Using a semicolon as the delimiter, add "C:\nssm-2.24\win64\" (or whatever your version was) to the end of the list of acceptable paths

5- Once that path is added, restart the computer.

6- Open Command Prompt as an Administrator and run the command "nssm install DataTransfer"

7- That command will open the window to allow you to configure the details. Most should be preset correctly, but you will need to choose the path of the program you want to run. The Data Transfer program will most likely be under the C drive, in the Program Files folder. You should not need to add any arguments.

8- That should be it! Check the Services program on the Computer to see the services configured, and you should see DataTransfer under there. You can click it and hit start, but it should be ready to go in the background now.
