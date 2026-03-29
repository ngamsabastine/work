import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getAllProducts } from '@/lib/data';
import { BeakerIcon, ShieldCheckIcon, DocumentTextIcon, TruckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { ProductCard } from '@/components/products/ProductCard';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const allProducts = await getAllProducts();
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 md:gap-32 pb-24">

      {/* ── Hero ── */}
      <section className="relative pt-12 md:pt-24 pb-24 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[160px]" />
        </div>

        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Badge */}
            <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-primary-50 border border-primary-200 text-primary-800 text-xs font-bold uppercase tracking-[0.18em] mb-10 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span>Purity Verified · Batch Recorded</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-secondary-300 mb-8 leading-[0.95] md:leading-[1.05]">
              Advancing Science <br />
              <span className="text-primary-600">With Precision.</span>
            </h1>

            <p className="text-lg md:text-xl text-secondary-200 mb-14 leading-relaxed max-w-2xl font-medium">
              Strictly for laboratory investigation. We provide the highest integrity research
              compounds with absolute transparency and comprehensive analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                href="/products"
                size="lg"
                className="w-full sm:min-w-[220px] py-5 text-lg font-bold rounded-xl bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-900/20 transition-colors"
              >
                Catalog Access
              </Button>
              <Button
                href="/quality"
                variant="outline"
                size="lg"
                className="w-full sm:min-w-[220px] py-5 text-lg font-bold rounded-xl border border-secondary-300 text-secondary-700 hover:border-primary-400 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                Quality Standards
              </Button>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Trust Badges ── */}
      <section className="bg-secondary-50 py-20 md:py-28 border-y border-secondary-200">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
            {[
              { icon: ShieldCheckIcon, title: "Lab Tested", desc: "Rigorous purity checks & sequence verification" },
              { icon: DocumentTextIcon, title: "COA Verified", desc: "Full analytical reports with every batch" },
              { icon: BeakerIcon, title: "Research Only", desc: "Strictly for professional laboratory use" },
              { icon: TruckIcon, title: "Secure Logistics", desc: "Global compliant & temperature controlled" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="p-5 bg-white rounded-2xl mb-6 shadow-sm border border-secondary-200 group-hover:border-primary-300 group-hover:bg-primary-50 transition-all duration-300">
                  <item.icon className="h-9 w-9 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-base font-bold text-secondary-950 mb-2 tracking-wide uppercase">{item.title}</h3>
                <p className="text-secondary-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Featured Products ── */}
      <section>
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-xl">
              <div className="h-1 w-10 bg-primary-500 mb-5 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-black text-secondary-200 mb-4 tracking-tight">
                Essential Compounds
              </h2>
              <p className="text-secondary-500 text-base leading-relaxed">
                Our most requested laboratory research materials for advanced cellular investigation.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 text-primary-600 font-bold text-sm uppercase tracking-widest hover:text-primary-700 hover:translate-x-1 transition-all"
            >
              <span>View Full Catalog</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA Dark ── */}
      <section className="bg-secondary-950 py-28 md:py-40 relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-10 w-[500px] h-[500px] bg-primary-800/30 rounded-full blur-[160px]" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-primary-900/20 rounded-full blur-[160px]" />
        </div>

        <Container>
          <div className="grid lg:grid-cols-12 gap-14 md:gap-20 items-center">

            {/* Left */}
            <div className="lg:col-span-7">
              <div className="h-px w-12 bg-primary-500/50 mb-8" />
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                Technical Compendium
              </h2>
              <p className="text-secondary-400 text-lg mb-10 leading-relaxed max-w-xl font-medium">
                Navigate the science of peptides and research chemicals with our
                comprehensive guides.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/education', title: 'Molecular Science', icon: DocumentTextIcon },
                  { href: '/education/grey-market', title: 'Compliance Guide', icon: ShieldCheckIcon },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary-900/40 hover:border-primary-700/50 transition-all group"
                  >
                    <div className="bg-primary-700/60 rounded-xl p-3 group-hover:bg-primary-600/70 transition-colors">
                      <link.icon className="h-6 w-6 text-primary-200" />
                    </div>
                    <span className="text-secondary-200 text-base font-bold uppercase tracking-tight group-hover:text-primary-300 transition-colors leading-tight">
                      {link.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="lg:col-span-5 bg-secondary-900 border border-secondary-800 rounded-3xl p-10 md:p-12 shadow-2xl">
              <div className="h-px w-8 bg-primary-500/60 mb-8" />
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight uppercase">
                Request Analytics
              </h3>
              <p className="text-secondary-400 text-base mb-10 leading-relaxed">
                Contact our specialists for custom synthesis or specialized analytical reports.
              </p>
              <Button
                href="/contact"
                size="lg"
                className="w-full text-base py-6 font-bold rounded-2xl bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-950/40 transition-colors active:scale-95"
              >
                Access Lab Support
              </Button>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
}