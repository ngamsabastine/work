import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { blogImagePublicUrl, getPublishedPostBySlug } from '@/lib/blog';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const dynamic = 'force-dynamic';

type Params = Promise<{ slug: string }>;

export default async function BlogDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) notFound();

  const coverUrl = blogImagePublicUrl(post.cover_image_path);

  return (
    <div className="py-12 md:py-20 bg-secondary-50/30 min-h-screen">
      <Container>
        <Link
          href="/blog"
          className="inline-flex items-center text-white hover:text-primary-400 mb-10 transition-all group font-black uppercase tracking-widest text-xs"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <article className="bg-white rounded-[3rem] border-2 border-secondary-100 overflow-hidden shadow-sm">
          {coverUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={coverUrl}
              alt={post.cover_image_alt ?? post.title}
              className="w-full h-64 md:h-[420px] object-cover"
            />
          )}

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-xl text-[10px] font-black bg-primary-50 text-primary-800 uppercase tracking-[0.2em] border border-primary-100">
                {post.author_name}
              </span>
              {post.published_at && (
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-500">
                  {new Date(post.published_at).toLocaleDateString()}
                </span>
              )}
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl bg-secondary-50 border border-secondary-200 text-secondary-700 text-[10px] font-black uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-secondary-900 tracking-tight leading-[1.05]">
              {post.title}
            </h1>
            <p className="mt-6 text-secondary-700 text-lg md:text-xl font-bold leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            <div className="mt-10 prose prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:font-medium text-secondary-900">
              {/* Minimal markdown rendering without extra deps */}
              {post.content_md.split('\n').map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return <p key={i}>&nbsp;</p>;
                if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.slice(4)}</h3>;
                if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>;
                if (trimmed.startsWith('# ')) return <h1 key={i}>{trimmed.slice(2)}</h1>;
                return <p key={i}>{line}</p>;
              })}
            </div>
          </div>
        </article>
      </Container>
    </div>
  );
}

