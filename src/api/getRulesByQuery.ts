'use server';

import { DIVINATION_RULES_API, Rule } from './types';

export const getRulesByQuery = async (query: string): Promise<Rule[]> => {
  const encodedQueryString = encodeURIComponent(query);

  const urlQuery = DIVINATION_RULES_API + `/search?query=${encodedQueryString}`;

  const res = await fetch(urlQuery, { cache: 'force-cache' })
    .then((response) =>
      response.body && response.status === 200 ? response.json() : []
    )
    .catch((error) => {
      console.error(error);
      return [];
    });

  return res;
};
