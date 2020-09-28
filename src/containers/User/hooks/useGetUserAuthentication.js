import { useSelector } from 'react-redux';
import getUserAuthentication from '../selectors/getUserAuthentication';

function useGetUserAuthentication() {
  return useSelector(getUserAuthentication);
}

export default useGetUserAuthentication;
