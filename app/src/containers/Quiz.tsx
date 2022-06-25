import React, { FormEvent, useState } from 'react';
import { AvailableLanguages, QuizUserInput } from '../components/QuizUserInput';

export const Quiz = (): JSX.Element => {
  const [promptLanguage, setPropmtLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('de');

  const languageSelection = (event: React.MouseEvent) => {
    const targetButton = event.target as HTMLButtonElement;
    if (targetButton) {
      const prompt = targetButton.dataset['tagPrompt'] || undefined;
      const target = targetButton.dataset['tagTarget'] || undefined;

      if (prompt && target) {
        setPropmtLanguage(prompt);
        setTargetLanguage(target);
      }
    }
  };

  return (
    <section>
      <button
        data-tag-prompt={'en'}
        data-tag-target={'de'}
        disabled={promptLanguage === 'en'}
        onClick={languageSelection}
      >
        English to German
      </button>
      <button
        data-tag-prompt={'de'}
        data-tag-target={'en'}
        disabled={promptLanguage === 'de'}
        onClick={languageSelection}
      >
        German to English
      </button>
      <QuizUserInput
        prompt={promptLanguage as AvailableLanguages}
        target={targetLanguage as AvailableLanguages}
      />
    </section>
  );
};
