Set-Location src;
Remove-Item ..\web-ext-artifacts\ext.xpi
zip -r -0 ..\web-ext-artifacts\ext.xpi *
Set-Location ..