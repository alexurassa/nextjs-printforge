import { getCategoryBySlug as getCategoryById } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryById(slug);
  const models = await getModels(category);

  return <ModelsGrid title={category.displayName} models={models} />;
}
