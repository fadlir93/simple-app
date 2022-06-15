import { fetchData } from '../../../utils/fetchData';

export const handleListCart = async ({ page, setItems, filterName, isSearch }) => {
  const fetchUrl = isSearch ? '/breeds/search' : '/breeds';
  const param = {
    setPage: page,
    limit: 10,
    q: filterName
  };
  try {
    const result = await fetchData(fetchUrl, 'GET', param, true);
    if (result.status === 200) {
      if (isSearch) {
        setItems(result.data);
        return;
      }
      setItems((d) => d.concat(result.data));
    }
  } catch (error) {
    console.log('error list cart :', error);
  }
};
