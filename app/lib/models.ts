import modelsData from "@/app/data/models.json";
import { Model } from "../types";

export async function getAllModels() {
  // where we write the function to fetch all models
  return modelsData;
}

export async function getModelById(id: string | number): Promise<Model> {
  // These functions don't technically need to be async functions,
  // but we're planning for the future when they'll be fetching
  // from a real data source.
  const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
  );
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }
  return foundModel;
}
