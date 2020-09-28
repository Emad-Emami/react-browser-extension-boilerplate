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
    chromeCookies.get({ url, name }, (data) => setCookies(data));
    chromeCookies.onChanged.addListener(({ cookie }) => {
      if (cookie?.name === name) {
        setCookies(cookie?.value);
      }
    });
  }, [url, name]);
  return cookies;
}

export default useCookies;
