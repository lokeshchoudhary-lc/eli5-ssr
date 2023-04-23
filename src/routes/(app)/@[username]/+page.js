import { BaseUrl } from '$lib/vars';
import axios from 'axios';

export const load = async ({ params }) => {
  const userName = params.username;

  const res = await axios.get(`${BaseUrl}/profileDetails/${userName}`);

  // console.log(res.data);

  return { userProfile: res.data, userName };
};
