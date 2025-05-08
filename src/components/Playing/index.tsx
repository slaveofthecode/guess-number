import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react';
import { useGameStore, usePlayerStore } from '@store';
import { AttemptHistory } from '@components';
import { ExitSVG } from '@svg';
import { InputTextNumber } from '@common';
import style from './style.module.css';

export default function Playing() {
  const { isGameStarted, setAttempt, resetGame } = useGameStore();
  const { setName } = usePlayerStore();

  const [newNumber, setNewNumber] = useState<string | null>(null);

  // eslint-disable-next-line no-undef
  const refInputNumber = useRef<HTMLInputElement>(null);

  if (!isGameStarted) {
    return null;
  }

  // eslint-disable-next-line no-undef
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // Ensure it is a number and has at most 4 digits
    if (/^\d{0,4}$/.test(newValue)) {
      setNewNumber(newValue);
    }
  };

  // eslint-disable-next-line no-undef
  const handleKeyup = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newNumber?.toString().length === 4) {
      setNewAttempt();
    }
  };

  const setNewAttempt = () => {
    if (newNumber) {
      setAttempt(parseInt(newNumber));
      setNewNumber(null);
      refInputNumber.current?.focus();
    }
  };

  const existGame = () => {
    setName('');
    setNewNumber(null);
    resetGame();
  };

  return (
    <div className="flex flex-col p-4 rounded-2xl w-full gap-2 my-4 mx-2">
      <button className={style.buttonExit} onClick={existGame}>
        x
      </button>
      <small className="text-start">Try to guess the 4-digit number</small>
      <div className="relative">
        <InputTextNumber
          placeholder="Let's go!"
          onKeyUp={handleKeyup}
          onChange={handleChange}
          value={newNumber?.toString() || ''}
          maxLength={4}
          ref={refInputNumber}
        />
        <button
          onClick={setNewAttempt}
          disabled={newNumber?.toString().length !== 4}
          className={style.buttonPlay}
        >
          Play
        </button>
      </div>
      <AttemptHistory />
    </div>
  );
}
