import {
    ChevronRightOutline,
    MenuAlt4Outline,
} from '@graywolfai/react-heroicons';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Navbar = ({ ultrawide }) => {
    const [scrollPos, setScrollPos] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    //if (typeof window !== 'undefined') {
        useEffect(() => {
            const handle = () => setScrollPos(window.scrollY);

            window.addEventListener('scroll', handle);
            return () => window.removeEventListener('scroll', handle);
        });
    //}

    return (
        <>
            <div
                className={`navbar h-14 bg-white dark:bg-gray-900 px-4 flex items-center text-black dark:text-white sm:hidden fixed w-full transition duration-300 ease-in-out z-50 ${
                    scrollPos > 0 ? ' shadow-lg' : ''
                }`}
            >
                <button
                    className="menuIcon w-6 h-6 mr-3"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MenuAlt4Outline />
                </button>
                <Transition
                    show={isOpen}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="absolute top-0 left-0 w-full z-50 p-3">
                        <div className="p-5 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <Link
                                        to="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                    >
                                        <a href="https://rockylinux.org">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M23.3322 15.9572C23.7648 14.7182 24 13.3866 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 15.2793 1.31537 18.2513 3.44728 20.4173L15.6198 8.2448L23.3322 15.9572Z"
                                                    fill="#10B981"
                                                />
                                                <path
                                                    d="M21.1403 19.7757L15.6198 14.2552L6.97472 22.9003C8.50336 23.6062 10.2057 24 12 24C15.6611 24 18.9392 22.3605 21.1403 19.7757Z"
                                                    fill="#10B981"
                                                />
                                            </svg>
                                        </a>
                                        <Link
                                            to="/"
                                            className="flex items-center"
                                        >
                                            <div className="w-4 h-4 mx-2">
                                                <ChevronRightOutline />
                                            </div>
                                            <span className="font-bold font-display">
                                                Documentation
                                            </span>
                                        </Link>
                                    </Link>
                                </div>
                                <div>
                                    <button
                                        aria-label="Close menu"
                                        onClick={() => setIsOpen(!isOpen)}
                                        title="Close menu"
                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 dark:hover:bg-gray-700 dark:focus:bg-gray-700 focus:outline-none focus:shadow-outline"
                                    >
                                        <svg
                                            className="w-5 text-gray-600 dark:text-white"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <nav>
                                <ul className="space-y-4">
                                    <li>
                                        <Link
                                            to="/"
                                            aria-label="Home"
                                            title="Home"
                                            className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/site-index"
                                            aria-label="Index"
                                            title="Site Index"
                                            className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                                        >
                                            Index
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/README"
                                            aria-label="Guides"
                                            title="Guides"
                                            className="font-medium tracking-wide text-gray-700 dark:text-white transition-colors duration-200 hover:text-green-500"
                                        >
                                            Contributing
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </Transition>
                <a href="https://rockylinux.org">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.3322 15.9572C23.7648 14.7182 24 13.3866 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 15.2793 1.31537 18.2513 3.44728 20.4173L15.6198 8.2448L23.3322 15.9572Z"
                            fill="#10B981"
                        />
                        <path
                            d="M21.1403 19.7757L15.6198 14.2552L6.97472 22.9003C8.50336 23.6062 10.2057 24 12 24C15.6611 24 18.9392 22.3605 21.1403 19.7757Z"
                            fill="#10B981"
                        />
                    </svg>
                </a>
                <Link to="/" className="flex items-center">
                    <div className="w-4 h-4 mx-2">
                        <ChevronRightOutline />
                    </div>
                    <span className="font-bold font-display">
                        Documentation
                    </span>
                </Link>
            </div>

            <div
                className={`navbar h-14 bg-white dark:bg-gray-900 px-4 flex justify-center items-center text-black dark:text-white hidden sm:flex fixed w-full transition duration-300 ease-in-out z-50 ${
                    scrollPos > 0 ? ' shadow-md' : ''
                }`}
            >
                <div
                    id="inner"
                    className={`${
                        ultrawide ? '' : 'max-w-screen-2xl'
                    } w-full flex items-center justify-between`}
                >
                    <div className="flex items-center">
                        <a href="https://rockylinux.org">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.3322 15.9572C23.7648 14.7182 24 13.3866 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 15.2793 1.31537 18.2513 3.44728 20.4173L15.6198 8.2448L23.3322 15.9572Z"
                                    fill="#10B981"
                                />
                                <path
                                    d="M21.1403 19.7757L15.6198 14.2552L6.97472 22.9003C8.50336 23.6062 10.2057 24 12 24C15.6611 24 18.9392 22.3605 21.1403 19.7757Z"
                                    fill="#10B981"
                                />
                            </svg>
                        </a>
                        <Link to="/" className="flex items-center mr-8">
                            <div className="w-4 h-4 mx-2">
                                <ChevronRightOutline />
                            </div>
                            <span className="font-bold font-display">
                                Documentation
                            </span>
                        </Link>
                        <div className="flex items-center">
                            <Link
                                className="text-sm mr-4"
                                to="/"
                                activeClassName="font-bold"
                            >
                                Home
                            </Link>
                            <Link
                                className="text-sm mr-4"
                                to="/site-index"
                                partiallyActive={true}
                                activeClassName="font-bold"
                            >
                                Index
                            </Link>
                            <Link
                                className="text-sm mr-4"
                                to="/README"
                                partiallyActive={true}
                                activeClassName="font-bold"
                            >
                                Contributing
                            </Link>
                        </div>
                    </div>
                    <div>
                        <a href="https://github.com/rocky-linux/docs.rockylinux.org">
                            <svg className="w-6 dark:text-white text-black fill-current" fill="none" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;