import { BaseUrl } from '$lib/vars';

export const load = async ({ fetch, cookies }) => {
  let loginedIn = false;
  const loginStateCookie = cookies.get('loginState1');

  if (loginStateCookie) {
    loginedIn = true;

    // axios didn't work here don't know why? didn't got cookies
    const res = await fetch(`${BaseUrl}/userDetails`);
    const data = await res.json();

    console.log(data)

    return { loginedIn, userDetails: data };
  } else {
    return { loginedIn };
  }
};
