import { Link } from '@inertiajs/react';
import React from 'react';
import ApplicationLogo from '../ApplicationLogo';
import { HiOutlineHome, HiOutlineTicket } from "react-icons/hi";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`lg:block lg:w-[18%] ${isOpen ? 'lg:block' : 'lg:hidden'}`}>
            <div className="min-h-screen pb-12 bg-dark-indigo">
                <div className="py-4 text-center">
                    <div className="flex justify-center">
                        <div className="px-6 py-2">
                            <ApplicationLogo />
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="px-3">
                        <div className="py-2 flex flex-col space-y-2">
                            <Link className="flex items-center justify-start px-6 py-3 rounded-md text-lg font-semibold text-white hover:bg-gray-500 hover:text-butter-yellow" href={route('dashboard')}>
                                <HiOutlineHome className="mr-2" />
                                Dashboard
                            </Link>
                            <Link className="flex items-center justify-start px-6 py-3 rounded-md text-lg font-semibold text-white hover:bg-gray-500 hover:text-butter-yellow" href={route('dashboard')}>
                                <HiOutlineTicket className="mr-2" />
                                Events
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
