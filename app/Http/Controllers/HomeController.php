<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\User;
use App\Models\Category;


class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $events = Event::all();
        $categories = Category::all();
        return Inertia::render('Home', [
            'events' => $events,
            'categories' => $categories
        ]);
    }
}
