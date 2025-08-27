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
