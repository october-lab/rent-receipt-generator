import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-full bg-coral-100 flex items-center justify-center">
                                <span className="text-coral-600 font-medium">RR</span>
                            </div>
                            <span className="text-gray-900 font-medium">Rent Receipt Generator</span>
                        </Link>
                    </div>

                    <nav className="flex space-x-8">
                        <Link
                            to="/"
                            className={`text-sm font-medium ${isActive('/')
                                    ? 'text-coral-600'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/blog"
                            className={`text-sm font-medium ${isActive('/blog')
                                    ? 'text-coral-600'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Blog
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
} 