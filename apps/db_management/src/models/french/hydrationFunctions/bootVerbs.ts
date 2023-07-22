import { BaseFrenchVerb } from "@models/french/frenchTypes";
import { TenseType, PronounType } from "@models/french/types/hydrationTypes";

const doubleConsonant = ['appeler', 'chanceler', 'épeler', 'rappeler',
  'renouveler', 'ruisseler', 'feuilleter', 'hoqueter', 'jeter', 'projeter', 'rejeter'];

const doubleERegex: RegExp = /[e|é]\wer\b/; // e|é cons er

const yer: RegExp = /(a|o|u)yer\b/;

const fullTenseConverter = (sourceConjugation: TenseType, regex: RegExp, substitution: string) => {
  return Object.entries({ ...sourceConjugation }).reduce((acc, entry) => {
    const [pronoun, verbString] = entry;

    acc[pronoun as PronounType] = verbString.replace(regex, substitution)

    return acc;
  }, {} as TenseType);
}

const bootConverter = (sourceConjugation: TenseType, regex: RegExp, substitution: string) => {
  return Object.entries({ ...sourceConjugation }).reduce((acc, entry) => {
    const [pronoun, verbString] = entry;

    if (pronoun === '1041' || pronoun === '1074') {
      acc[pronoun] = verbString
    } else {
      acc[pronoun as PronounType] = verbString.replace(regex, substitution)
    }

    return acc;
  }, {} as TenseType);
}

export const modifyBootVerb = (verb: BaseFrenchVerb): BaseFrenchVerb => {
  const { infinitive } = verb;
  const returnVerb = { ...verb };

  if (doubleConsonant.includes(infinitive)) {
    const eRegex = /([e|é])(?<cons>l|t)(e((nt)|s|r)?)\b/;
    const infRegex = /([e|é])(?<cons>l|t)(er(ai?(s|t|ent)?|i?ons|i?ez|ont|ent))/;
    const bootSubstitution = "$1$<cons>$<cons>$3";

    returnVerb.présent = bootConverter(returnVerb.présent as TenseType, eRegex, bootSubstitution);
    returnVerb.subjunctif = bootConverter(returnVerb.subjunctif as TenseType, eRegex, bootSubstitution);
    returnVerb.conditional = fullTenseConverter(returnVerb.conditional as TenseType, infRegex, bootSubstitution);
    returnVerb.futur = fullTenseConverter(returnVerb.futur as TenseType, infRegex, bootSubstitution);
  }

  if (doubleERegex.test(infinitive) && !doubleConsonant.includes(infinitive)) {
    const eRegex = /(?<vowel>[e|é])(\we((nt)|s)?)/;
    const bootSubstitution = "è$2"
    returnVerb.présent = bootConverter(returnVerb.présent as TenseType, eRegex, bootSubstitution);
    returnVerb.subjunctif = bootConverter(returnVerb.subjunctif as TenseType, eRegex, bootSubstitution);
  }

  if (yer.test(infinitive)) {
    const yerRegex = /(a|o|u)(?<y>y)(e(s|nt)?)/;
    const bootSubstitution = "$1i$3";
    returnVerb.présent = bootConverter(returnVerb.présent as TenseType, yerRegex, bootSubstitution);
    returnVerb.subjunctif = bootConverter(returnVerb.subjunctif as TenseType, yerRegex, bootSubstitution);
    returnVerb.conditional = fullTenseConverter(returnVerb.conditional as TenseType, yerRegex, bootSubstitution);
    returnVerb.futur = fullTenseConverter(returnVerb.futur as TenseType, yerRegex, bootSubstitution);
  }

  return returnVerb;
}