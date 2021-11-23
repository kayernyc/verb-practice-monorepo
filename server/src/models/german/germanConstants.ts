import {
  GrammaticalFormal, GrammaticalNumber, GrammaticalPerson, GrammaticalGender,
} from '../languageTypes';
import { GermanCase } from './germanTypes';

export const firstVowelGroupRegex = /\b([bcdfghjklmnpqrstvwxyzß]+)([aeiouäöü]+)([bcdfghjklmnpqrstvwxyzß][a-zß]+)\b/;

export const inseperableRegex = /^(?<prefix>be|emp|ent|er|ge|miß|ver|zer)(.*)/;
export const separableArray = [
  'ab', 'an', 'auf', 'aus',
  'auseinander', 'bei', 'da', 'dabei',
  'dar', 'durch', 'ein', 'empor',
  'entgegen', 'entlang', 'entzwei', 'fehl',
  'fern', 'fest', 'fort', 'frei',
  'gegenüber', 'gleich', 'her', 'herab',
  'heran', 'herauf', 'heraus', 'herbei',
  'herein', 'herüber', 'herum', 'herunter',
  'hinauf', 'hinaus', 'hinein', 'hinweg',
  'heim', 'hoch', 'mit', 'statt',
  'über', 'um', 'vor', 'vorweg',
  'voraus', 'vorbei', 'vorüber', 'voran',
  'vorangehen', 'vorankommen', 'weiter', 'wieder',
  'zu', 'zurecht', 'zurück', 'zusammen',
];

export const separableRegex = new RegExp(separableArray.join('|'), 'gi');

export const consonents = [
  'b',
  'c',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'q',
  'r',
  's',
  't',
  'v',
  'w',
  'x',
  'y',
  'z',
  'ß',
];
export const vowels = ['a', 'e', 'i', 'o', 'u', 'ä', 'ë', 'ü'];

