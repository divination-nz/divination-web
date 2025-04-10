import { DIVINATION_GLOSSARY_API, GlossaryTerm } from './types';

export const getGlossary = async (): Promise<GlossaryTerm[]> => {
  const urlQuery = DIVINATION_GLOSSARY_API;

  const res = await fetch(urlQuery)
    .then((response) => (response.body ? response.json() : []))
    .catch((error) => {
      console.log(error);
      return [];
    });

  return res;
};
