import { Product } from '@/types';
import { createSupabaseServerClient } from '@/lib/supabase-server';

type CatalogRow = {
  id: string;
  name: string;
  category: string | null;
  type: string | null;
  payload: any;
};

const TABLES = [
  'peptides',
  'steroids_injectable',
  'steroids_oral',
  'research_chemicals',
  'accessories',
] as const;

function rowToProduct(row: CatalogRow): Product {
  const payload = row.payload ?? {};
  return {
    ...payload,
    id: row.id,
    name: row.name ?? payload.name ?? row.id,
    category: row.category ?? payload.category ?? '',
    type: row.type ?? payload.type ?? '',
    variants: Array.isArray(payload.variants) ? payload.variants : [],
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const supabase = createSupabaseServerClient();

  const results = await Promise.all(
    TABLES.map((table) =>
      supabase
        .from(table)
        .select('id,name,category,type,payload')
        .order('id', { ascending: true })
    )
  );

  const rows: CatalogRow[] = [];
  for (const r of results) {
    if (r.error) throw new Error(r.error.message);
    rows.push(...((r.data ?? []) as CatalogRow[]));
  }

  // Deduplicate by ID (same behavior as before)
  const seen = new Set<string>();
  const products = rows
    .map(rowToProduct)
    .filter((p) => (seen.has(p.id) ? false : (seen.add(p.id), true)));

  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const supabase = createSupabaseServerClient();

  // Try each table; stop on first match.
  for (const table of TABLES) {
    const { data, error } = await supabase
      .from(table)
      .select('id,name,category,type,payload')
      .eq('id', id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (data) return rowToProduct(data as CatalogRow);
  }

  return undefined;
}

export async function getProductsByCategory(slug: string): Promise<Product[]> {
  const supabase = createSupabaseServerClient();
  const normalized = slugify(slug);

  // Fetch minimal fields from all tables, then filter by slug locally.
  // This avoids tricky `or()` escaping for categories with punctuation.
  const results = await Promise.all(
    TABLES.map((table) => supabase.from(table).select('id,name,category,type,payload'))
  );

  const rows: CatalogRow[] = [];
  for (const r of results) {
    if (r.error) throw new Error(r.error.message);
    rows.push(...((r.data ?? []) as CatalogRow[]));
  }

  // Match using the same slug logic as the old JSON code.
  const products = rows
    .map(rowToProduct)
    .filter(
      (p) =>
        slugify(p.category) === normalized ||
        slugify(p.type) === normalized
    );

  const seen = new Set<string>();
  return products.filter((p) => (seen.has(p.id) ? false : (seen.add(p.id), true)));
}

export async function getAllCategories(): Promise<{
  types: string[];
  subCategories: { name: string; slug: string; type: string }[];
}> {
  const products = await getAllProducts();

  const typesSet = new Set<string>();
  const subCatKeySet = new Set<string>();
  const subCategories: { name: string; slug: string; type: string }[] = [];

  for (const p of products) {
    if (p.type) typesSet.add(p.type);
    if (p.category && p.type) {
      const key = `${p.type}||${p.category}`;
      if (!subCatKeySet.has(key)) {
        subCatKeySet.add(key);
        subCategories.push({ name: p.category, slug: slugify(p.category), type: p.type });
      }
    }
  }

  return {
    types: Array.from(typesSet).sort((a, b) => a.localeCompare(b)),
    subCategories: subCategories.sort((a, b) => a.name.localeCompare(b.name)),
  };
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}
