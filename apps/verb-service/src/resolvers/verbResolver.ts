import { LanguageMap } from '../types/global-types.ts';

type ResolverFunction = ({
  language,
  infinitive,
}: {
  language: LanguageMap;
  infinitive: string;
}) => string;

const germanResolver = ({
  language,
  infinitive,
}: {
  language: LanguageMap;
  infinitive: string;
}) => {
  return `from the fatherland ${language} und ${infinitive}`;
};

const frenchResolver = ({
  language,
  infinitive,
}: {
  language: LanguageMap;
  infinitive: string;
}) => {
  return `je viens de ${language} et ${infinitive}`;
};

const englishResolver = ({
  language,
  infinitive,
}: {
  language: LanguageMap;
  infinitive: string;
}) => {
  return `I come from ${language} and ${infinitive}`;
};

const resolverDictionary: Record<LanguageMap, ResolverFunction> = {
  [LanguageMap.de]: germanResolver,
  [LanguageMap.fr]: frenchResolver,
  [LanguageMap.en]: englishResolver,
};

export const verbResolver = (
  _: unknown,
  { language, infinitive }: { language: LanguageMap; infinitive: string },
): string => {
  const result = resolverDictionary[language]({ language, infinitive });
  return `result ${result} and infinitive: ${infinitive}`;
};
