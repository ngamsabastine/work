import React from 'react';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { getAllCategories, getProductsByCategory } from '@/lib/data';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

type Params = Promise<{ slug: string }>;

interface CategoryPageProps {
    params: Params;
}

export async function generateStaticParams() {
    const { subCategories, types } = getAllCategories();
    const params = [
        ...subCategories.map(cat => ({ slug: cat.slug })),
        ...types.map(type => ({ slug: type.toLowerCase().replace(/\s+/g, '-') }))
    ];
    return params;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const categoryName = slug.replace(/-/g, ' ').toUpperCase();
    return {
        title: `${categoryName} | BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE`,
        description: `Browse high-purity research compounds in the ${categoryName} category.`,
    };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { slug } = await params;
    const products = getProductsByCategory(slug);
    const categoryName = slug.replace(/-/g, ' ');

    if (!products.length) {
        return (
            <Container className="py-20 text-center">
                <h1 className="text-4xl font-bold mb-4 text-secondary-900">Category not found</h1>
                <Link href="/products" className="text-primary-700 font-bold hover:underline">Return to catalog</Link>
            </Container>
        );
    }

    return (
        <div className="py-12 bg-secondary-50/20 min-h-screen">
            <Container>
                <div className="mb-12">
                    <Link href="/products" className="inline-flex items-center text-secondary-600 hover:text-primary-600 mb-8 font-semibold group">
                        <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Catalog
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold text-primary-700 uppercase tracking-widest mb-2 block">Category</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 capitalize mb-4">
                                {categoryName}
                            </h1>
                            <p className="text-secondary-700 text-lg leading-relaxed">
                                Curated selection of {categoryName} for laboratory investigation.
                                All compounds are batch-tested for purity and potency using HPLC and MS protocols.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-secondary-200 shadow-sm text-center px-10 md:self-start">
                            <span className="block text-4xl font-bold text-primary-700">{products.length}</span>
                            <span className="text-xs text-secondary-500 uppercase font-bold tracking-wider">Compounds</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Disclaimer */}
                <div className="mt-16 p-8 bg-white border border-secondary-200 rounded-3xl shadow-sm">
                    <h3 className="text-xl font-bold text-secondary-900 mb-4 uppercase tracking-tight">Safety & Compliance</h3>
                    <p className="text-secondary-700 leading-relaxed italic font-medium">
                        Products in this category are intended for academic and industrial research applications.
                        By accessing these materials, you acknowledge that you are qualified to handle
                        research chemicals and agree to all terms regarding their strictly laboratory use.
                    </p>
                </div>
            </Container>
        </div>
    );
}
