import { BaseUrl } from '../../lib/vars';
import axios from 'axios';

export const load = async () => {
  const leaderboard = await axios.get(`${BaseUrl}/leaderboard`);
  return { leaderboard };
};
