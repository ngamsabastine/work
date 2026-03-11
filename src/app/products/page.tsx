import React from 'react';
import { getAllProducts, getAllCategories } from '@/lib/data';
import ProductListing from '@/components/products/ProductListing';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Research Catalog | BUY PEPTIDES GEARS AND STEROIDS FROM GRAY MARKETS ONLINE',
    description: 'Full catalog of high-purity peptides and research chemicals. Laboratory grade investigation materials.',
};

export default async function ProductsPage() {
    const products = await getAllProducts();
    const { types } = await getAllCategories();

    return <ProductListing initialProducts={products} categories={types} />;
}
