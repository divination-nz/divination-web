'use server';

import { Rule } from "./types";

export const getRuleByIndex = async (id: string): Promise<Rule> => {
  return { id: '104.3a', description: 'You may concede at any time'} as Rule;
}