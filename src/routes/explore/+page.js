import { BaseUrl } from '../../lib/vars';
import axios from 'axios';

export const load = async () => {
  const exploreTags = await axios.get(`${BaseUrl}/explore`);
  return { exploreTags };
};
