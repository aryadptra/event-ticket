import Pagination from '@/Components/Dashboard/Pagination'
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, Link } from '@inertiajs/react'

const Event = ({ events }) => {
    console.log(events)
    return (
        <>
            <Head title="Event" />
            <div className="mb-10">
                <Link href={route('admin.events.create')} className="px-3 py-2 font-semibold text-white bg-dark-indigo rounded">
                    + Create Event
                </Link>
            </div>
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    {events.data.length > 0 ? (
                        <>
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th style={{ maxWidth: '1%' }} className="px-6 py-3">No</th>
                                        <th className="px-6 py-3">Nama</th>
                                        <th className="px-6 py-3">Kategori</th>
                                        <th className="px-6 py-3">Tanggal</th>
                                        <th className="px-6 py-3">Durasi</th>
                                        <th style={{ maxWidth: '1%' }} className="px-6 py-3">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.data.map((event, index) => (
                                        <tr key={event.id} className="border-b">
                                            <td className="px-6 py-4">{index + 1}</td>
                                            <td className="px-6 py-4">{event.name}</td>
                                            <td className="px-6 py-4">{event.category?.name || '-'}</td>
                                            <td className="px-6 py-4">{new Date(event.start_time).toLocaleDateString()} {new Date(event.start_time).toTimeString().slice(0, 5)}</td>
                                            <td className="px-6 py-4">{event.duration} jam</td>
                                            <td className="px-6 py-4 space-y-1 text-center">
                                                {/* <Link href={route('admin.events.tickets.index', event.id)} className="block px-2 py-1 text-white bg-green-500 rounded">
                                                Tiket
                                            </Link> */}
                                                {/* <Link href={route('admin.events.transactions.index', event.id)} className="block px-2 py-1 text-white bg-yellow-500 rounded">
                                                Transaksi
                                            </Link> */}
                                                {/* <Link href={route('admin.events.scan', event.id)} className="block px-2 py-1 text-white bg-purple-500 rounded">
                                                Scan
                                            </Link> */}
                                                <Link href={route('admin.events.edit', event.id)} className="block px-2 py-1 text-white bg-blue-500 rounded">
                                                    Edit
                                                </Link>
                                                <Link href={route('admin.events.destroy', event.id)} className="block px-2 py-1 text-white bg-blue-500 rounded w-full" method='delete' as='button'>
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination events={events} />
                        </>
                    ) : (
                        <p className="text-center">Tidak ada event.</p>
                    )}
                    <div className="mt-4">
                        {/* Tampilkan pagination */}
                        {/* {events.links()} */}
                    </div>
                </div>
            </div>
        </>
    )
}

Event.layout = page => <DashboardLayout children={page} title="Inertia" />

export default Event
