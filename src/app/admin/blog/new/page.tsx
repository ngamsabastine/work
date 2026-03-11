import { redirect } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { createBlogPostWithUpload } from '@/lib/blog';

export const dynamic = 'force-dynamic';

async function createPostAction(formData: FormData) {
  'use server';

  const title = String(formData.get('title') ?? '').trim();
  const excerpt = String(formData.get('excerpt') ?? '').trim();
  const content_md = String(formData.get('content_md') ?? '').trim();
  const author_name = String(formData.get('author_name') ?? '').trim();
  const tagsRaw = String(formData.get('tags') ?? '').trim();
  const coverAlt = String(formData.get('cover_image_alt') ?? '').trim();
  const publish = formData.get('publish') === 'on';

  const file = formData.get('cover_image');
  const cover_image_file = file instanceof File && file.size > 0 ? file : null;

  const tags = tagsRaw
    ? tagsRaw
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 12)
    : [];

  if (!title || !excerpt || !content_md) {
    throw new Error('Title, excerpt, and content are required.');
  }

  const { slug } = await createBlogPostWithUpload({
    title,
    excerpt,
    content_md,
    author_name: author_name || undefined,
    tags,
    publish,
    cover_image_file,
    cover_image_alt: coverAlt || undefined,
  });

  redirect(`/blog/${slug}`);
}

export default function NewBlogPostPage() {
  return (
    <div className="py-12 md:py-20 bg-secondary-50/30 min-h-screen">
      <Container>
        <div className="mb-10">
          <span className="text-xs font-black text-primary-700 uppercase tracking-widest mb-2 block">
            Admin
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-secondary-900 tracking-tight">
            Upload Blog Post
          </h1>
          <p className="mt-4 text-secondary-700 font-bold max-w-2xl">
            Create a professional post with a cover image, excerpt, and full content.
          </p>
        </div>

        <form action={createPostAction} className="bg-white rounded-[3rem] border-2 border-secondary-100 p-8 md:p-12 space-y-8 shadow-sm text-secondary-900">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-secondary-700 mb-2">
                Title
              </label>
              <input
                name="title"
                className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-200 focus:border-primary-500 outline-none font-bold bg-white text-secondary-900"
                placeholder="e.g. How We Validate Purity: HPLC & MS in Practice"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-secondary-700 mb-2">
                Author
              </label>
              <input
                name="author_name"
                className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-200 focus:border-primary-500 outline-none font-bold bg-white text-secondary-900"
                placeholder="Editorial Team"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-secondary-700 mb-2">
              Excerpt (short summary)
            </label>
            <textarea
              name="excerpt"
              className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-200 focus:border-primary-500 outline-none font-bold min-h-[120px] bg-white text-secondary-900"
              placeholder="A tight, professional summary shown on the blog listing page."
              required
            />
          </div>

          <div>
            <label className="block text-xs font-black uppercase tracking-widest text-secondary-700 mb-2">
              Content (Markdown-ish)
            </label>
            <textarea
              name="content_md"
              className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-200 focus:border-primary-500 outline-none font-bold min-h-[320px] font-mono bg-white text-secondary-900"
              placeholder={`## Overview\n\nWrite the post body here...\n\n### Key takeaway\n\n- Bullet points are okay (rendered as paragraphs for now).`}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-secondary-700 mb-2">
                Tags (comma-separated)
              </label>
              <input
                name="tags"
                className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-200 focus:border-primary-500 outline-none font-bold bg-white text-secondary-900"
                placeholder="quality, hplc, ms, handling"
              />
            </div>
            <div className="flex items-end">
              <label className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl border-2 border-secondary-200 w-full font-black text-secondary-900">
                <input type="checkbox" name="publish" className="h-5 w-5" defaultChecked />
                Publish immediately
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-secondary-700 mb-2">
                Cover image
              </label>
              <input
                type="file"
                name="cover_image"
                accept="image/*"
                className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-200 focus:border-primary-500 outline-none font-bold bg-white text-secondary-900"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-secondary-700 mb-2">
                Cover image alt text
              </label>
              <input
                name="cover_image_alt"
                className="w-full px-5 py-4 rounded-2xl border-2 border-secondary-200 focus:border-primary-500 outline-none font-bold bg-white text-secondary-900"
                placeholder="e.g. Chromatography lab equipment on a bench"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" size="lg" className="rounded-2xl px-10 py-5 text-lg font-black">
              Upload
            </Button>
            <Button href="/blog" variant="outline" size="lg" className="rounded-2xl px-10 py-5 text-lg font-black">
              View blog
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

