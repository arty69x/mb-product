import { Layout } from '@/components/Layout/Layout';
import { ProductListPage } from '@/components/Layout/ProductListPage';
import { getProductsByCategory } from '@/lib/shop';

export default function NewArrivalsPage() {
  return (
    <Layout>
      <ProductListPage title="New Arrivals" products={getProductsByCategory('new-arrivals')} />
    </Layout>
  );
}
