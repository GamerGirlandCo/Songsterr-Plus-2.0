import * as esbuild from 'esbuild'
console.log(process.cwd())
await esbuild.build({
	entryPoints: ['../src/blocknreplace.js'],
	bundle: true,
	sourcemap: false,
	outfile: '../build/blocknreplace.js',
	target: ['chrome58', 'firefox57'],
	external: ["fs"]
})


