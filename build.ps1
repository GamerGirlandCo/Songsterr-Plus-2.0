Set-Location build;
Remove-Item ../web-ext-artifacts/ext.xpi
node ../esbuild.mjs
Copy-Item blocknreplace.js chrome/
zip -r ..\web-ext-artifacts\ext.xpi . -x ./chrome/* -x *.pem -x *.crx
Set-Location ..