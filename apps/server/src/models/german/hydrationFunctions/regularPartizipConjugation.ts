export default function regularPartizipConjugation({
  infinitive,
  infinitiveStem,
}: {
  infinitive: string;
  infinitiveStem: string;
}): string {
  if (infinitive.length > 5 && infinitive.slice(-5) === 'ieren') {
    return `${infinitiveStem}t`;
  }

  return `ge${infinitiveStem}t`;
}
