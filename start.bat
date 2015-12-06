ECHO OFF
start cmd /k CALL startServer.bat
start cmd /k CALL startNgrok.bat
CALL openChrome.bat
exit

