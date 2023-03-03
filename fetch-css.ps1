# $importReg = "(await )?import\(['`"]\./(?<file>.*?)['`"]\)|import(?: )?['`"]\./(?<file>.*?)['`"];|import(?: )?\{.*\}(?: )?from(?: )?['`"]\./(?<file>.*?)['`"];|(?: )*\}(?: )?from(?: )?['`"]\./(?<file>.*?)['`"];"
$importReg = ".*?`"/static/latest/(?<prefix>.*?)\.(?<suffix>(\.module)?.+?)\.css`".*"
$filemy="./src/latest/index.659fabbf.js"
npx prettier -w ./tmp
Get-Content ./tmp/*.js | ForEach-Object {
	if($_ -match $importReg) {
		# Write-Output $_
		$blip = Select-String $importReg -InputObject $_
		# Write-Output -InputObject $blip.Matches
		$matcha = $blip.Matches[0].Groups["prefix"]
		$suff = $blip.Matches[0].Groups["suffix"]
		$f = $fn.Value
		Write-Output $matcha
		((Get-Content $filemy -Raw) -replace "$matcha\..*?\.css`"","$matcha.$suff.css`"") | Set-Content $filemy
		# curl -L "https://www.songsterr.com/static/latest/$f" > src/latest/$f
		Write-Output "$f
"
	}
}
# npx prettier -w ./src/latest