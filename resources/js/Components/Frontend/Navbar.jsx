import React from 'react';
import { Link } from '@inertiajs/react';

const Navbar = () => {
    return (
        <nav className="container relative max-w-screen-xl py-4 lg:py-10">
            <div className="flex flex-col justify-between w-full lg:flex-row lg:items-center">
                {/* Logo & Toggler Button here */}
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <Link href="/">
                        <img src="/assets/svgs/logo-type.svg" alt="tickety-assets" />
                    </Link>
                    {/* RESPONSIVE NAVBAR BUTTON TOGGLER */}
                    <div className="block lg:hidden">
                        <button className="p-1 outline-none" id="navbarToggler" data-target="#navigation">
                            <svg className="text-dark w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Nav Menu */}
                <div className="hidden w-full lg:block" id="navigation">
                    <div className="flex flex-col items-baseline gap-4 mt-6 lg:justify-between lg:flex-row lg:items-center lg:mt-0">
                        <div className="flex flex-col w-full ml-auto lg:w-auto gap-4 lg:gap-[50px] lg:items-center lg:flex-row">
                            <Link href="/flash-sale" className="nav-link-item">Flash Sale</Link>
                            <Link href="/newest" className="nav-link-item">Newest</Link>
                            <Link href="/categories" className="nav-link-item">Categories</Link>
                            <Link href="/stories" className="nav-link-item">Stories</Link>
                        </div>
                        <div className="flex flex-col w-full ml-auto lg:w-auto lg:gap-12 lg:items-center lg:flex-row">
                            <Link href="/login" className="btn-primary">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
