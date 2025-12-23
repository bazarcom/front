import { ProductsSection } from '@organisms/ProductsSection';

import { Hero } from '@/components/atomic/organisms/Hero';

export default function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <main className="pb-16 md:pb-[120px]">
      <Hero />
      <div className="container">
        <div>
          <ProductsSection
            category={searchParams['category']!}
            pView={searchParams['pview']}
            page={searchParams['page'] || '1'}
          />
        </div>
      </div>
    </main>
  );
}
