<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\TicketRequest;
use App\Models\Event;
use Illuminate\Contracts\View\View;
use Inertia\Inertia;

class TicketController extends Controller
{ /**
  * Display a listing of the resource.
  */
    public function index(Event $event)
    {
        $tickets = Ticket::where('event_id', $event->id)->paginate(10);

        // return view('admin.events.tickets.index', compact('event', 'tickets'));
        return Inertia::render('Dashboard/Event/Ticket/Index', compact('event', 'tickets'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Event $event)
    {
        return Inertia::render('Dashboard/Event/Ticket/Create', compact('event'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Event $event, TicketRequest $request): RedirectResponse
    {
        // Add event id
        $request->merge(['event_id' => $event->id]);

        // Create ticket
        Ticket::create($request->all());

        // Return to index
        return redirect()->route('admin.events.tickets.index', $event->id)->with('success', 'Ticket created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event, string $id)
    {
        return redirect()->route('admin.events.tickets.edit', $id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event, Ticket $ticket)
    {
        return Inertia::render('Dashboard/Event/Ticket/Edit', compact('event', 'ticket'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Event $event, TicketRequest $request, string $id)
    {
        // Update ticket
        Ticket::find($id)->update($request->all());

        // Return to index
        return redirect()->route('admin.events.tickets.index', $event->id)->with('success', 'Ticket updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event, Ticket $ticket)
    {
        // Delete ticket
        $ticket->delete();

        // Return to index
        return redirect()->route('admin.events.tickets.index', $event->id)->with('success', 'Ticket deleted');
    }
}
