@echo off
echo ========================================
echo  Aethel Groups - Push to GitHub
echo ========================================
echo.

echo [1/3] Adding changes to Git...
git add .

echo [2/3] Committing changes...
git commit -m "Configure unified FastAPI backend under api/ and update deployment configurations"

echo [3/3] Pushing to remote repository...
git push

echo.
echo Done! Changes have been pushed to GitHub.
pause
