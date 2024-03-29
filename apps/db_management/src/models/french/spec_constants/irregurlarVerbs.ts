import { FrenchTenses } from "french-types";
import { LanguageMap, LanguageVerbCandidate } from "global-types";

export const servirReturnObject = {
  infinitive: 'servir',
  conditional: {
    1033: 'servirais',
    1041: 'servirions',
    1074: 'serviriez',
    1098: 'servirais',
    1292: 'servirait',
    1300: 'serviraient'
  },
  futur: {
    1033: 'servirai',
    1041: 'servirons',
    1074: 'servirez',
    1098: 'serviras',
    1292: 'servira',
    1300: 'servirent'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'servais',
    1041: 'servions',
    1074: 'serviez',
    1098: 'servais',
    1292: 'servait',
    1300: 'servaient'
  },
  participe: 'servi',
  present_participe: 'servant',
  présent: {
    1033: 'sers',
    1041: 'servons',
    1074: 'servez',
    1098: 'sers',
    1292: 'sert',
    1300: 'servent'
  },
  simple: {
    1033: 'servis',
    1041: 'servîmes',
    1074: 'servîtes',
    1098: 'servis',
    1292: 'servit',
    1300: 'servirent'
  },
  subjunctif: {
    1033: 'serve',
    1041: 'servions',
    1074: 'serviez',
    1098: 'serves',
    1292: 'serve',
    1300: 'servent'
  }
};

export const rompreFrenchVerb: LanguageVerbCandidate = {
  language: LanguageMap.fr,
  helper_verb: 'sein',
  infinitive: 'rompre',
  irregular: {
    [FrenchTenses.présent]: {
      il: 'rompt'
    },
  },
  translations: { en: 'break' },
};

export const rompreReturnObject = {
  infinitive: 'rompre',
  conditional: {
    1033: 'romprais',
    1041: 'romprions',
    1074: 'rompriez',
    1098: 'romprais',
    1292: 'romprait',
    1300: 'rompraient'
  },
  futur: {
    1033: 'romprai',
    1041: 'romprons',
    1074: 'romprez',
    1098: 'rompras',
    1292: 'rompra',
    1300: 'rompront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'rompais',
    1041: 'rompions',
    1074: 'rompiez',
    1098: 'rompais',
    1292: 'rompait',
    1300: 'rompaient'
  },
  participe: 'rompu',
  present_participe: 'rompant',
  présent: {
    1033: 'romps',
    1041: 'rompons',
    1074: 'rompez',
    1098: 'romps',
    1292: 'rompt',
    1300: 'rompent'
  },
  simple: {
    1033: 'rompis',
    1041: 'rompîmes',
    1074: 'rompîtes',
    1098: 'rompis',
    1292: 'rompit',
    1300: 'rompirent'
  },
  subjunctif: {
    1033: 'rompe',
    1041: 'rompions',
    1074: 'rompiez',
    1098: 'rompes',
    1292: 'rompe',
    1300: 'rompent'
  }
};

export const cuireReturnObject = {
  infinitive: 'cuire',
  conditional: {
    1033: 'cuirais',
    1041: 'cuirions',
    1074: 'cuiriez',
    1098: 'cuirais',
    1292: 'cuirait',
    1300: 'cuiraient'
  },
  futur: {
    1033: 'cuirai',
    1041: 'cuirons',
    1074: 'cuirez',
    1098: 'cuiras',
    1292: 'cuira',
    1300: 'cuiront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'cuisais',
    1041: 'cuisions',
    1074: 'cuisiez',
    1098: 'cuisais',
    1292: 'cuisait',
    1300: 'cuisaient'
  },
  participe: 'cuit',
  present_participe: 'cuisant',
  présent: {
    1033: 'cuis',
    1041: 'cuisons',
    1074: 'cuisez',
    1098: 'cuis',
    1292: 'cuit',
    1300: 'cuisent'
  },
  simple: {
    1033: 'cuisis',
    1041: 'cuisîmes',
    1074: 'cuisîtes',
    1098: 'cuisis',
    1292: 'cuisit',
    1300: 'cuisirent'
  },
  subjunctif: {
    1033: 'cuise',
    1041: 'cuisions',
    1074: 'cuisiez',
    1098: 'cuises',
    1292: 'cuise',
    1300: 'cuisent'
  }
};

