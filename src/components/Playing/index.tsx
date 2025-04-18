import { ChangeEvent, useState, KeyboardEvent, useRef } from 'react';
import { useGameStore, usePlayerStore } from '@store';
import { AttemptHistory } from '@components';
import { ExitSVG } from '@svg';
import { InputTextNumber } from '@common';

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
    <div className="flex flex-col p-4 rounded-2xl w-full gap-2 shadow-2xl shadow-black my-4 mx-2">
      <small className="text-start">Try to guess the 4-digit number</small>
      <div className="flex gap-2">
        <InputTextNumber
          placeholder="Enter your guess number"
          onKeyUp={handleKeyup}
          onChange={handleChange}
          value={newNumber?.toString() || ''}
          maxLength={4}
          ref={refInputNumber}
        />
        <button className=" text-red-500" onClick={existGame}>
          <ExitSVG color="rgba(255,0,0,.5)" />
        </button>
      </div>
      <button
        onClick={setNewAttempt}
        disabled={newNumber?.toString().length !== 4}
      >
        Try!
      </button>
      <AttemptHistory />
    </div>
  );
}
