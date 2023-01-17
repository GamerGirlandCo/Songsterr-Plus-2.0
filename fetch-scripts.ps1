$importReg = "(await )?import\(['`"]\./(?<file>.*)['`"]\)|import(?: )?['`"]\./(?<file>.*?)['`"];|import(?: )?\{.*\}(?: )?from(?: )?['`"]\./(?<file>.*)['`"]"
Get-Content ./src/latest/index.*.js | ForEach-Object {
	if($_ -match $importReg) {
		# Write-Output $_
		$blip = Select-String $importReg -InputObject $_
		# Write-Output -InputObject $blip
		$fn = $blip.Matches[0].Groups["file"]
		$f = $fn.Value
		# Write-Output $fn
		curl -L "https://www.songsterr.com/static/latest/$f" > src/latest/$f
	}
}
Get-Content ./src/latest/*.js | ForEach-Object {
	if($_ -match $importReg) {
		# Write-Output $_
		$blip = Select-String $importReg -InputObject $_
		# Write-Output -InputObject $blip
		$fn = $blip.Matches[0].Groups["file"]
		$f = $fn.Value
		# Write-Output $fn
		curl -L "https://www.songsterr.com/static/latest/$f" > src/latest/$f
	}
}