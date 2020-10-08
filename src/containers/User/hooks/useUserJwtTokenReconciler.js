import { useEffect, useMemo } from 'react';
import { isEqual } from 'lodash-es';
import { useDispatch } from 'react-redux';
import { updateEntities } from 'redux-query';
import useUserJwtTokenCookie from '@containers/User/hooks/useUserJwtTokenCookie';
import useGetUserAuthentication from '@containers/User/hooks/useGetUserAuthentication';

function useUserJwtTokenReconciler() {
  const dispatch = useDispatch();
  const userCookieAuthentication = useUserJwtTokenCookie();
  const userAuthentication = useGetUserAuthentication();
  // console.log(userAuthentication, userCookieAuthentication);
  const isSynchronized = useMemo(
    () => isEqual(userAuthentication, userCookieAuthentication),
    [userAuthentication, userCookieAuthentication],
  );
  useEffect(() => {
    if (!isSynchronized) {
      dispatch?.(
        updateEntities({
          user: (prevState) => ({
            ...prevState,
            authentication: userCookieAuthentication,
          }),
        }),
      );
    }
  }, [isSynchronized, userCookieAuthentication, dispatch]);
  return isSynchronized;
}

export default useUserJwtTokenReconciler;
