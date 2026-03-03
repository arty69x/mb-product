import Head from 'next/head';
import Layout from '../components/Layout';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>m3 | About</title>
      </Head>
      <Layout>
        <main className="max-w-[1040px] mx-auto px-6 py-20">
          <h1 className="text-[44px] mb-6">ABOUT US</h1>
          <p className="text-[16px] leading-8 text-[#555]">We curate globally recognized luxury pieces from Japan and deliver an editorial storefront experience inspired by international e-commerce standards and clean, high-contrast layouts.</p>
        </main>
      </Layout>
    </>
  );
}
