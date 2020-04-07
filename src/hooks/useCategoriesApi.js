import { useEffect, useState } from "react";

import CategoriesService from "services/CategoriesService";

export default function useCategoriesApi() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);

      try {
        const { data } = await CategoriesService.fetchAll();

        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  return { categories, isLoading };
}
