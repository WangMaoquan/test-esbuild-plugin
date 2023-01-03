const { build } = require('esbuild');
const httpImportPlugin = require('./plugins/httpImportPlugin');
const envPlugin = require('./plugins/envPlugin');
async function runBuild() {
  build({
    absWorkingDir: process.cwd(),
    entryPoints: ['./src/index.jsx'],
    outdir: 'dist',
    bundle: true,
    format: 'esm',
    splitting: true,
    sourcemap: true,
    metafile: true,
    plugins: [httpImportPlugin()],
  }).then(() => {
    console.log('🚀 Build Finished!');
  });
}

runBuild();
