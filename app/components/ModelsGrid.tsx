import { ModelsGridProps } from "../types";
import ModelCard from "./ModelCard";

export default function ModelsGrid({ title, models }: ModelsGridProps) {
  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl mb-8 font-semibold">{title}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {models.map((model) => (
          <ModelCard model={model} key={model.id} />
        ))}
      </div>
    </div>
  );
}
