import { getModels } from "@/app/lib/models";
import { Model } from "../types";
import ModelsGrid from "../components/ModelsGrid";
import Form from "next/form";

export default async function ModelsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const models: Model[] = await getModels(undefined);
  const { query } = await searchParams;
  /*
  if query
    filter models based on name and description
  else
      leave them as they are
 */
  const filteredModels = query
    ? models.filter(
        (model) =>
          model.name.toLowerCase().includes(query) ||
          model.description.toLowerCase().includes(query)
      )
    : models;
  return (
    <>
      <Form
        action="/3d-models"
        formMethod="get"
        className="w-full px-5 md:px-0 md:max-w-xl"
      >
        <input
          type="text"
          name="query"
          placeholder="E.g. dragon"
          autoComplete="off"
          defaultValue={query}
          className="w-full py-3 px-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
        />
      </Form>

      <ModelsGrid title="All Models" models={filteredModels} />
    </>
  );
}
