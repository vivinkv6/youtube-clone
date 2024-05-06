import { useState, useEffect } from 'react';
import { useCategoryStore } from '@/store/categoryStore';
function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const categoryId=useCategoryStore(state=>state.categoryId)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url,categoryId]);

  return { data, loading, error };
}

export default useFetch;