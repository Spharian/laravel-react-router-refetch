<?php

namespace App\Http\Controllers;

use App\Post;
use App\Http\Controllers\Controller;

class PostsController extends Controller {
    public function index()
    {
        return Post::all();
    }

    public function show($id)
    {
        return Post::find($id);
    }
}
