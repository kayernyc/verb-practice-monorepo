export default function kranton(stem: string): boolean {
  if (stem.endsWith('d') || stem.endsWith('t')) return true;
  if (/\b[a-zß]+[aeiouäöü][m|n]{1,2}\b/.test(stem) || /\b[a-zß]+[aeiouäöü][l|r|h][m|n]\b/.test(stem)) return true; // ends with vowel (m|n), or vowel (mm | nn), or vowel {l | r | h} {m | n}

  return false;
}