// taken from http://www.dartmouth.edu/~deutsch/Grammatik/Wortbildung/Separables.html
export const GermanParticleRules = {
  ab: 'The prefix ‚ab’ usually - but not always - carries the notion of "away from". ‚ab’ means starting from a time in the future, and as a temporal preposition, it is dative.',
  an: 'The prefix ‚an’ usually carries the meanings "at," "begin," "on," "onward," "to," or "toward". ‚an’ can mean to or on,onward, and can be accusative or dative.',
  auf: '‚auf’ can mean on or upon, out, up, or un-, and can be accusative or dative.',
  aus: '‚aus’ can mean from or out of, adds the meanings "out," "outward," "extended," "completely," "missing" and is dative.',
  auseinander: '‚auseinander’ means apart, and is dative.',
  bei: '‚bei’ means along or with, it is dative.',
  da: 'The prefixes ‚da\' and "dabei" mean "there" — "dabei" has the sense of staying with something that is going on',
  dabei: 'The prefixes ‚da\' and "dabei" mean "there" — "dabei" has the sense of staying with something that is going on',
  dar: '‚dar’ is used when the main verb is done for others. It is not a particle that can be used on its own.',
  durch: '"durch" has the meaning of entering a process with purpose and coming out the other end.',
  ein: '‚ein’ means in, into, inward, it is dative.',
  empor: '"empor" has the meaning of "upwards"',
  entgegen: '"entgegen" means "toward" or "against"',
  entlang: '"entlang-" means "along". It can be affixed to just about any verb of motion.',
  entzwei: '"entzwei" means "asunder", "in half", "into two pieces"',
  fehl: '"fehl-" has the sense of "wrong" or "false".',
  fern: '"fern"means "far" and corresponds to the English "tele". It more often affixed to nouns (e.g. "die Fernbahn [long-distance rail].',
  fest: '"fest" means "firm" or "fixed". It often appears as an adverb or adjective (e.g. "fest glauben" [to believe firmly]). Not to be confused with "das Fest", as in "das Festessen" (banquet; feast).',
  fort: '"fort" means "away," "forth," or "onward" [as in "continuing"].',
  frei: '"frei-" means "free" or "clear"',
  gegenüber: 'gegenüber" means "across from," "opposite".',
  gleich: 'gleich means "equal"',
  her: '"her indicates motion toward the speaker, "hither". It can also combine with a number of other prefixes, making their direction more precise. Note that these prefixes do not necessarily replace prepositions.',
  herab: '"herab" means "down from" or "off from". Again, the direction is toward the point of view of the speaker".',
  heran: '"heran": has the meaning of "approaching toward [the point of view of the speaker]".',
  herauf: '"herauf" means "up from," "out of" — toward the point of view of the speaker.',
  heraus: '"heraus" means "from," "out of" — toward the point of view of the speaker.',
  herbei: '"herbei" means "(towards) over here".',
  herein: '"herein" means to "come in", i.e. into a real or metaphorical space that marks the speaker\'s point of orientation.',
  herüber: '"herüber" means "over in this direction".',
  herum: '"herum" means "around." As with the English "around," it indicates either a specific direction or a lack of direction.',
  herunter: '"herunter" means "down" or "downwards", "towards the speaker:".',
  hinauf: '"hinauf" indicates an upward direction away from the speaker and can be affixed to any appropriate verb of motion.',
  hinaus: '"hinaus" means "from," "out of" — away from the speaker. It takes on a number of figurative meanings, as well.',
  hinein: '"hinein" means "into" — away from the speaker.',
  hinweg: '"hinweg" has the sense of "beyond" or "past".',
  heim: '"heim" means "(to) home"',
  hoch: '"hoch," when affixed to a verb, indicates an upward motion or position.',
  mit: 'mit means with, and is dative.',
  statt: '"statt" does not have a specific meaning as a prefix and appears in just two verbs.',
  über: '‚über’ means over, and can be accusative or dative.',
  um: '"um" can carry a variety of meanings including "around," "down," and "over." It also can denote substantial sorts of change.',
  vor: '‚vor’ means "before," "forward," "pre-," and "pro", and as a temporal preposition, it is dative.',
  vorweg: '"vorweg" means "in anticipation," "pre-emptively".',
  voraus: '"voraus" means "in advance"',
  vorbei: '"vorbei" means "past"',
  vorüber: '"vorüber" means "past" or "by"',
  voran: 'voran means "ahead."',
  vorangehen: 'vorangehen means "to go ahead".',
  vorankommen: 'vorankommen means "to make progress".',
  weiter: '"weiter" means "further", see also "fort"',
  wieder: '"wieder" means "again"',
  zu: '‚zu’ means "closed," "to," "towards," "upon" and is dative.',
  zurecht: 'conveys the idea of "correct," "proper."',
  zurück: '"zurück" means "back," or "re"',
  zusammen: '"zusammen" means "together"',
};

