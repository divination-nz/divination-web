import { DIVINATION_GLOSSARY_API, GlossaryTerm } from './types';

export const getGlossary = async (): Promise<GlossaryTerm[]> => {
  const urlQuery = DIVINATION_GLOSSARY_API;

  const res = await fetch(urlQuery, { cache: 'force-cache' })
    .then((response) => (response.body ? response.json() : []))
    .catch((error) => {
      console.log(error);
      return [];
    });

  return res;
};
