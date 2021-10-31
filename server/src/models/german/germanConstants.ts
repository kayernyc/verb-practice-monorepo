import { GrammaticalFormal, GrammaticalNumber, GrammaticalPerson, GrammaticalGender } from "../languageTypes";
import { GermanCase } from "./germanTypes";

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
  'zu', 'zurecht', 'zurück', 'zusammen'
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
  'ab': `The prefix ‚ab’ usually - but not always - carries the notion of "away from". ‚ab’ means starting from a time in the future, and as a temporal preposition, it is dative.`,
  'an': `The prefix ‚an’ usually carries the meanings "at," "begin," "on," "onward," "to," or "toward". ‚an’ can mean to or on,onward, and can be accusative or dative.`,
  'auf': "‚auf’ can mean on or upon, out, up, or un-, and can be accusative or dative.",
  'aus': `‚aus’ can mean from or out of, adds the meanings "out," "outward," "extended," "completely," "missing" and is dative.`,
  'auseinander': "‚auseinander’ means apart, and is dative.",
  'bei': "‚bei’ means along or with, it is dative.",
  'da': `The prefixes ‚da' and "dabei" mean "there" — "dabei" has the sense of staying with something that is going on`,
  'dabei': `The prefixes ‚da' and "dabei" mean "there" — "dabei" has the sense of staying with something that is going on`,
  'dar': "‚dar’ is used when the main verb is done for others. It is not a particle that can be used on its own.",
  'durch': `"durch" has the meaning of entering a process with purpose and coming out the other end.`,
  'ein': "‚ein’ means in, into, inward, it is dative.",
  'empor': `"empor" has the meaning of "upwards"`,
  'entgegen': `"entgegen" means "toward" or "against"`,
  'entlang': `"entlang-" means "along". It can be affixed to just about any verb of motion.`,
  'entzwei': `"entzwei" means "asunder", "in half", "into two pieces"`,
  'fehl': `"fehl-" has the sense of "wrong" or "false".`,
  'fern': `"fern"means "far" and corresponds to the English "tele". It more often affixed to nouns (e.g. "die Fernbahn [long-distance rail].`,
  'fest': `"fest" means "firm" or "fixed". It often appears as an adverb or adjective (e.g. "fest glauben" [to believe firmly]). Not to be confused with "das Fest", as in "das Festessen" (banquet; feast).`,
  'fort': `"fort" means "away," "forth," or "onward" [as in "continuing"].`,
  'frei': `"frei-" means "free" or "clear"`,
  'gegenüber': `gegenüber" means "across from," "opposite".`,
  'gleich': `gleich means "equal"`,
  'her': `"her indicates motion toward the speaker, "hither". It can also combine with a number of other prefixes, making their direction more precise. Note that these prefixes do not necessarily replace prepositions.`,
  'herab': `"herab" means "down from" or "off from". Again, the direction is toward the point of view of the speaker".`,
  'heran': `"heran": has the meaning of "approaching toward [the point of view of the speaker]".`,
  'herauf': `"herauf" means "up from," "out of" — toward the point of view of the speaker.`,
  'heraus': `"heraus" means "from," "out of" — toward the point of view of the speaker.`,
  'herbei': `"herbei" means "(towards) over here".`,
  'herein': `"herein" means to "come in", i.e. into a real or metaphorical space that marks the speaker's point of orientation.`,
  'herüber': `"herüber" means "over in this direction".`,
  'herum': `"herum" means "around." As with the English "around," it indicates either a specific direction or a lack of direction.`,
  'herunter': `"herunter" means "down" or "downwards", "towards the speaker:".`,
  'hinauf': `"hinauf" indicates an upward direction away from the speaker and can be affixed to any appropriate verb of motion.`,
  'hinaus': `"hinaus" means "from," "out of" — away from the speaker. It takes on a number of figurative meanings, as well.`,
  'hinein': `"hinein" means "into" — away from the speaker.`,
  'hinweg': `"hinweg" has the sense of "beyond" or "past".`,
  'heim': `"heim" means "(to) home"`,
  'hoch': `"hoch," when affixed to a verb, indicates an upward motion or position.`,
  'mit': "mit means with, and is dative.",
  'statt': `"statt" does not have a specific meaning as a prefix and appears in just two verbs.`,
  'über': "‚über’ means over, and can be accusative or dative.",
  'um': `"um" can carry a variety of meanings including "around," "down," and "over." It also can denote substantial sorts of change.`,
  'vor': `‚vor’ means "before," "forward," "pre-," and "pro", and as a temporal preposition, it is dative.`,
  'vorweg': `"vorweg" means "in anticipation," "pre-emptively".`,
  'voraus': `"voraus" means "in advance"`,
  'vorbei': `"vorbei" means "past"`,
  'vorüber': `"vorüber" means "past" or "by"`,
  'voran': `voran means "ahead."`,
  'vorangehen': `vorangehen means "to go ahead".`,
  'vorankommen': `vorankommen means "to make progress".`,
  'weiter': `"weiter" means "further", see also "fort"`,
  'wieder': `"wieder" means "again"`,
  'zu': `‚zu’ means "closed," "to," "towards," "upon" and is dative.`,
  'zurecht': `conveys the idea of "correct," "proper."`,
  'zurück': `"zurück" means "back," or "re"`,
  'zusammen': `"zusammen" means "together"`,
}

