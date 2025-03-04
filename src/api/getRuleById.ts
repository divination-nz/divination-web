'use server';

import { DIVINATION_RULES_API, Rule } from './types';

export const getRuleById = async (id: string): Promise<Rule> => {
  const urlQuery = DIVINATION_RULES_API + `/${id}`;

  const res = await fetch(urlQuery)
    .then((response) => (response.body ? response.json() : {}))
    .catch((error) => {
      console.error(error);
      return {};
    });

  return res as Rule;
};
