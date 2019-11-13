
const fs = require('fs-extra');
const glob = require('fast-glob');
const csso = require('csso');
const sass = require('node-sass');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
// const path = require('path');
// const less = require('less');

// async function compileLess(lessCodes, paths) {
//   const outputs = await Promise.all(
//     lessCodes.map((source, index) =>
//       less.render(source, {
//         paths: [path.resolve(__dirname, 'node_modules')],
//         filename: paths[index]
//       })
//     )
//   );
//   return outputs.map(item => item.css);
// }

async function compileScss(scssCodes, paths) {
  const outputs = await Promise.all(
    scssCodes.map((source, index) => {
      return sass.renderSync({
        file: paths[index]
      })
    })
  )
  return outputs.map(item => item.css.toString())
}

async function compilePostcss(cssCodes, paths) {
  const postcssConfig = await postcssrc();
  const outputs = await Promise.all(
    cssCodes.map((css, index) =>
      postcss(postcssConfig.plugins).process(css, { from: paths[index] })
    )
  );

  return outputs.map(item => item.css);
}

async function compileCsso(cssCodes) {
  return cssCodes.map(css => csso.minify(css).css);
}

async function dest(output, paths) {
  await Promise.all(
    output.map((css, index) => fs.writeFile(paths[index].replace('.scss', '.css'), css))
  );

  // icon.less should be replaced by compiled file
  // const iconCss = await glob(['./es/icon/*.css', './lib/icon/*.css'], { absolute: true });
  // iconCss.forEach(file => {
  //   fs.copyFileSync(file, file.replace('.css', '.less'));
  // });
}

// compile component css
async function compile() {
  let codes;
  try {
    // get .less file
    // const paths = await glob(['./es/**/*.less', './lib/**/*.less'], { absolute: true });
    // get .scss file
    const paths = await glob(['./es/**/*.scss', './lib/**/*.scss'], { absolute: true });
    codes = await Promise.all(paths.map(path => fs.readFile(path, 'utf-8')));
    // compile less
    // codes = await compileLess(codes, paths);
    // compile scss
    codes = await compileScss(codes, paths);
    codes = await compilePostcss(codes, paths);
    codes = await compileCsso(codes);

    await dest(codes, paths);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

compile();
