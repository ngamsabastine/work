'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Bars3Icon, XMarkIcon, BeakerIcon } from '@heroicons/react/24/outline';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Education', href: '/education' },
    { name: 'Quality', href: '/quality' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 glass border-b border-secondary-200">
            <Container>
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-primary-600 rounded-xl group-hover:bg-primary-500 transition-colors shadow-lg shadow-primary-200/50">
                            <BeakerIcon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary-950 via-primary-800 to-primary-900">
                            BINESS <span className="text-primary-600 font-medium">RESEARCH</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-secondary-800 hover:text-primary-700 font-semibold transition-colors relative group py-2"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-secondary-900 hover:text-primary-700 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-7 w-7" />
                            ) : (
                                <Bars3Icon className="h-7 w-7" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-secondary-200 shadow-2xl animate-fade-in overflow-y-auto max-h-[calc(100vh-80px)]">
                    <Container className="py-8 flex flex-col space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xl font-bold text-secondary-900 hover:text-primary-700 hover:bg-primary-50 px-4 py-4 rounded-xl transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 px-4">
                            <Link
                                href="/contact"
                                className="w-full flex justify-center py-4 bg-primary-700 text-white font-bold rounded-xl"
                                onClick={() => setIsOpen(false)}
                            >
                                Laboratory Inquiry
                            </Link>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
};

export default Header;
