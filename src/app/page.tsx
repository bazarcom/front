import { ProductsSection } from '@organisms/ProductsSection';
import dynamic from 'next/dynamic';

import { Hero } from '@/components/atomic/organisms/Hero';

const DynamicPrDetailModal = dynamic(() => import('@/components/atomic/organisms/Modal/PrDetailModal'), { ssr: false });

export default function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <main className="pb-16 md:pb-[120px]">
      <DynamicPrDetailModal />
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
