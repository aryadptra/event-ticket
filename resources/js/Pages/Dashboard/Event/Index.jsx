import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head, Link } from '@inertiajs/react'

const Event = ({ events }) => {
    return (
        <>
            <Head title="Event" />
            {/* <div className="mb-10">
                        <Link href={route('admin.events.create')} className="px-2 py-1 font-bold text-white bg-green-500 rounded">
                            + Buat Event
                        </Link>
                    </div> */}
            <div className="overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    {events.data.length > 0 ? (
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th style={{ maxWidth: '1%' }} className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Nama</th>
                                    <th className="px-6 py-3">Kategori</th>
                                    <th className="px-6 py-3">Tanggal</th>
                                    <th className="px-6 py-3">Durasi</th>
                                    <th style={{ maxWidth: '1%' }} className="px-6 py-3">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.data.map(event => (
                                    <tr key={event.id} className="border-b">
                                        <td className="px-6 py-4">{event.id}</td>
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
                                            {/* <form action={route('admin.events.destroy', event.id)} method="POST" className="block" onSubmit={() => confirm(`Hapus event ${event.name}?`)}>
                                                <input type="hidden" name="_method" value="DELETE" />
                                                <button type="submit" className="w-full px-2 py-1 text-white bg-red-500 rounded">
                                                    Hapus
                                                </button>
                                            </form>  */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
