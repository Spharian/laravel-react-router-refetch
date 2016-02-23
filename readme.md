# Laravel-React
An example app using [Laravel 5.2](https://laravel.com), [React](https://facebook.github.io/react), [react-router](https://github.com/reactjs/react-router) and [react-refetch](https://github.com/heroku/react-refetch).

### UP & RUNNING
- Clone the repo
- `composer install`
- `npm install`
- `touch database/database.sqlite`
- `cp .env.example .env`
- `php artisan key:generate`
- `php artisan migrate --seed`
- `gulp watch`
- `php artisan serve`
- Open your browser to `http://localhost:8000`

### Additional infos
This is using an older version of [Elixir](https://laravel.com/docs/5.2/elixir), as I prefer [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) over [BrowserSync](https://www.browsersync.io). You can change it if you wish to, but don't forget to adapt the gulpfile.