// tslint:disable: no-bitwise
export const GermanPronoun = (bitwisePerson: number) => {
  switch (bitwisePerson) {
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Nominative:
      return 'ich'
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Accusative:
      return 'mich'
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Dative:
      return 'mir'
    case GrammaticalPerson.First + GrammaticalNumber.Singular + GermanCase.Genative:
      return 'meiner'
    case GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Nominative:
      return 'wir'
    case (GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Accusative + GermanCase.Dative) & bitwisePerson:
      return 'uns'
    case (GrammaticalPerson.First + GrammaticalNumber.Plural + GermanCase.Genative) & bitwisePerson:
      return 'unserer'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Nominative + GrammaticalFormal.Informal:
      return 'du'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Accusative + GrammaticalFormal.Informal:
      return 'dich'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Dative + GrammaticalFormal.Informal:
      return 'dir'
    case GrammaticalPerson.Second + GrammaticalNumber.Singular + GermanCase.Genative + GrammaticalFormal.Informal:
      return 'deiner'
    case (GrammaticalPerson.Third + GermanCase.Dative + GrammaticalGender.Feminine + GrammaticalNumber.Singular) & bitwisePerson:
    case GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Nominative:
      return 'ihr'
    case (GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Accusative + GermanCase.Dative) & bitwisePerson:
      return 'euch'
    case (GrammaticalPerson.Second + GrammaticalNumber.Plural + GrammaticalFormal.Informal + GermanCase.Genative) & bitwisePerson:
      return 'euerer'
    case (GrammaticalPerson.Third + GermanCase.Nominative + GermanCase.Accusative + GrammaticalGender.Feminine + GrammaticalNumber.Singular) & bitwisePerson:
    case (GrammaticalPerson.Third + GermanCase.Nominative + GermanCase.Accusative + GrammaticalNumber.Plural) & bitwisePerson:
      return 'sie'
    case (GrammaticalPerson.Third + GermanCase.Dative + GrammaticalNumber.Plural) & bitwisePerson:
      return 'ihnen'
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Feminine + GermanCase.Genative:
    case GrammaticalPerson.Third + GrammaticalNumber.Plural + GermanCase.Genative:
      return 'ihrer'
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Nominative:
      return 'er'
    case GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GermanCase.Accusative:
      return 'ihn'
    case (GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Masculine + GrammaticalGender.Neuter + GermanCase.Dative) & bitwisePerson:
      return 'ihm'
    case (GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GermanCase.Nominative + GermanCase.Accusative) & bitwisePerson:
      return 'es'
    case (GrammaticalPerson.Third + GrammaticalNumber.Singular + GrammaticalGender.Neuter + GrammaticalGender.Masculine + GermanCase.Genative) & bitwisePerson:
      return 'seiner'
    case (GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Accusative + GermanCase.Nominative + GrammaticalNumber.Plural + GrammaticalNumber.Singular) & bitwisePerson:
      return 'Sie'
    case (GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Dative + GrammaticalNumber.Plural + GrammaticalNumber.Singular) & bitwisePerson:
      return 'Ihnen'
    case GrammaticalPerson.Second + GrammaticalFormal.Formal + GermanCase.Genative + GrammaticalNumber.Plural:
      return 'Ihrer'
    default:
      return 'Man'
  }
}
// tslint:enable: no-bitwise