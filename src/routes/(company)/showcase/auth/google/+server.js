import { error, json, redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { PUBLIC_GOOGLE_CLIENT_ID } from '$env/static/public';

async function getGoogleUserFromJWT(token) {
  try {
    const client = new OAuth2Client(PUBLIC_GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: PUBLIC_GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload)
      throw error(
        500,
        'Google authentication did not get the expected payload'
      );

    let emailRes = payload.email;
    return {
      email: emailRes,
    };
  } catch (err) {
    let message = '';
    if (err instanceof Error) message = err.message;
    throw error(500, `Google user could not be authenticated: ${message}`);
  }
}

// Returns local user if Google user authenticated (and authorized our app)
export const POST = async (event) => {
  try {
    const { token } = await event.request.json();
    const user = await getGoogleUserFromJWT(token);

    return json(user);
  } catch (err) {
    let message = '';
    if (err instanceof Error) message = err.message;
    throw error(401, message);
  }
};
