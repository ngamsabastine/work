import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getAllProducts } from '@/lib/data';
import { BeakerIcon, ShieldCheckIcon, DocumentTextIcon, TruckIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { ProductCard } from '@/components/products/ProductCard';

export default function Home() {
  const allProducts = getAllProducts();
  const featuredProducts = allProducts.slice(0, 4); // Just pick first 4 for now

  return (
    <div className="flex flex-col gap-16 md:gap-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-24 pb-24 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-[120px] opacity-40"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-primary-300/30 rounded-full blur-[120px] opacity-40"></div>
        </div>

        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-2xl bg-primary-50 border-2 border-primary-100 text-primary-800 text-xs font-black uppercase tracking-[0.2em] mb-12 animate-fade-in shadow-xl shadow-primary-900/5">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary-600 animate-pulse"></span>
              <span>Purity Verified • Batch Recorded</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-primary-100 mb-10 leading-[0.95] md:leading-[1.05]">
              Advancing Science <br />
              <span className="text-primary-400">
                With Precision.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-primary-100 mb-16 leading-relaxed max-w-2xl font-bold opacity-90">
              Strictly for laboratory investigation. We provide the highest integrity research
              compounds with absolute transparency and comprehensive analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button href="/products" size="lg" className="w-full sm:min-w-[240px] py-6 text-xl font-black rounded-2xl shadow-2xl shadow-primary-900/20">
                Catalog Access
              </Button>
              <Button href="/quality" variant="outline" size="lg" className="w-full sm:min-w-[240px] py-6 text-xl font-black rounded-2xl border-2 border-secondary-200 text-secondary-400 hover:bg-secondary-50">
                Quality Standards
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Badges */}
      <section className="bg-secondary-50 py-24 md:py-32 border-y-2 border-secondary-100 shadow-inner">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {[
              { icon: ShieldCheckIcon, title: "Lab Tested", desc: "Rigorous Purity Checks & Sequence Verification" },
              { icon: DocumentTextIcon, title: "COA Verified", desc: "Full Analytical Reports with Every Batch" },
              { icon: BeakerIcon, title: "Research Only", desc: "Strictly for Professional Laboratory Use" },
              { icon: TruckIcon, title: "Secure Logistics", desc: "Global Compliant & Temperature Controlled" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="p-6 bg-white rounded-3xl mb-8 shadow-xl shadow-primary-900/5 border-2 border-secondary-100 group-hover:border-primary-400 group-hover:bg-primary-50 transition-all duration-300">
                  <item.icon className="h-12 w-12 text-primary-700 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-black text-secondary-950 mb-4 tracking-tight uppercase">{item.title}</h3>
                <p className="text-secondary-900 font-bold text-lg leading-relaxed opacity-80 italic">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section>
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-xl">
              <div className="h-1.5 w-12 bg-primary-600 mb-6 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-black text-primary-100 mb-6 tracking-tight">Essential Compounds</h2>
              <p className="text-primary-50 text-xl font-bold opacity-80">Our most requested laboratory research materials for advanced cellular investigation.</p>
            </div>
            <Link href="/products" className="inline-flex items-center space-x-2 text-primary-700 font-black text-lg uppercase tracking-widest hover:translate-x-2 transition-transform">
              <span>View Full Catalog</span>
              <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* Dynamic CTAs */}
      <section className="bg-secondary-950 py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-10 w-[600px] h-[600px] bg-primary-700 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-primary-800 rounded-full blur-[150px]"></div>
        </div>
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[1.05] tracking-tight">Technical Compendium</h2>
              <p className="text-primary-100 text-xl md:text-2xl mb-12 leading-relaxed font-black opacity-90 max-w-2xl italic">
                Navigate the science of peptides and research chemicals with our comprehensive guides.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { href: '/education', title: 'Molecular Science', icon: DocumentTextIcon },
                  { href: '/education/grey-market', title: 'Compliance Guide', icon: ShieldCheckIcon },
                ].map((link, i) => (
                  <Link key={i} href={link.href} className="flex items-center space-x-6 p-8 rounded-[2rem] bg-white/5 border-2 border-white/10 hover:bg-white/10 hover:border-primary-500/50 transition-all group shadow-2xl">
                    <div className="bg-primary-600 rounded-2xl p-4 shadow-xl shadow-primary-950/50">
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-white text-xl font-black uppercase tracking-tight group-hover:text-primary-400 transition-colors leading-tight">{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-[3.5rem] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.2)] relative border-4 border-secondary-50">
              <h3 className="text-3xl md:text-4xl font-black text-secondary-950 mb-6 tracking-tight uppercase">Request Analytics</h3>
              <p className="text-secondary-900 text-lg md:text-xl mb-12 font-bold opacity-80 leading-relaxed">
                Contact our specialists for custom synthesis, or specialized analytical reports.
              </p>
              <Button href="/contact" size="lg" className="w-full text-xl py-8 font-black rounded-3xl shadow-2xl shadow-primary-900/30 active:scale-95 transition-all">
                Access Lab Support
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
