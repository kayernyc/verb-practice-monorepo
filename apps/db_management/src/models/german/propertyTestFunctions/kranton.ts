export default function kranton(stem: string): boolean {
  if (stem.endsWith('d') || stem.endsWith('t')) return true;
  if (
    /\b[a-zß]+[aeiouäöü][m|n]{1,2}\b/.test(stem) ||
    /\b[a-zß]+[aeiouäöü][l|r|h][m|n]\b/.test(stem)
  )
    return false; // ends with vowel (m|n), or vowel (mm | nn), or vowel {l | r | h} {m | n}

  return false;
}

/*
The definition of a kranton stem is this. All stems ending in -d and -t are kranton stems. All stems ending in -n and -m are kranton stems, unless the last three letters in the stem match a pattern in one of the rows of the following table. No other stems are kranton stems.

last but 2	last but one	last letter
(doesn't matter)	vowel	"m" or "n"
vowel	"m"	"m"
vowel	"n"	"n"
vowel	"l", "r" or "h"	"m" or "n"

*/
