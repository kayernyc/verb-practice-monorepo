import { LanguageMap } from '../types/global-types.ts';

export const germanResolver = ({
  language,
  infinitive,
}: {
  language: LanguageMap;
  infinitive: string;
}) => {
  return `from the fatherland ${language} und ${infinitive}`;
};
