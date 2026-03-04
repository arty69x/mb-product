import { Layout } from '@/components/Layout/Layout';
import { ProductListPage } from '@/components/Layout/ProductListPage';
import { getProductsByCategory } from '@/lib/shop';

export default function BagsPage() {
  return (
    <Layout>
      <ProductListPage title="Bags" products={getProductsByCategory('bags')} />
    </Layout>
  );
}
