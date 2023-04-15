import { BaseUrl } from '$lib/vars';

export const load = async ({ fetch, cookies }) => {
  let loginedIn = false;
  const appStateCookie = cookies.get('appState');
  const userCookie = cookies.get('user');

  if (appStateCookie) {
    loginedIn = true;

    const res = await fetch(`${BaseUrl}/userDetails/${userCookie}`);

    const data = await res.json();

    return { loginedIn, userDetails: data };
  } else {
    return { loginedIn };
  }
};
