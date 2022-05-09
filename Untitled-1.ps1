foreach($b in $(Get-ChildItem -Path src/latest *Panel*)) {
    Write-Output $b;
    $f=$b.Name
    curl -L "https://www.songsterr.com/static/latest/$f" > src/latest/$f
}