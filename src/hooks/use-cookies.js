import { useState, useEffect } from 'react';
const chromeCookies = chrome.cookies;
const YOCALE_URL = 'https://yocale.com';

function useCookies(params) {
  const { url, name } = {
    url: YOCALE_URL,
    ...params,
  };
  const [cookies, setCookies] = useState();
  useEffect(() => {
    chromeCookies.get({ url, name }, (data) => {
      if (data?.value) {
        setCookies(data?.value);
      }
    });
    chromeCookies.onChanged.addListener(({ cookie, removed }) => {
      if (cookie?.name === name) {
        setCookies(removed ? undefined : cookie?.value);
      }
    });
  }, [url, name]);
  return cookies;
}

export default useCookies;
