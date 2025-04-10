const DIVINATION_API = 'https://api.divination.nz';
export const DIVINATION_RULES_API = `${DIVINATION_API}/rules`;
export const DIVINATION_GLOSSARY_API = `${DIVINATION_API}/glossary`;

export interface Rule {
  id: string;
  description: string;
}

export interface GlossaryTerm {
  term: string;
  description: string;
}
