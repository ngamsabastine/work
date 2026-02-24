import React from 'react';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/forms/ContactForm';
import {
    ChatBubbleBottomCenterTextIcon,
    EnvelopeIcon,
    MapPinIcon,
    DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export const metadata = {
    title: 'Contact Us | BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE',
    description: 'Get in touch with us for bulk orders, custom inquiries, or technical documentation for peptides and gear.',
};

export default function ContactPage() {
    return (
        <div className="py-12 md:py-24 bg-secondary-50/50 min-h-screen">
            <Container>
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Contact Info */}
                    <div className="lg:col-span-5">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 mb-8 leading-tight tracking-tight">
                            Let&apos;s Advance Your <br />
                            <span className="text-primary-700">Research Together</span>
                        </h1>
                        <p className="text-lg md:text-xl text-secondary-900 font-bold leading-relaxed mb-12 opacity-90">
                            Our technical support team is available to assist you with detailed
                            analytical specifications, global shipping logistics, and institutional procurement workflows.
                        </p>

                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 md:p-8 bg-white rounded-3xl border-2 border-secondary-200 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="p-4 bg-primary-50 rounded-2xl border border-primary-100 shrink-0">
                                    <EnvelopeIcon className="h-8 w-8 text-primary-700" />
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="text-xl font-black text-secondary-900 mb-1">Email Support</h4>
                                    <p className="text-secondary-800 font-bold text-sm mb-2">For technical and analytical documentation.</p>
                                    <a href="mailto:greymarketpeptides@gmail.com" className="text-primary-700 font-extrabold text-base md:text-lg hover:underline decoration-2 underline-offset-4 wrap-break-word">
                                        greymarketpeptides@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 md:p-8 bg-primary-950 rounded-3xl text-white shadow-xl border border-primary-900 overflow-hidden relative group transition-all duration-300">
                                <div className="p-4 bg-primary-800/40 rounded-2xl border border-primary-700/30 relative z-10 shrink-0">
                                    <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-primary-400" />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-black mb-1 tracking-tight">WhatsApp Fast Track</h4>
                                    <p className="text-primary-100 font-bold text-sm mb-4">Instant communication for logistics tracking.</p>
                                    <a
                                        href="https://wa.me/+17134271338"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white rounded-xl font-black text-base hover:bg-[#128C7E] transition-all shadow-lg active:scale-95"
                                    >
                                        <DevicePhoneMobileIcon className="h-5 w-5 mr-2" />
                                        Secure Lab Chat
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-6 md:p-8 bg-white rounded-3xl border-2 border-secondary-200 shadow-sm transition-all duration-300">
                                <div className="p-4 bg-primary-50 rounded-2xl border border-primary-100 shrink-0">
                                    <MapPinIcon className="h-8 w-8 text-primary-700" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-black text-secondary-900 mb-1">Administrative Center</h4>
                                    <p className="text-secondary-900 font-bold leading-relaxed text-sm">
                                        BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE HQ <br />
                                        123 Innovation Drive, RTP <br />
                                        NC 27709, United States
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7 lg:sticky lg:top-32 w-full max-w-2xl mx-auto lg:mx-0">
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </div>
    );
}
