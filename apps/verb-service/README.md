## Verb Service

This is a Deno service with a GraphQL layer. It will provide read access to the verb collections.

---

### Root verb types

The language map represents all currently available languages (`fr` is to come but already mapped out). The same enum is used for the Database management system as in the Verb Service

```ts
enum LanguageMap {
  'en' = 'en',
  'fr' = 'fr',
  'de' = 'de',
}
```

---

### German Verb Schema

Like all the verbs, the German schema has an infinitive, with variations. In German's case there are also:

- dative: `Bool`
- genitive: `Bool`
- hilfsverb: `String`
- impersonal: `Bool`
- particle: `String`
- translations: [`LanguageMap`: [`String`]]

in every variation. The values may be empty but they must not be `null`.

German conjugates meaningfully to 5 pronouns. All other pronouns map to these 5 conjugations.

| pronoun | code | other pronouns                                           |
| ------- | ---- | -------------------------------------------------------- |
| ich     | 1033 | -                                                        |
| du      | 1098 | -                                                        |
| es      | 1548 | sie (sing. fem), er (sing, masc),<br /> man (impersonal) |
| wir     | 1041 | sie (2nd person plural),<br/> Sie (2nd person, formal)   |
| ihr     | 1106 | -                                                        |
