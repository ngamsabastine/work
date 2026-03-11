import { createSupabaseServerClient } from '@/lib/supabase-server';
import { createSupabaseAdminClient } from '@/lib/supabase-admin';

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content_md: string;
  cover_image_path: string | null;
  cover_image_alt: string | null;
  author_name: string;
  tags: string[];
  status: 'draft' | 'published';
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export function blogImagePublicUrl(path: string | null): string | null {
  if (!path) return null;
  const supabase = createSupabaseServerClient();
  // Public bucket, so public URL works.
  const { data } = supabase.storage.from('blog').getPublicUrl(path);
  return data.publicUrl ?? null;
}

export async function listPublishedPosts(): Promise<BlogPost[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false });
  if (error) throw new Error(error.message);
  return (data ?? []) as BlogPost[];
}

export async function getPublishedPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data ?? null) as BlogPost | null;
}

export function slugifyBlog(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function createBlogPostWithUpload(input: {
  title: string;
  excerpt: string;
  content_md: string;
  author_name?: string;
  tags?: string[];
  publish?: boolean;
  cover_image_file?: File | null;
  cover_image_alt?: string;
}): Promise<{ slug: string }> {
  const admin = createSupabaseAdminClient();

  const slugBase = slugifyBlog(input.title);
  if (!slugBase) throw new Error('Title is required');

  // Ensure unique slug.
  let slug = slugBase;
  for (let i = 1; i <= 20; i++) {
    const { data, error } = await admin.from('blog_posts').select('id').eq('slug', slug).maybeSingle();
    if (error) throw new Error(error.message);
    if (!data) break;
    slug = `${slugBase}-${i + 1}`;
  }

  let cover_image_path: string | null = null;
  if (input.cover_image_file) {
    const ext = input.cover_image_file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const filePath = `${slug}/${Date.now()}.${ext}`;

    const { error: uploadError } = await admin.storage.from('blog').upload(filePath, input.cover_image_file, {
      upsert: true,
      contentType: input.cover_image_file.type || undefined,
    });
    if (uploadError) throw new Error(uploadError.message);
    cover_image_path = filePath;
  }

  const status: 'draft' | 'published' = input.publish ? 'published' : 'draft';
  const published_at = status === 'published' ? new Date().toISOString() : null;

  const { error: insertError } = await admin.from('blog_posts').insert({
    slug,
    title: input.title,
    excerpt: input.excerpt,
    content_md: input.content_md,
    cover_image_path,
    cover_image_alt: input.cover_image_alt ?? null,
    author_name: input.author_name?.trim() || 'Editorial Team',
    tags: input.tags ?? [],
    status,
    published_at,
  });

  if (insertError) throw new Error(insertError.message);
  return { slug };
}

