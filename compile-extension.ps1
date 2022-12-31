Set-Location src;
Remove-Item ..\web-ext-artifacts\ext.xpi
zip -r ..\web-ext-artifacts\ext.xpi *
Set-Location ..