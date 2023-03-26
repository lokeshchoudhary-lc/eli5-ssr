import { BaseUrl } from '$lib/vars';
import { error } from '@sveltejs/kit';
import axios from 'axios';

export const load = async ({ fetch, cookies }) => {
  let loginedIn = false;
  const loginStateCookie = cookies.get('loginState1');

  if (loginStateCookie) {
    loginedIn = true;

    try {
      const res = await fetch(`${BaseUrl}/userDetails`);
      const data = await res.json();

      return { loginedIn, userDetails: data };
    } catch (err) {
      throw error(404, 'not working', err);
    }
    // axios didn't work here don't know why? didn't got cookies
    // const res  = await axios.get(`${BaseUrl}/userDetails`,{ withCredentials: true} )
  } else {
    return { loginedIn };
  }
};
