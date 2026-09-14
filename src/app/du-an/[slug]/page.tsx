import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
  return [
    { slug: "villa-quang-ninh" },
    { slug: "villa-a-dung" },
    { slug: "bt-monaco" },
    { slug: "villa-sam-son" },
    { slug: "villa-da-lat" },
    { slug: "villa-moon" },
    { slug: "villa-quang-minh" },
    { slug: "biet-thu-ha-noi" },
    { slug: "bt-ha-noi" },
    { slug: "villa-nha-trang" },
    { slug: "bt-ha-long" },
  ];
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailClient slug={slug} />;
}
