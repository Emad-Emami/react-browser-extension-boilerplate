import useCookies from '@hooks/use-cookies';
const YOCALE_2_JWT = 'Yocale2Jwt';

function useUserJwtTokenCookie(name = YOCALE_2_JWT) {
  const userToken = useCookies({ name });
  let user;
  if (userToken) {
    try {
      user = JSON.parse(userToken)?.user;
    } catch (error) {
      throw Error(`${YOCALE_2_JWT} cookie is not parsable to JSON object.`);
    }
  }
  return user;
}

export default useUserJwtTokenCookie;
