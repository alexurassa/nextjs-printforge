import { ModelDetailPageProps } from "@/app/types";
import { getModelById } from "@/app/lib/models";

export default async function ModelDetailPage({
  params,
}: ModelDetailPageProps) {
  const { id } = await params;

  const modelData = await getModelById(id);

  return (
    <>
      <h1>The id of this model is {id}</h1>
      <p>{modelData.name}</p>
    </>
  );
}
