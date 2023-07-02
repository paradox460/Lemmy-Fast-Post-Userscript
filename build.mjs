import {readFileSync} from 'fs';

import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.mjs'],
  bundle: true,
  outfile: 'dist/lemmy-fast-post.user.js',
  minifySyntax: true,
  banner: {
    js: readFileSync("src/banner.js", "utf8")
  }
})
