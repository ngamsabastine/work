import { MetadataRoute } from 'next';
import { getAllProducts, getAllCategories } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

    // Dynamic routes (from Supabase)
    // `sitemap.xml` is prerendered during `next build`, so allow builds to pass
    // even if Supabase env vars are not configured yet.
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        return staticRoutes;
    }

    const [products, { subCategories, types }] = await Promise.all([
        getAllProducts(),
        getAllCategories(),
    ]);

    const productRoutes = products.map((product) => ({
        url: `${baseUrl}/products/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

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
