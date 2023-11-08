Set-Location build;
Remove-Item ../web-ext-artifacts/ext.xpi
node ../esbuild.mjs
Copy-Item blocknreplace.js chrome/
zip -r ..\web-ext-artifacts\ext.xpi . -x ./chrome/* -x *.pem -x *.crx
zip -r ..\web-ext-artifacts\chrome-unpacked.zip ./chrome -x *.zip
crx3 -p chrome.pem --crxURL "https://github.com/GamerGirlandCo/Songsterr-Plus-2.0/releases/download/latest/chrome.crx" -o ../web-ext-artifacts/chrome.crx chrome/
Set-Location ..