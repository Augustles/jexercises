@echo off
set home=C:\Users\ieware\pyexercises
cd %home%
git status
git diff
git add .
git commit
git push
echo [wait for ending git...]
pause>nul
exit
