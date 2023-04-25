import axios from 'axios';
import { BaseUrl } from '$lib/vars';

export const load = async ({ params }) => {
  const companyName = params.company;

  const company = await axios.get(`${BaseUrl}/company/${companyName}`);

  return { companyDetails: company.data, companyName };
};
