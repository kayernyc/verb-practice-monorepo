import { LanguageMap } from "./jsonTypes";

export interface LanguageVerbBase {
  language: LanguageMap;
  infinitive: string;
  translations: { 
    [key in LanguageMap]?: string []
  };
}