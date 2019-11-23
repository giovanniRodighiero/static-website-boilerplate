const mix = require('laravel-mix');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
require('laravel-mix-ejs');

const homepage = require('./src/data/homepage');
const about = require('./src/data/about');
const contacts = require('./src/data/contacts');

const contents = {
    homepage,
    about,
    contacts,
    timestamp: Date.now()
};

if (!mix.inProduction()) {
    mix
        // set public path for manifest file
        .setPublicPath('dist/')

        // bundle js: (from, to)
        .js('src/scripts/index.js', 'dist/assets')

        // compile sass and add css3 prefixes: (from, to)
        .sass('src/styles/index.scss', 'dist/assets')

        // compile ejs templates: (from, to, contents, options)
        .ejs('src/views', 'dist', contents, { rmWhitespace: true, partials: 'src/views/partials' })

        // server assets and sync with browser sync
        .browserSync({ server: 'dist', proxy: null })
} else {
    mix
        // set public path for manifest file
        .setPublicPath('dist/')

        // bundle js: (from, to)
        .js('src/scripts/index.js', 'dist/assets')

        // compile sass and add css3 prefixes: (from, to)
        .sass('src/styles/index.scss', 'dist/assets')

        // compile ejs templates: (from, to, contents, options)
        .ejs('src/views', 'dist', contents,
            { rmWhitespace: true, partials: 'src/views/partials' }
        )

        // clean dist directory and compress assets
        .webpackConfig({ plugins: [ new CleanWebpackPlugin(), new CompressionPlugin()] })
}

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.preact(src, output); <-- Identical to mix.js(), but registers Preact compilation.
// mix.coffee(src, output); <-- Identical to mix.js(), but registers CoffeeScript compilation.
// mix.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.test');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Mix's default.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by Mix.
// mix.dump(); <-- Dump the generated webpack config object to the console.
// mix.extend(name, handler) <-- Extend Mix's API with your own components.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