export const suffireReturnObject = {
  infinitive: 'suffire',
  conditional: {
    1033: 'suffirais',
    1041: 'suffirions',
    1074: 'suffiriez',
    1098: 'suffirais',
    1292: 'suffirait',
    1300: 'suffiraient'
  },
  futur: {
    1033: 'suffirai',
    1041: 'suffirons',
    1074: 'suffirez',
    1098: 'suffiras',
    1292: 'suffira',
    1300: 'suffiront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'suffisais',
    1041: 'suffisions',
    1074: 'suffisiez',
    1098: 'suffisais',
    1292: 'suffisait',
    1300: 'suffisaient'
  },
  participe: 'suffi',
  present_participe: 'suffisant',
  présent: {
    1033: 'suffis',
    1041: 'suffisons',
    1074: 'suffisez',
    1098: 'suffis',
    1292: 'suffit',
    1300: 'suffisent'
  },
  simple: {
    1033: 'suffis',
    1041: 'suffîmes',
    1074: 'suffîtes',
    1098: 'suffis',
    1292: 'suffit',
    1300: 'suffirent'
  },
  subjunctif: {
    1033: 'suffise',
    1041: 'suffisions',
    1074: 'suffisiez',
    1098: 'suffises',
    1292: 'suffise',
    1300: 'suffisent'
  }
};

export const lireReturnObject = {
  infinitive: 'lire',
  conditional: {
    1033: 'lirais',
    1041: 'lirions',
    1074: 'liriez',
    1098: 'lirais',
    1292: 'lirait',
    1300: 'liraient'
  },
  futur: {
    1033: 'lirai',
    1041: 'lirons',
    1074: 'lirez',
    1098: 'liras',
    1292: 'lira',
    1300: 'liront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'lisais',
    1041: 'lisions',
    1074: 'lisiez',
    1098: 'lisais',
    1292: 'lisait',
    1300: 'lisaient'
  },
  participe: 'li',
  present_participe: 'lisant',
  présent: {
    1033: 'lis',
    1041: 'lisons',
    1074: 'lisez',
    1098: 'lis',
    1292: 'lit',
    1300: 'lisent'
  },
  simple: {
    1033: 'lus',
    1041: 'lûmes',
    1074: 'lûtes',
    1098: 'lus',
    1292: 'lut',
    1300: 'lurent'
  },
  subjunctif: {
    1033: 'lise',
    1041: 'lisions',
    1074: 'lisiez',
    1098: 'lises',
    1292: 'lise',
    1300: 'lisent'
  }
};

export const écrireReturnObject = {
  infinitive: 'écrire',
  conditional: {
    1033: 'écrirais',
    1041: 'écririons',
    1074: 'écririez',
    1098: 'écrirais',
    1292: 'écrirait',
    1300: 'écriraient'
  },
  futur: {
    1033: 'écrirai',
    1041: 'écrirons',
    1074: 'écrirez',
    1098: 'écriras',
    1292: 'écrira',
    1300: 'écriront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'écrivais',
    1041: 'écrivions',
    1074: 'écriviez',
    1098: 'écrivais',
    1292: 'écrivait',
    1300: 'écrivaient'
  },
  participe: 'écrit',
  present_participe: 'écrivant',
  présent: {
    1033: 'écris',
    1041: 'écrivons',
    1074: 'écrivez',
    1098: 'écris',
    1292: 'écrit',
    1300: 'écrivent'
  },
  simple: {
    1033: 'écrivis',
    1041: 'écrivîmes',
    1074: 'écrivîtes',
    1098: 'écrivis',
    1292: 'écrivit',
    1300: 'écrivirent'
  },
  subjunctif: {
    1033: 'écrive',
    1041: 'écrivions',
    1074: 'écriviez',
    1098: 'écrives',
    1292: 'écrive',
    1300: 'écrivent'
  }
};

export const boireReturnObject = {
  infinitive: 'boire',
  conditional: {
    1033: 'boirais',
    1041: 'boirions',
    1074: 'boiriez',
    1098: 'boirais',
    1292: 'boirait',
    1300: 'boiraient'
  },
  futur: {
    1033: 'boirai',
    1041: 'boirons',
    1074: 'boirez',
    1098: 'boiras',
    1292: 'boira',
    1300: 'boiront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'buvais',
    1041: 'buvions',
    1074: 'buviez',
    1098: 'buvais',
    1292: 'buvait',
    1300: 'buvaient'
  },
  participe: 'bu',
  present_participe: 'buvant',
  présent: {
    1033: 'bois',
    1041: 'buvons',
    1074: 'buvez',
    1098: 'bois',
    1292: 'boit',
    1300: 'boivent'
  },
  simple: {
    1033: 'buis',
    1041: 'bûmes',
    1074: 'bûtes',
    1098: 'buis',
    1292: 'buit',
    1300: 'buirent'
  },
  subjunctif: {
    1033: 'boive',
    1041: 'boivions',
    1074: 'boiviez',
    1098: 'boives',
    1292: 'boive',
    1300: 'boivent'
  }
};

