import { notFound } from "next/navigation";
import Marquee from "@/components/shared/Marquee";
import Nav from "@/components/shared/Nav";
import Footer from "@/components/shared/Footer";
import ProductDetail from "@/components/drop/ProductDetail";
import { PRODUCTS, getProduct } from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ZENJI`,
    description: p.description,
    openGraph: {
      title: `${p.name} — ZENJI`,
      description: p.description,
      images: [p.images.front],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `https://zenji.shop/drop/${p.slug}#product`,
        name: p.name,
        description: p.description,
        url: `https://zenji.shop/drop/${p.slug}`,
        brand: { "@type": "Brand", name: "ZENJI" },
        material: "100% cotton",
        itemCondition: "https://schema.org/NewCondition",
        offers: {
          "@type": "Offer",
          url: `https://zenji.shop/drop/${p.slug}`,
          price: `${p.price}`,
          priceCurrency: "AUD",
          availability: p.inStock === false ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: { "@id": "https://zenji.shop/#organization" },
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingDestination: { "@type": "DefinedRegion", addressCountry: "AU" },
          },
        },
        image: [
          p.images.front,
          p.images.back,
          p.images.side,
          p.images.graphic,
          p.images.model,
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://zenji.shop" },
          { "@type": "ListItem", position: 2, name: "Collection", item: "https://zenji.shop/collection" },
          { "@type": "ListItem", position: 3, name: p.name, item: `https://zenji.shop/drop/${p.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Marquee />
      <Nav />
      <ProductDetail p={p} />
      <Footer />
    </>
  );
}