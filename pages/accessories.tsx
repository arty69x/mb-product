import { Layout } from '@/components/Layout/Layout';
import { ProductListPage } from '@/components/Layout/ProductListPage';
import { getProductsByCategory } from '@/lib/shop';

export default function AccessoriesPage() {
  return (
    <Layout>
      <ProductListPage title="Accessories" products={getProductsByCategory('accessories')} />
    </Layout>
  );
}
