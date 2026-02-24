import fs from 'fs';
import path from 'path';
import { Product, Category, ProjectData } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'src/data');

const JSON_FILES = [
    'peptides.json',
    'steroids-injectable.json',
    'steroids-oral.json',
    'research-chemicals.json',
    'accessories.json'
];

export function getAllData(): Category[] {
    const allCategories: Category[] = [];

    JSON_FILES.forEach((file) => {
        const filePath = path.join(DATA_DIR, file);
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf8');
            const data: ProjectData = JSON.parse(fileContent);
            const type = data.metadata.category;

            data.categories.forEach((cat) => {
                allCategories.push({
                    ...cat,
                    type,
                    products: cat.products.map((p) => ({
                        ...p,
                        category: cat.name,
                        type
                    }))
                });
            });
        }
    });

    return allCategories;
}

export function getAllProducts(): Product[] {
    const categories = getAllData();
    const allProducts = categories.flatMap((cat) => cat.products);

    // Deduplicate by ID
    const seen = new Set();
    return allProducts.filter((p) => {
        if (seen.has(p.id)) return false;
        seen.add(p.id);
        return true;
    });
}

export function getProductById(id: string): Product | undefined {
    // We can use getAllProducts here as it's already deduplicated
    const products = getAllProducts();
    return products.find((p) => p.id === id);
}

export function getProductsByCategory(categoryName: string): Product[] {
    const categories = getAllData();
    // We match by the individual category name or the top-level type
    const products = categories
        .filter((cat) =>
            cat.name.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase() ||
            cat.type.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase()
        )
        .flatMap((cat) => cat.products);

    // Deduplicate
    const seen = new Set();
    return products.filter((p) => {
        if (seen.has(p.id)) return false;
        seen.add(p.id);
        return true;
    });
}

export function getAllCategories() {
    const categories = getAllData();
    const uniqueTypes = Array.from(new Set(categories.map(c => c.type)));

    return {
        types: uniqueTypes,
        subCategories: categories.map(c => ({
            name: c.name,
            slug: c.name.toLowerCase().replace(/\s+/g, '-'),
            type: c.type
        }))
    };
}

export function slugify(text: string) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}
