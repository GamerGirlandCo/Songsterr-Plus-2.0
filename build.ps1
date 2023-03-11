Set-Location build;
Remove-Item ../web-ext-artifacts/ext.xpi
node ../esbuild.mjs
zip -r ..\web-ext-artifacts\ext.xpi *
Set-Location ..