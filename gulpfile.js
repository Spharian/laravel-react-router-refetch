var elixir = require('laravel-elixir');

require('laravel-elixir-livereload');

elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.sass('app.scss')
       .browserify('app.js')
       .livereload();
});
