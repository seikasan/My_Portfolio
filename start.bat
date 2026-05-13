@echo off
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
  echo Node.js or npm was not found.
  echo Please install Node.js, then run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Running initial setup...
  echo Installing dependencies with npm install.
  call npm install

  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo Starting development server...
start "My_Portfolio Dev Server" cmd /k "npm run dev"

timeout /t 3 /nobreak >nul

echo Opening browser...
start "" "http://localhost:5173/"

exit /b 0