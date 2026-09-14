import NewsDetailClient from "./NewsDetailClient";

export async function generateStaticParams() {
  return [
    { slug: "phong-thuy-nha-o-2026" },
    { slug: "luat-dat-dai-cap-phep-xay-dung-2026" },
    { slug: "huong-bep-ban-tho-phong-thuy" },
    { slug: "quy-chuan-pccc-nha-o-ket-hop-kinh-doanh" },
  ];
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <NewsDetailClient slug={slug} />;
}