export const avoirReturnObject = {
  infinitive: 'avoir',
  conditional: {
    1033: 'aurais',
    1041: 'aurions',
    1074: 'auriez',
    1098: 'aurais',
    1292: 'aurait',
    1300: 'auraient'
  },
  futur: {
    1033: 'aurai',
    1041: 'aurons',
    1074: 'aurez',
    1098: 'auras',
    1292: 'aura',
    1300: 'auront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'avais',
    1041: 'avions',
    1074: 'aviez',
    1098: 'avais',
    1292: 'avait',
    1300: 'avaient'
  },
  participe: 'eu',
  present_participe: 'ayant',
  présent: {
    1033: 'ai',
    1041: 'avons',
    1074: 'avez',
    1098: 'as',
    1292: 'a',
    1300: 'ont'
  },
  simple: {
    1033: 'eus',
    1041: 'eûmes',
    1074: 'eûtes',
    1098: 'eus',
    1292: 'eut',
    1300: 'eurent'
  },
  subjunctif: {
    1033: 'aie',
    1041: 'ayons',
    1074: 'ayez',
    1098: 'aies',
    1292: 'ait',
    1300: 'aient'
  }
};

export const faireReturnObject = {
  infinitive: 'faire',
  conditional: {
    1033: 'ferais',
    1041: 'ferions',
    1074: 'feriez',
    1098: 'ferais',
    1292: 'ferait',
    1300: 'feraient'
  },
  futur: {
    1033: 'ferai',
    1041: 'ferons',
    1074: 'ferez',
    1098: 'feras',
    1292: 'fera',
    1300: 'feront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'faisais',
    1041: 'faisions',
    1074: 'faisiez',
    1098: 'faisais',
    1292: 'faisait',
    1300: 'faisaient'
  },
  participe: 'fait',
  present_participe: 'faisant',
  présent: {
    1033: 'fais',
    1041: 'faisons',
    1074: 'faites',
    1098: 'fais',
    1292: 'fait',
    1300: 'font'
  },
  simple: {
    1033: 'fis',
    1041: 'fîmes',
    1074: 'fîtes',
    1098: 'fis',
    1292: 'fit',
    1300: 'firent'
  },
  subjunctif: {
    1033: 'fasse',
    1041: 'fassions',
    1074: 'fassiez',
    1098: 'fasses',
    1292: 'fasse',
    1300: 'fassent'
  }
};

export const êtreReturnObject = {
  infinitive: 'être',
  conditional: {
    1033: 'serais',
    1041: 'serions',
    1074: 'seriez',
    1098: 'serais',
    1292: 'serait',
    1300: 'seraient'
  },
  futur: {
    1033: 'serai',
    1041: 'serons',
    1074: 'serez',
    1098: 'seras',
    1292: 'sera',
    1300: 'seront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'étais',
    1041: 'étions',
    1074: 'étiez',
    1098: 'étais',
    1292: 'était',
    1300: 'étaient'
  },
  participe: 'été',
  present_participe: 'étant',
  présent: {
    1033: 'suis',
    1041: 'sommes',
    1074: 'êtes',
    1098: 'es',
    1292: 'est',
    1300: 'sont'
  },
  simple: {
    1033: 'fus',
    1041: 'fûmes',
    1074: 'fûtes',
    1098: 'fus',
    1292: 'fut',
    1300: 'furent'
  },
  subjunctif: {
    1033: 'sois',
    1041: 'soyons',
    1074: 'soyez',
    1098: 'sois',
    1292: 'soit',
    1300: 'soient'
  }
};

export const allerReturnObject = {
  infinitive: 'aller',
  conditional: {
    1033: 'irais',
    1041: 'irions',
    1074: 'iriez',
    1098: 'irais',
    1292: 'irait',
    1300: 'iraient'
  },
  futur: {
    1033: 'irai',
    1041: 'irons',
    1074: 'irez',
    1098: 'iras',
    1292: 'ira',
    1300: 'iront'
  },
  helper_verb: 'avoir',
  imparfait: {
    1033: 'allais',
    1041: 'allions',
    1074: 'alliez',
    1098: 'allais',
    1292: 'allait',
    1300: 'allaient'
  },
  participe: 'allé',
  present_participe: 'allant',
  présent: {
    1033: 'vais',
    1041: 'allons',
    1074: 'allez',
    1098: 'vas',
    1292: 'va',
    1300: 'vont'
  },
  simple: {
    1033: 'allai',
    1041: 'allâmes',
    1074: 'allâtes',
    1098: 'allas',
    1292: 'alla',
    1300: 'allèrent'
  },
  subjunctif: {
    1033: 'aille',
    1041: 'aillions',
    1074: 'ailliez',
    1098: 'ailles',
    1292: 'aille',
    1300: 'aillent'
  }
};
