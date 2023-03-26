import { BaseUrl } from '$lib/vars';
import axios from 'axios';

export const load = async ({ fetch, cookies }) => {
  let loginedIn = false;
  const loginStateCookie = cookies.get('loginState1');

  if (loginStateCookie) {
    loginedIn = true;

    // axios didn't work here don't know why? didn't got cookies
    // const res  = await axios.get(`${BaseUrl}/userDetails`,{ withCredentials: true} )
    const res = await fetch(`${BaseUrl}/userDetails`);
    const data = await res.json();

    return { loginedIn, userDetails: data };
  } else {
    return { loginedIn };
  }
};
