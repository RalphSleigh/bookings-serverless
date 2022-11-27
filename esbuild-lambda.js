const fs = require('fs')
const path = require('path')
const esbuild = require('esbuild')
const ImportGlobPlugin = require('esbuild-plugin-import-glob')


//(async () => {
var walk = function (dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

const entrypoints = walk('src')
.filter(p => p.includes('handler.ts'))
//.filter(p => p.includes('.ts'))
const outDir = `dist-lambda`;
const functionsDir = `src`;

esbuild
    .build({
       entryPoints: entrypoints,
       //entryPoints: ["src/lambdas/env/handler.ts"],
        bundle: true,
        minify: true,
        //splitting: true,
        outdir: path.join(__dirname, outDir),
        outbase: functionsDir,
        //format: 'cjs',
        platform: 'node',
        //sourcemap: 'inline',
        target: ['node16'],
        external: ['pg-hstore','aws-sdk','mariadb','sequelize', 'lodash', 'aws-lambda'],
        plugins: [ImportGlobPlugin.default()],
        metafile: true,
    }).then(build => {

        return esbuild
        .build({
           entryPoints:['src/lambdas/test/handler.ts'
           ],
           //entryPoints: ["src/lambdas/env/handler.ts"],
            bundle: true,
            minify: false,
            //splitting: true,
            outdir: path.join(__dirname, outDir),
            outbase: functionsDir,
            //format: 'cjs',
            platform: 'node',
            //sourcemap: 'inline',
            target: ['node16'],
            external: ['pg-hstore','aws-sdk','mariadb','sequelize', 'lodash', 'aws-lambda'],
            plugins: [ImportGlobPlugin.default()],
            metafile: true,
        }).then(build => {
            require('fs').writeFileSync('meta.json',
            JSON.stringify(build.metafile))
        })


    })


//})()