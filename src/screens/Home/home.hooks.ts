import { useRef, useState } from 'react';
import { formatFetchedData, getBooks } from './home.helper';
import { PreparedBook } from '../../store/storeData.types';

export const usePaginatedContent = () => {
  const [books, setBooks] = useState<PreparedBook[]>([]);
  const [isLoading, setLoadingBooks] = useState<boolean>(false);
  const pageRef = useRef(0);
  const searchRef = useRef('');

  const getPaginatedContent = async ({ searchParam = '' }: { searchParam?: string }) => {
    if (isLoading) {
      return;
    }

    if (searchParam !== searchRef.current) {
      searchRef.current = searchParam;
      pageRef.current = 0;
      setBooks([]);
    }

    try {
      setLoadingBooks(true);
      const pageToFetch = pageRef.current + 1;
      const newBooks = await getBooks({ pageToFetch, searchParam });

      const formattedData = formatFetchedData(newBooks?.data?.items?.materials) || [];
      if (formattedData) {
        setBooks((prevBooks) => [...prevBooks, ...formattedData]);
      }

      pageRef.current = pageToFetch;
    } catch (error) {
      console.error('Fetch content error', error);
      return [];
    } finally {
      setLoadingBooks(false);
    }
  };

  return { getPaginatedContent, books, currentPage: pageRef.current, isLoading };
};
