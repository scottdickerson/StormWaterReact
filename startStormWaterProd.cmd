taskkill /IM chrome.exe >nul
taskkill /f /im explorer.exe
start chrome --kiosk --app=file:///C:/Users/admin/Documents/GitHub/StormWaterReact/build/index.html --start-fullscreen --disable-pinch