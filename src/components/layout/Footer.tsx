import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { BeakerIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary-900 text-secondary-100 pt-16 pb-8 border-t border-secondary-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand and Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-6">
                            <BeakerIcon className="h-8 w-8 text-primary-400" />
                            <span className="text-2xl font-bold tracking-tight text-white">
                                BINESS <span className="text-primary-400 font-medium">RESEARCH</span>
                            </span>
                        </Link>
                        <p className="text-secondary-400 max-w-md leading-relaxed">
                            Premium grade research peptides and chemicals for laboratory investigation.
                            We are committed to providing the highest purity compounds and complete
                            transparency through comprehensive testing and documentation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/products" className="hover:text-primary-400 transition-colors">All Products</Link></li>
                            <li><Link href="/education" className="hover:text-primary-400 transition-colors">Education Center</Link></li>
                            <li><Link href="/quality" className="hover:text-primary-400 transition-colors">Quality Assurance</Link></li>
                            <li><Link href="/faq" className="hover:text-primary-400 transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Compliance */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Compliance</h4>
                        <ul className="space-y-4">
                            <li><Link href="/education/grey-market" className="hover:text-primary-400 transition-colors">Grey Market Information</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
                            <li className="text-secondary-400 text-sm">
                                Research Use Only. Not for human consumption.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-secondary-500">
                    <p>© {new Date().getFullYear()} Biness Research. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-secondary-300">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-secondary-300">Terms of Service</Link>
                    </div>
                </div>

                {/* Mandatory Disclaimer */}
                <div className="mt-8 p-4 bg-secondary-950/50 rounded-lg border border-red-900/20 text-xs text-secondary-400 text-center uppercase tracking-widest">
                    Disclaimer: All products listed on this website are for LABORATORY RESEARCH USE ONLY.
                    None of these products are intended for human consumption or medical use.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
