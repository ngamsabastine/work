import { MetadataRoute } from 'next';
import { getAllProducts, getAllCategories } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://binessresearch.com';

    // Static routes
    const staticRoutes = [
        '',
        '/products',
        '/education',
        '/education/grey-market',
        '/quality',
        '/faq',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic product routes
    const products = getAllProducts();
    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic category routes
    const { subCategories, types } = getAllCategories();
    const categoryRoutes = [
        ...subCategories.map(cat => cat.slug),
        ...types.map(type => type.toLowerCase().replace(/\s+/g, '-'))
    ].map((slug) => ({
        url: `${baseUrl}/category/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...productRoutes, ...categoryRoutes];
}
