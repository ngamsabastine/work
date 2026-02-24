'use client';

import React, { useState, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { Product } from '@/types';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface ProductListProps {
    initialProducts: Product[];
    categories: string[];
}

export default function ProductListing({ initialProducts, categories }: ProductListProps) {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = useMemo(() => {
        return initialProducts.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.id.toLowerCase().includes(search.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || product.type === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [search, selectedCategory, initialProducts]);

    return (
        <div className="py-12 md:py-20 bg-secondary-50/50 min-h-screen">
            <Container>
                <div className="mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-secondary-900 mb-6 tracking-tight">Research Catalog</h1>
                    <p className="text-secondary-900 text-lg md:text-xl max-w-3xl leading-relaxed font-medium opacity-90">
                        Navigate our comprehensive index of high-purity laboratory reagents.
                        Every compound is HPLC-verified for structural integrity and quantitative purity.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                    {/* Filters Sidebar */}
                    <div className="w-full lg:w-80 space-y-8">
                        {/* Search */}
                        <div className="relative group">
                            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400 group-focus-within:text-primary-700 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search compounds..."
                                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-secondary-200 rounded-2xl focus:border-primary-600 outline-none transition-all text-secondary-950 font-black placeholder:text-secondary-400 shadow-sm"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="bg-white p-6 rounded-3xl border-2 border-secondary-200 shadow-sm">
                            <div className="flex items-center space-x-2 mb-6 text-secondary-950 font-black uppercase tracking-widest text-xs">
                                <FunnelIcon className="h-4 w-4 text-primary-700" />
                                <span>Filter by Category</span>
                            </div>
                            <div className="flex flex-row overflow-x-auto lg:flex-col gap-3 pb-2 lg:pb-0 scrollbar-hide">
                                <button
                                    onClick={() => setSelectedCategory('All')}
                                    className={`whitespace-nowrap lg:w-full text-left px-5 py-3.5 rounded-xl transition-all font-black text-sm uppercase tracking-wider ${selectedCategory === 'All'
                                        ? 'bg-primary-700 text-white shadow-xl shadow-primary-900/20 active:scale-[0.98]'
                                        : 'bg-secondary-50 text-secondary-900 border border-secondary-100 hover:bg-secondary-100'
                                        }`}
                                >
                                    All Categories
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`whitespace-nowrap lg:w-full text-left px-5 py-3.5 rounded-xl transition-all font-black text-sm uppercase tracking-wider ${selectedCategory === cat
                                            ? 'bg-primary-700 text-white shadow-xl shadow-primary-900/20 active:scale-[0.98]'
                                            : 'bg-secondary-50 text-secondary-900 border border-secondary-100 hover:bg-secondary-100'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="mb-8 flex justify-between items-center bg-white p-6 rounded-2xl border-2 border-secondary-200 shadow-sm">
                            <span className="text-sm text-secondary-950 font-black uppercase tracking-widest">
                                Showing <span className="text-primary-700">{filteredProducts.length}</span> Verified Compounds
                            </span>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-4xl p-16 md:p-32 text-center border-4 border-dashed border-secondary-200">
                                <div className="inline-flex p-8 bg-secondary-50 rounded-full mb-8">
                                    <MagnifyingGlassIcon className="h-16 w-16 text-secondary-200" />
                                </div>
                                <h3 className="text-3xl font-black text-secondary-900 mb-4 tracking-tight">No Compounds Found</h3>
                                <p className="text-secondary-800 text-lg font-bold max-w-sm mx-auto opacity-70">Try adjusting your search query or switching categories.</p>
                                <button
                                    onClick={() => { setSearch(''); setSelectedCategory('All'); }}
                                    className="mt-10 px-10 py-4 bg-primary-700 text-white font-black rounded-2xl hover:bg-primary-800 transition-all shadow-xl shadow-primary-900/20 active:scale-95"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        )}

                        {/* Disclaimer Bar */}
                        <div className="mt-20 p-8 md:p-12 bg-red-50 border-2 border-red-200 rounded-[2.5rem] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <FunnelIcon className="h-32 w-32 -rotate-12" />
                            </div>
                            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 relative z-10">
                                <div className="p-5 bg-red-600 rounded-2xl shadow-lg shadow-red-900/20">
                                    <span className="text-white font-black text-2xl">!</span>
                                </div>
                                <div>
                                    <h4 className="text-red-900 font-black text-lg uppercase tracking-widest mb-3">Strict Compliance Notice</h4>
                                    <p className="text-red-900/90 text-sm md:text-base leading-relaxed font-bold">
                                        All materials listed are strictly for internal laboratory research in qualified facilities.
                                        They are not approved for human or veterinary administration. By placing an inquiry, you confirm
                                        that you are a qualified researcher operating within legal laboratory guidelines.
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
