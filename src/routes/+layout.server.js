import { BaseUrl } from '$lib/vars';

export const load = async ({ fetch, cookies }) => {
  let loginedIn = false;
  const appStateCookie = cookies.get('appState');

  if (appStateCookie) {
    loginedIn = true;

    const res = await fetch(`${BaseUrl}/userDetails`);

    const data = await res.json();

    return { loginedIn, userDetails: data };
  } else {
    return { loginedIn };
  }
};
