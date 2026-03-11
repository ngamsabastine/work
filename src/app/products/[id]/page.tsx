import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/data';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import {
    BeakerIcon,
    ShieldCheckIcon,
    DocumentArrowDownIcon,
    ArrowLeftIcon,
    AcademicCapIcon,
    ScaleIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';

type Params = Promise<{ id: string }>;

interface ProductPageProps {
    params: Params;
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params;
    const product = await getProductById(id);
    if (!product) return { title: 'Product Not Found' };

    return {
        title: `${product.name} | BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE`,
        description: product.description.substring(0, 160),
    };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="py-12 md:py-20 bg-secondary-50/50 min-h-screen">
            <Container>
                <Link href="/products" className="inline-flex items-center text-secondary-900 hover:text-primary-700 mb-10 transition-all group font-black uppercase tracking-widest text-xs">
                    <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Catalog
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left Column: Icons & Visuals */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="aspect-square bg-white rounded-[2.5rem] border-2 border-secondary-200 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-primary-900/5">
                            <div className="absolute inset-0 bg-grid opacity-10"></div>
                            <div className="p-16 bg-primary-50 rounded-full relative z-10 border border-primary-100">
                                <BeakerIcon className="h-24 w-24 md:h-32 md:w-32 text-primary-700" />
                            </div>

                            {/* Lab Grade Badge */}
                            <div className="absolute top-8 right-8 px-5 py-2.5 bg-primary-700 rounded-2xl text-white font-black text-xs tracking-[0.2em] shadow-xl shadow-primary-900/20">
                                PURITY VERIFIED
                            </div>
                        </div>

                        {/* Quick Specs */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: 'Mechanism', value: product.mechanism, icon: ClockIcon },
                                { label: 'Half-life', value: product.halfLife, icon: ScaleIcon },
                                { label: 'Form', value: product.administration, icon: BeakerIcon },
                                { label: 'Purity', value: '≥98% HPLC', icon: ShieldCheckIcon },
                            ].map((spec, i) => (
                                spec.value && (
                                    <div key={i} className="p-5 bg-white rounded-2xl border-2 border-secondary-100 shadow-sm">
                                        <span className="block text-[10px] text-secondary-900 uppercase tracking-widest font-black mb-2 opacity-60">{spec.label}</span>
                                        <span className="text-secondary-950 font-black text-sm md:text-base leading-tight">{spec.value}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Details & Ordering */}
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <span className="inline-flex items-center px-4 py-1.5 rounded-xl text-[10px] font-black bg-primary-50 text-primary-800 uppercase tracking-[0.2em] mb-6 border-2 border-primary-100">
                                {product.type}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-secondary-900 mb-8 leading-none tracking-tight">{product.name}</h1>

                            {((product.alsoKnownAs && product.alsoKnownAs.length > 0) || product.fullName) && (
                                <div className="mb-8 p-6 bg-secondary-100/50 rounded-2xl border-l-4 border-primary-600">
                                    {product.fullName && (
                                        <p className="text-secondary-950 font-black text-lg mb-2">
                                            {product.fullName}
                                        </p>
                                    )}
                                    {product.alsoKnownAs && (
                                        <p className="text-secondary-900 font-bold text-sm">
                                            <span className="text-secondary-900 uppercase text-[10px] tracking-widest mr-3 font-black opacity-50">IUPAC / Synonyms:</span>
                                            {product.alsoKnownAs.join(' • ')}
                                        </p>
                                    )}
                                </div>
                            )}

                            <p className="text-lg md:text-xl text-secondary-950 leading-relaxed max-w-2xl font-bold opacity-90">
                                {product.description}
                            </p>
                        </div>

                        {/* Pricing / Variants */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-secondary-200 shadow-2xl shadow-primary-900/5 relative overflow-hidden">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                                <h3 className="text-2xl font-black text-secondary-900 flex items-center">
                                    <ClockIcon className="h-6 w-6 mr-3 text-primary-700" />
                                    Analytical Batch Options
                                </h3>
                                <div className="flex items-center px-4 py-2 bg-green-50 rounded-xl border border-green-100">
                                    <ShieldCheckIcon className="h-4 w-4 text-green-700 mr-2" />
                                    <span className="text-[10px] font-black text-green-800 uppercase tracking-widest">In Stock & Verified</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {product.variants.map((v) => (
                                    <div key={v.sku} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-secondary-50 border-2 border-secondary-100 hover:border-primary-400 transition-all duration-300 gap-6">
                                        <div className="space-y-1">
                                            <span className="block font-black text-secondary-950 text-lg uppercase tracking-tight">{v.strength} <span className="text-secondary-400 font-bold ml-1">/ {v.packSize}</span></span>
                                            <span className="inline-block px-2 py-0.5 bg-secondary-200 rounded text-[10px] font-black text-secondary-600 tracking-widest">BATCH: {v.sku}</span>
                                        </div>
                                        <div className="flex items-end sm:items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-secondary-200 pt-4 sm:pt-0">
                                            <div className="text-right">
                                                <span className="block text-2xl font-black text-primary-700">${v.price} <span className="text-sm font-bold opacity-60">{v.priceUnit}</span></span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 grid sm:grid-cols-2 gap-4">
                                <Button href="/contact" size="lg" className="w-full py-5 text-lg font-black rounded-2xl shadow-xl shadow-primary-900/20">
                                    Submit Research Inquiry
                                </Button>
                                <a
                                    href="mailto:greymarketpeptides@gmail.com"
                                    className="flex items-center justify-center px-8 py-5 border-2 border-primary-200 rounded-2xl text-primary-700 font-black hover:bg-primary-50 transition-all active:scale-[0.98]"
                                >
                                    <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                                    Request Analytics (COA)
                                </a>
                            </div>
                        </div>

                        {/* Research Areas */}
                        {product.researchAreas && (
                            <div className="space-y-6">
                                <h3 className="text-xl font-black text-secondary-900 uppercase tracking-widest flex items-center">
                                    <AcademicCapIcon className="h-6 w-6 mr-3 text-primary-700" />
                                    Validated Research Areas
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {product.researchAreas.map((area) => (
                                        <span key={area} className="px-5 py-2.5 bg-primary-50 text-primary-900 border border-primary-100 rounded-xl text-sm font-black uppercase tracking-wider">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Scientific Disclaimer */}
                        <div className="p-8 bg-red-50 rounded-3xl border-2 border-red-200/50 relative overflow-hidden">
                            <div className="flex items-start space-x-5 relative z-10">
                                <div className="p-3 bg-red-600 rounded-xl shadow-lg shadow-red-900/10">
                                    <ScaleIcon className="h-6 w-6 text-white shrink-0" />
                                </div>
                                <div>
                                    <h4 className="text-red-900 font-black text-sm uppercase tracking-widest mb-2">Notice for Investigators</h4>
                                    <p className="text-sm md:text-base text-red-950 leading-relaxed font-bold opacity-80">
                                        This compound is supplied exclusively for internal laboratory research by qualified professional personnel.
                                        It is not for human therapeutic or diagnostic administration.
                                        Compliance with local regulatory guidelines is the sole responsibility of the investigator.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
