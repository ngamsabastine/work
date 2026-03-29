import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { blogImagePublicUrl, listPublishedPosts } from '@/lib/blog';

export const dynamic = 'force-dynamic';

export default async function BlogIndexPage() {
  const posts = await listPublishedPosts();

  return (
    <div className="py-12 md:py-20 bg-secondary-50/30 min-h-screen">
      <Container>
        <div className="mb-10 md:mb-14">
          <span className="text-xs font-black text-primary-50 uppercase tracking-widest mb-2 block">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-secondary-950 tracking-tight">
            Research Insights
          </h1>
          <p className="mt-4 text-secondary-100 text-lg font-bold max-w-2xl">
            Practical, evidence-driven notes on laboratory workflows, quality standards, and compound handling.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-white rounded-3xl border border-secondary-200 p-10 text-center">
            <h2 className="text-2xl font-black text-secondary-900 mb-2">No posts yet</h2>
            <p className="text-secondary-700 font-bold">Publish a post to see it here.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => {
              const coverUrl = blogImagePublicUrl(post.cover_image_path);
              return (
                <div
                  key={post.id}
                  className="bg-white rounded-[2.5rem] border-2 border-secondary-100 shadow-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    <div className="md:col-span-4 bg-secondary-100">
                      {coverUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={coverUrl}
                          alt={post.cover_image_alt ?? post.title}
                          className="w-full h-64 md:h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-64 md:h-full flex items-center justify-center text-secondary-500 font-black uppercase tracking-widest text-xs">
                          No image
                        </div>
                      )}
                    </div>

                    <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-between gap-8">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-xl text-[10px] font-black bg-primary-50 text-primary-800 uppercase tracking-[0.2em] border border-primary-100">
                            {post.author_name}
                          </span>
                          {post.published_at && (
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-500">
                              {new Date(post.published_at).toLocaleDateString()}
                            </span>
                          )}
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black text-secondary-900 tracking-tight">
                          {post.title}
                        </h2>
                        <p className="mt-4 text-secondary-700 font-bold leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags?.slice(0, 4).map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-xl bg-secondary-50 border border-secondary-200 text-secondary-700 text-[10px] font-black uppercase tracking-widest"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <Button href={`/blog/${post.slug}`} size="lg" className="rounded-2xl px-8">
                          See more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* <div className="mt-10 text-sm text-red-500 font-bold">
          <Link className="hover:underline" href="/admin/blog/new">
            Admin: Upload a post
          </Link>
        </div> */}
      </Container>
    </div>
  );
}

