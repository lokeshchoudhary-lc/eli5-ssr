import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';
import { companyEmail, loginState } from '$lib/store';
// import { websiteUrl } from '$lib/vars';
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
    const location = await checkCompanyEmail(fromEndpoint.email);
    companyEmail.set(fromEndpoint.email);
    goto(location);

    if (location == '/showcase') {
      window.location.replace(location);
    } else {
      goto(location);
    }
  }
}

async function checkCompanyEmail(email) {
  try {
    const response = await axios.get(`/companyCheck/${email}`);

    if (response.data == 'go_to_profile') {
      // loginState.set(true);

      return '/showcase';
    }
    if (response.data == 'go_to_completeProfile') {
      return '/showcase/complete-profile';
    }
  } catch (err) {
    console.log(err);
  }
}
