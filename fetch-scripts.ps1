$importReg = "(await )?import\(['`"]\./(?<file>.*?)['`"]\)|import(?: )?['`"]\./(?<file>.*?)['`"];|import(?: )?\{.*\}(?: )?from(?: )?['`"]\./(?<file>.*?)['`"];|(?: )*\}(?: )?from(?: )?['`"]\./(?<file>.*?)['`"];"
npx prettier -w ./src/latest
Get-Content ./src/latest/*.js | ForEach-Object {
	if($_ -match $importReg) {
		# Write-Output $_
		$blip = Select-String $importReg -InputObject $_
		# Write-Output -InputObject $blip.Matches
		$fn = $blip.Matches[0].Groups["file"]
		$f = $fn.Value
		Write-Output $f
		curl -L "https://www.songsterr.com/static/latest/$f" > src/latest/$f
	}
}
npx prettier -w ./src/latest