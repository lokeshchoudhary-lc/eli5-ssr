import axios from 'axios';
import { BaseUrl } from '$lib/vars';

export const load = async () => {
  let logedIn = false;

  const companyList = await axios.get(`${BaseUrl}/company`);

  const res = await axios.get(`${BaseUrl}/companyAuthCheck`, {
    withCredentials: true,
  });
  logedIn = res.data.auth;

  if (logedIn == true) {
    const resUniqueAlias = await axios.get(`${BaseUrl}/getCompanyUniqueAlias`, {
      withCredentials: true,
    });

    return {
      logedIn,
      companyList: companyList.data,
      uniqueAlias: resUniqueAlias.data.uniqueAlias,
    };
  } else {
    return { logedIn, companyList: companyList.data };
  }
};
