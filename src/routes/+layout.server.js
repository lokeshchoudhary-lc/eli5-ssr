import { BaseUrl } from '$lib/vars';

export const load = async ({ fetch, cookies }) => {
  let loginedIn = false;
  // const appStateCookie = cookies.get('appState');
  const token = cookies.get('Token');

  if (token) {
    loginedIn = true;

    const res = await fetch(`${BaseUrl}/userDetails`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    return { loginedIn, userDetails: data, token };
  } else {
    return { loginedIn };
  }
};
