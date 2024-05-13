<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\EventUpdateRequest;
use App\Models\Event;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\EventRequest;
use App\Models\Category;
use App\Models\TransactionDetail;
use Illuminate\Contracts\View\View;
use Inertia\Inertia;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::with('category')->paginate(10);

        return Inertia::render('Dashboard/Event/Index', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();

        return Inertia::render('Dashboard/Event/Create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EventRequest $request)
    {
        // Create slug
        $request->merge([
            'slug' => Str::slug($request->name),
        ]);

        // Handle is_popular checkbox
        $request->merge([
            'is_popular' => $request->has('is_popular') ? true : false,
        ]);

        // Upload multiple photos
        if ($request->hasFile('files')) {
            $photos = [];

            foreach ($request->file('files') as $file) {
                $photos[] = $file->store('events', 'public');
            }

            $request->merge([
                'photos' => $photos,
            ]);
        }

        // Create event
        Event::create($request->except('files'));

        // Return to index
        return redirect()->route('admin.events.index')->with('success', 'Event created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): RedirectResponse
    {
        return redirect()->route('admin.events.edit', $id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        $categories = Category::all();

        return Inertia::render('Dashboard/Event/Edit', compact('event', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EventUpdateRequest $request, string $id)
    {

        // Create slug
        $request->merge([
            'slug' => Str::slug($request->name),
        ]);

        // Handle is_popular checkbox
        $request->merge([
            'is_popular' => $request->has('is_popular') ? true : false,
        ]);


        // Upload multiple photos if exist
        // if ($request->hasFile('files')) {
        //     $photos = [];

        //     foreach ($request->file('files') as $file) {
        //         $photos[] = $file->store('events', 'public');
        //     }

        //     $request->merge([
        //         'photos' => $photos,
        //     ]);
        // }


        // Update event
        Event::find($id)->update($request->except('files'));

        // Return to index
        return redirect()->route('admin.events.index')->with('success', 'Event updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event): RedirectResponse
    {
        // Delete event
        $event->delete();

        // Return to index
        return redirect()->route('admin.events.index')->with('success', 'Event deleted');
    }

    public function scan(Event $event): View
    {
        return view('admin.events.scan', compact('event'));
    }

    public function scanAPI(Event $event)
    {
        request()->validate([
            'code' => 'required|exists:transaction_details,code',
        ]);

        $transactionDetail = TransactionDetail::where('code', request()->code)->first();

        if ($transactionDetail) {
            $transactionDetail->update([
                'is_redeemed' => true,
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Check in success',
            ]);
        }
    }
}
