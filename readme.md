# Laravel-React
An example app using [Laravel 5.7](https://laravel.com), [React](https://facebook.github.io/react), [react-router](https://github.com/reactjs/react-router) and [react-refetch](https://github.com/heroku/react-refetch).

### UP & RUNNING
- Clone the repo
- `composer install`
- `npm install && npm run prod`
- `cp .env.example .env`
- `php artisan key:generate`
- `touch database/database.sqlite && php artisan migrate --seed`
- `php artisan serve`
- Open your browser to `http://localhost:8000`