export const GermanPronoun = (bitwisePerson: number) => {
  switch (bitwisePerson) {
    case GrammaticalPerson.First.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GermanCase.Nominative.valueOf():
      return 'ich';
    case GrammaticalPerson.First.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GermanCase.Accusative.valueOf():
      return 'mich';
    case GrammaticalPerson.First.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GermanCase.Dative.valueOf():
      return 'mir';
    case GrammaticalPerson.First.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GermanCase.Genative.valueOf():
      return 'meiner';
    case GrammaticalPerson.First.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GermanCase.Nominative.valueOf():
      return 'wir';
    case (GrammaticalPerson.First.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GermanCase.Accusative.valueOf()
      + GermanCase.Dative.valueOf()) & bitwisePerson.valueOf():
      return 'uns';
    case (GrammaticalPerson.First.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GermanCase.Genative.valueOf()) & bitwisePerson.valueOf():
      return 'unserer';
    case GrammaticalPerson.Second.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GermanCase.Nominative.valueOf()
      + GrammaticalFormal.Informal.valueOf():
      return 'du';
    case GrammaticalPerson.Second.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GermanCase.Accusative.valueOf()
      + GrammaticalFormal.Informal.valueOf():
      return 'dich';
    case GrammaticalPerson.Second.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GermanCase.Dative.valueOf()
      + GrammaticalFormal.Informal.valueOf():
      return 'dir';
    case GrammaticalPerson.Second.valueOf()
      + GrammaticalNumber.Singular.valueOf() + GermanCase.Genative.valueOf()
      + GrammaticalFormal.Informal.valueOf():
      return 'deiner';
    case (GrammaticalPerson.Third.valueOf()
      + GermanCase.Dative.valueOf()
      + GrammaticalGender.Feminine.valueOf()
      + GrammaticalNumber.Singular.valueOf())
      & bitwisePerson.valueOf():
    case GrammaticalPerson.Second.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GrammaticalFormal.Informal.valueOf()
      + GermanCase.Nominative.valueOf():
      return 'ihr';
    case (GrammaticalPerson.Second.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GrammaticalFormal.Informal.valueOf()
      + GermanCase.Accusative.valueOf()
      + GermanCase.Dative.valueOf())
      & bitwisePerson:
      return 'euch';
    case (GrammaticalPerson.Second.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GrammaticalFormal.Informal.valueOf()
      + GermanCase.Genative.valueOf())
      & bitwisePerson.valueOf():
      return 'euerer';
    case (GrammaticalPerson.Third.valueOf()
      + GermanCase.Nominative.valueOf()
      + GermanCase.Accusative.valueOf()
      + GrammaticalGender.Feminine.valueOf()
      + GrammaticalNumber.Singular.valueOf())
      & bitwisePerson.valueOf():
    case (GrammaticalPerson.Third.valueOf()
      + GermanCase.Nominative.valueOf()
      + GermanCase.Accusative.valueOf()
      + GrammaticalNumber.Plural.valueOf())
      & bitwisePerson.valueOf():
      return 'sie';
    case (GrammaticalPerson.Third.valueOf()
      + GermanCase.Dative.valueOf()
      + GrammaticalNumber.Plural.valueOf())
      & bitwisePerson.valueOf():
      return 'ihnen';
    case GrammaticalPerson.Third.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GrammaticalGender.Feminine.valueOf()
      + GermanCase.Genative.valueOf():
    case GrammaticalPerson.Third.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GermanCase.Genative.valueOf():
      return 'ihrer';
    case GrammaticalPerson.Third.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GrammaticalGender.Masculine.valueOf()
      + GermanCase.Nominative.valueOf():
      return 'er';
    case GrammaticalPerson.Third.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GrammaticalGender.Masculine.valueOf()
      + GermanCase.Accusative.valueOf():
      return 'ihn';
    case (GrammaticalPerson.Third.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GrammaticalGender.Masculine.valueOf()
      + GrammaticalGender.Neuter.valueOf()
      + GermanCase.Dative.valueOf())
      & bitwisePerson.valueOf():
      return 'ihm';
    case (GrammaticalPerson.Third.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GrammaticalGender.Neuter.valueOf()
      + GermanCase.Nominative.valueOf()
      + GermanCase.Accusative.valueOf())
      & bitwisePerson.valueOf():
      return 'es';
    case (GrammaticalPerson.Third.valueOf()
      + GrammaticalNumber.Singular.valueOf()
      + GrammaticalGender.Neuter.valueOf()
      + GrammaticalGender.Masculine.valueOf()
      + GermanCase.Genative.valueOf())
      & bitwisePerson.valueOf():
      return 'seiner';
    case (GrammaticalPerson.Second.valueOf()
      + GrammaticalFormal.Formal.valueOf()
      + GermanCase.Accusative.valueOf()
      + GermanCase.Nominative.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GrammaticalNumber.Singular.valueOf())
      & bitwisePerson.valueOf():
      return 'Sie';
    case (GrammaticalPerson.Second.valueOf()
      + GrammaticalFormal.Formal.valueOf()
      + GermanCase.Dative.valueOf()
      + GrammaticalNumber.Plural.valueOf()
      + GrammaticalNumber.Singular.valueOf())
      & bitwisePerson.valueOf():
      return 'Ihnen';
    case GrammaticalPerson.Second.valueOf()
      + GrammaticalFormal.Formal.valueOf()
      + GermanCase.Genative.valueOf()
      + GrammaticalNumber.Plural.valueOf():
      return 'Ihrer';
    default:
      return 'Man';
  }
};
