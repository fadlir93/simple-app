import axios from 'axios';
import qs from 'qs';

const { REACT_APP_API_URL } = process.env;

export const fetchData = async (
  url,
  type,
  body,
  isAuth = true,
  isFormData = false,
  config = {}
) => {
  const handleLocalStorage = localStorage.getItem('recoil-persist');
  const localAuth = JSON.parse(handleLocalStorage);
  const fetch = {
    method: type,
    url,
    baseURL: REACT_APP_API_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  if (isAuth) {
    Object.assign(fetch.headers, {
      'x-token': localAuth?.auth?.token
    });
  }
  if (body) {
    const isForm = isFormData ? body : qs.stringify(body);
    const typeData = type === 'GET' ? 'params' : 'data';
    Object.assign(fetch, {
      [typeData]: typeData === 'params' ? body : isForm
    });
  }

  try {
    const response = await axios(fetch, config);
    console.log('response', response);
    const result = { status: response.status, data: response.data };
    if (response?.data?.header) {
      result.header = response?.data?.header;
    }
    return result;
  } catch (error) {
    console.log('errors', error?.response?.status);
    return { status: error?.response?.status, data: error.response.data };
  }
};
