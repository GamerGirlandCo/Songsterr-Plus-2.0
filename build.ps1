Set-Location build;
Remove-Item ../web-ext-artifacts/ext.xpi
../node_modules/.bin/browserify.ps1 ../src/blocknreplace.js > blocknreplace.js
Copy-Item blocknreplace.js chrome/
zip -r ..\web-ext-artifacts\ext.xpi . -x ./chrome/* -x *.pem -x *.crx
zip -r ..\web-ext-artifacts\chrome-unpacked.zip ./chrome -x *.zip
crx3 -p chrome.pem -o ../web-ext-artifacts/chrome.crx chrome/
Set-Location ..