import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';
import { firstName, email, loginState } from '$lib/store';
import { websiteUrl } from '$lib/vars';
import { goto } from '$app/navigation';
import axios from 'axios';

export function renderGoogleButton() {
  const btn = document.getElementById('googleButton');
  if (btn) {
    google.accounts.id.renderButton(btn, {
      type: 'standard',
      shape: 'pill',
      text: 'continue_with',
      theme: 'outline',
      size: 'large',
      logo_alignment: 'left',
    });
  }
}

export function initializeGoogleAccounts() {
  google.accounts.id.initialize({
    client_id: PUBLIC_GOOGLE_CLIENT_ID,
    callback: googleCallback,
  });
}

async function googleCallback(response) {
  const res = await fetch('/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: response.credential }),
  });

  if (res.ok) {
    const fromEndpoint = await res.json();
    const location = await checkEmail(fromEndpoint.email);
    firstName.set(fromEndpoint.firstName);
    email.set(fromEndpoint.email);
    if (location == '/') {
      window.location.replace(websiteUrl);
    } else {
      goto(location);
    }
  }
}

async function checkEmail(email) {
  try {
    const response = await axios.get(`/userCheck/${email}`);

    if (response.data == 'go_to_feed') {
      // loginState.set(true);

      return '/';
    }
    if (response.data == 'go_to_completeProfile') {
      return '/complete-profile';
    }
  } catch (err) {
    console.log(err);
  }
}
