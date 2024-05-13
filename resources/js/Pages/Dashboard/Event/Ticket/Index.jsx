import DashboardLayout from '@/Layouts/DashboardLayout'
import { Link } from '@inertiajs/react';

const Index = ({ event, tickets, success }) => {
    console.log(tickets)
    return (
        <div>
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Event &raquo; {event.name} &raquo; Ticket
            </h2>

            <div className="my-10">
                <Link
                    href={route('admin.events.tickets.create', { event: event.id })}
                    className="px-4 py-2 font-bold text-white bg-green-500 rounded"
                >
                    + Buat Ticket
                </Link>
            </div>
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    {success && (
                        <div className="px-4 py-2 mb-4 text-white bg-green-500 rounded">
                            {success}
                        </div>
                    )}
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th style={{ maxWidth: '1%' }} className="px-6 py-3">ID</th>
                                <th className="px-6 py-3">Name</th>
                                <th className="px-6 py-3">Price</th>
                                <th className="px-6 py-3">Qty</th>
                                <th className="px-6 py-3">Max. Buy</th>
                                <th style={{ maxWidth: '1%' }} className="px-6 py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {tickets.data.length > 0 ? (
                                tickets.data.map((ticket, index) => (
                                    <tr key={ticket.id} className="border-b">
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <td className="px-6 py-4">{ticket.name}</td>
                                        <td className="px-6 py-4">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(ticket.price).replace(/,00$/, '')}</td>

                                        <td className="px-6 py-4">{ticket.quantity}</td>
                                        <td className="px-6 py-4">{ticket.max_buy}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-2 justify-center">
                                                <Link
                                                    href={route('admin.events.tickets.edit', { event: event.id, ticket: ticket.id })}
                                                    className="inline-block px-4 py-2 text-white bg-blue-500 rounded"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route('admin.events.tickets.destroy', { event: event.id, ticket: ticket.id })}
                                                    className="inline-block px-4 py-2 text-white bg-red-500 rounded"
                                                    method="delete"
                                                    as="button"
                                                >
                                                    Hapus
                                                </Link>
                                            </div>

                                            {/* <form
                                                action={route('admin.events.tickets.destroy', { event: event.id, ticket: ticket.id })}
                                                method="POST"
                                                className="inline-block"
                                                onSubmit={e => {
                                                    e.preventDefault();
                                                    if (window.confirm('Hapus ticket ' + ticket.name + '?')) {
                                                        document.getElementById('delete-form-' + ticket.id).submit();
                                                    }
                                                }}
                                            >
                                                <input type="hidden" name="_method" value="DELETE" />
                                                <input type="hidden" name="_token" value={csrf_token} />
                                                <button type="submit" className="px-4 py-2 text-white bg-red-500 rounded">
                                                    Hapus
                                                </button>
                                            </form> */}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center">Tidak ada tiket tersedia.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="mt-4">
                        {/* {tickets.links && <>{tickets.links}</>} */}
                    </div>
                </div>
            </div>
        </div>
    );
};


Index.layout = page => <DashboardLayout children={page} title="Inertia" />

export default Index
