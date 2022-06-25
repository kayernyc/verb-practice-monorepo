import React, { FormEvent, useState } from 'react';
import englishTestData from '../data/english_german_test.json';

export type AvailableLanguages = 'en' | 'de';

type LanguageResponse = { [language in AvailableLanguages]: LanguageBlob };

export interface LanguageBlob {
  conjugated_verb: string;
  infinitive: string;
  prompt: string;
  pronoun: string;
  results: string[];
}

export const QuizUserInput = ({
  prompt,
  target,
}: {
  prompt: AvailableLanguages;
  target: AvailableLanguages;
}) => {
  const data = englishTestData as LanguageResponse;
  const promptLanguageBlob = data[prompt];
  const targetLanguageBlob = data[target];

  const [input, setInput] = useState('');
  const [inputState, setInputState] = useState(false);
  const id = 'user_language_practice';

  const captureInput = (event: FormEvent) => {
    const inputTarget = event.target as HTMLInputElement;
    if (inputTarget) {
      setInput(inputTarget.value);
    }
  };

  const submitInput = (event: React.MouseEvent) => {
    setInputState(true);
  };

  const styledUserInput = ({
    inputState,
    results,
    userInput,
  }: {
    inputState: boolean;
    userInput: string;
    results: string[];
  }): JSX.Element | null => {
    if (!inputState || !userInput) {
      return null;
    }

    const isCorrect = !!results.find((result: string) => result === userInput);
    return <p className={isCorrect ? 'correct' : 'incorrect'}>{userInput}</p>;
  };

  return (
    <>
      <p>{promptLanguageBlob.prompt}</p>
      <label htmlFor={id}>
        <input disabled={inputState} id={id} value={input} type="text" onInput={captureInput} />
        <button disabled={inputState} onClick={submitInput}>
          submit
        </button>
      </label>
      {styledUserInput({ inputState, userInput: input, results: targetLanguageBlob.results })}
    </>
  );
};
