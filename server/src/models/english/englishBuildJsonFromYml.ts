import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export type DataObj = {
  variations?: DataObj;
  definition?: string;
  translations?: { [languageAbbr: string]: string | string[] };
  tags?: string[];
  participle?: string;
  irregular?: { [key: string]: { [person: string]: string } | string };
};
