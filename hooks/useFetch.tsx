import { useState, useEffect } from 'react';
import { useCategoryStore } from '@/store/categoryStore';
import { useSearchStore } from '@/store/searchStore';
function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);
  const categoryId=useCategoryStore(state=>state.categoryId);
  const addCategory=useCategoryStore(state=>state.addCategory)
  const search=useSearchStore(state=>state.search)
  console.log(url);
  

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
  }, [url,addCategory,search]);

  return { data, loading, error };
}

export default useFetch;