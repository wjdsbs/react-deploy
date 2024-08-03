import { useQuery } from '@tanstack/react-query';

import { getBaseURL, getInstance } from '@/api/instance';
import type { CategoryData } from '@/types';

export type CategoryResponseData = CategoryData[];

export const getCategoriesPath = () => `${getBaseURL()}/api/category`;
const categoriesQueryKey = [getCategoriesPath()];

export const getCategories = async () => {
  const response = await getInstance().get<CategoryResponseData>(getCategoriesPath());
  console.log(response);
  return response.data;
};

export const useGetCategories = () =>
  useQuery({
    queryKey: categoriesQueryKey,
    queryFn: getCategories,
  });
