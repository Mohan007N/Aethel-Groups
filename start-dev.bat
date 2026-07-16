@echo off
echo ========================================
echo  Aethel Groups - Development Startup
echo ========================================
echo.

echo [1/2] Starting Python Backend (Port 8000)...
start cmd /k "cd /d %~dp0backend && pip install -r requirements.txt && python main.py"

timeout /t 5

echo [2/2] Starting Vite Frontend (Port 3000)...
start cmd /k "cd /d %~dp0 && npm run dev"

echo.
echo Both servers should be starting...
echo  Frontend: http://localhost:3000
echo  Backend:  http://localhost:8000
echo.
pause
