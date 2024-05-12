import DashboardLayout from '@/Layouts/DashboardLayout'
import { Head } from '@inertiajs/react'

const Dashboard = () => {
    return (
        <>
            <Head title="Dashboard" />
            <p>Dashboard</p>
        </>
    )
}

Dashboard.layout = page => <DashboardLayout children={page} title="Inertia" />

export default Dashboard
