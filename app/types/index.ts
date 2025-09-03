import { ReactNode } from "react";

export type Category = {
  displayName: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type ModelCardProps = {
  model: Model;
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type ModelDetailPageProps = {
  params: Promise<{ id: string }>;
};

export interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
}

export type ModelsGridProps = {
  title: string;
  models: Model[];
};
