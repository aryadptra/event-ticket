import { Link } from '@inertiajs/react'
import React from 'react'
import { HiOutlineMenu } from 'react-icons/hi'

export default function Topbar({ toggleSidebar }) {
    return (
        <div className='pb-3 mb-8 border-b flex flex-row items-center justify-between'>
            <div className='flex space-x-10'>
                <button onClick={toggleSidebar} className='text-black'>
                    <HiOutlineMenu className="h-6 w-6" />
                </button>
                <div className="">
                    <div>Company</div>
                    <div className='font-semibold'>Sinar Kasih</div>
                </div>
            </div>
            <div>
                <Link href={route('logout')} method="post" className='bg-dark-indigo text-white px-6 py-3 rounded-md' as="button">Add Event</Link>
            </div>
        </div>
    )
}
