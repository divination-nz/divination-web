'use server';

import { Rule } from "./types";

export const getRulesByQuery = async (query: string): Promise<Rule[]> => {
  return [{
    "id": "103.2c",
    "description": "In a Commander game, each player puts their commander from their deck face up into the command zone. See rule 903.6."
  },
  {
    "id": "103.4c",
    "description": "In a Commander game, each player’s starting life total is 40."
  }] as Rule[]
}