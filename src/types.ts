export type FilterOption = "In stock";

export type SortingOption =
  | "Relevance"
  | "Price lowest"
  | "Price highest"
  | "Alphabetical";

export type SearchParamValue = string | string[] | undefined;

export type Filter = {
  key: string;
  value: string;
};

export type FilterCategory = {
  category: string;
};

export type Filters = Array<[FilterCategory, Filter[]]>;
