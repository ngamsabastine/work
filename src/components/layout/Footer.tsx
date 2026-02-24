import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary-900 text-secondary-100 pt-16 pb-8 border-t border-secondary-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand and Description */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <div className="relative h-14 w-14 shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-lg font-black tracking-tighter text-white uppercase max-w-[250px] leading-tight">
                                BUY PEPTIDES GEARS AND STEROIDS <span className="text-primary-400">FROM GRAY MARKETS ONLINE</span>
                            </span>
                        </Link>
                        <p className="text-secondary-400 max-w-md leading-relaxed">
                            Premium grade research peptides and chemicals for laboratory investigation.
                            We are committed to providing the highest purity compounds and complete
                            transparency through comprehensive testing and documentation in the gray market space.
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
                    <p>© {new Date().getFullYear()} BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE. All rights reserved.</p>
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
