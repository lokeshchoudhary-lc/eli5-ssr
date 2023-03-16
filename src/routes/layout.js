import { BaseUrl } from '$lib/vars';
import axios from 'axios';
import { browser } from '$app/environment';

export const load = async () => {
  if (browser) {
    let loginedIn = false;
    const loginStateCookie = getCookie('loginState');

    if (loginStateCookie != null) {
      console.log('Cookie found');
      loginedIn = true;

      return { loginedIn, userDetails: response.data };
    }
    console.log('Cookie not found');
    return { loginedIn };
  }
};

function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
