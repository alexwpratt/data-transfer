# Data Transfer

A simple electron app to periodically run an external program on the installed machine.

Copyright - Restaurant365, LLC.

Author: Alex Wilcken Pratt


## DESCRIPTION:

This application will run a cron job to, every 15 minutes, run the ComidaGP.exe program. I will also set itself to autolaunch upon startup of the computer. The applicaiton window will have two buttons, one to run the Comida program regularly (with the "run" argument), and another to run the program in a configuration mode to set up the instance ID and user account.

## SETUP:

Simply download the installer for the intended machine type and run the installer. For Windows, it will put a shortcut on the desktop and put the program with the other installed applications. For Mac, drag the app into your apps folder for it to work.

## CHANGES:

When changes are ready, commit the changes to github. When merged into master (and the updated master pulled on your machine), run set the environment variable on your local machine and run the command './publish.sh' to run the publisher. It will build and upload all the build files into a publish draft, which you can then publish in Github. The next time the user runs the app on their machine, it will automatically download and install the updated version.