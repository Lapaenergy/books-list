import { API_CONSTANTS } from '../../constants/api.constants';
import { InitialBook, PreparedBook } from '../../store/storeData.types';

export const formatFetchedData = (data: InitialBook[]): PreparedBook[] =>
  data?.map((item) => ({
    id: item?.id,
    price: item?.price,
    title: item?.title,
    publicName: item?.author?.details?.publicName,
    preview: item?.firstPreviewImage?.watermarked,
  }));

export const extractKey = (item: PreparedBook, index: number) => `${item.id}-${index}`;

export const getBooks = async ({ pageToFetch, searchParam = '' }: { pageToFetch: number; searchParam?: string }) => {
  const newBooksRes = await fetch(
    `${API_CONSTANTS.baseUrl}/${API_CONSTANTS.apiVersion}/elastic?limit=20&p=${pageToFetch}&q=${searchParam}&world=de`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: API_CONSTANTS.authToken as string,
      },
    },
  );
  const newBooks = await newBooksRes.json();

  return newBooks;
};
