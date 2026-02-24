import React from 'react';
import { Product } from '@/types';
import Link from 'next/link';
import { BeakerIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const lowestPrice = Math.min(...product.variants.map(v => v.price));

    return (
        <Link
            href={`/products/${product.id}`}
            className="group bg-white rounded-3xl border-2 border-secondary-100 p-6 flex flex-col h-full hover:shadow-2xl hover:shadow-primary-900/10 hover:border-primary-400 transition-all duration-500 relative overflow-hidden"
        >
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary-50 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <BeakerIcon className="h-6 w-6 text-primary-700 group-hover:text-white" />
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-black bg-secondary-100 text-secondary-900 uppercase tracking-widest">
                    {product.type}
                </span>
            </div>

            <h3 className="text-2xl font-extrabold text-secondary-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-1 tracking-tight">
                {product.name}
            </h3>

            <p className="text-secondary-800 text-base font-medium mb-8 grow line-clamp-2 leading-relaxed">
                {product.description}
            </p>

            <div className="pt-6 border-t border-secondary-50 flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                    <span className="text-[10px] text-secondary-900 uppercase tracking-[0.2em] font-black mb-1">Price From</span>
                    <span className="text-2xl font-black text-primary-700">${lowestPrice}</span>
                </div>

                <div className="flex items-center space-x-2 bg-primary-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary-900/20 group-hover:bg-primary-800 transition-all">
                    <span>Details</span>
                    <ArrowRightIcon className="h-4 w-4" />
                </div>
            </div>

            {/* Subtle scale effect background */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-50 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"></div>
        </Link>
    );
};
