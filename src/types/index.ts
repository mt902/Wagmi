export type CategoryKey = "meme" | "l2" | "ai" | "macro" | "elections" | "sports";

export type Option = {
  label: string;
  weights: Partial<Record<CategoryKey, number>>;
};

export type Question = {
  id: number;
  title: string;
  options: Option[];
};

export type Profile = {
  key: CategoryKey;
  name: string;
  shortDescription: string;
  recommendedMarkets: string[];
  color: string;
  bgGradient: string;
  icon: string;
};

export type Scores = Record<CategoryKey, number>;

