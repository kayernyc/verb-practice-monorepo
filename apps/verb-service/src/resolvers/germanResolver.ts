import { LanguageMap } from '../types/global-types.ts';

// import mongoose from 'npm:mongoose@^6.5.4';

export const germanResolver = ({
  language,
  infinitive,
}: {
  language: LanguageMap;
  infinitive: string;
}) => {
  return `from the fatherland ${language} und ${infinitive}`;
};
