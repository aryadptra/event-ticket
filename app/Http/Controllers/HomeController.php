<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Category;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // Ambil data events dari model Event sesuai dengan yang Anda lakukan di fetchEvents()
        $events = Event::upcoming()->take(3)->with('category')->get();

        // Ambil data categories dari model Category sesuai dengan yang Anda lakukan di fetchCategories()
        $categories = Category::sortByMostEvents()->take(4)->get();

        // Render tampilan menggunakan Inertia, sambil mengirimkan data events dan categories
        return Inertia::render('Home', [
            'events' => $events,
            'categories' => $categories
        ]);
    }
}
