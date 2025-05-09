/* eslint-disable no-undef */
import { ChangeEvent, useState, useRef } from 'react';
import { useGameStore, usePlayerStore } from '@store';
import { AttemptHistory } from '@components';
import { InputTextNumber } from '@common';
import style from './style.module.css';

export default function Playing() {
  const { isGameStarted, setAttempt, resetGame } = useGameStore();
  const { setName } = usePlayerStore();

  const [newNumber, setNewNumber] = useState<string | null>(null);
  const refInputNumber = useRef<HTMLInputElement>(null);

  if (!isGameStarted) return null;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (/^\d{0,4}$/.test(newValue)) {
      setNewNumber(newValue);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newNumber?.length === 4) {
      setNewAttempt();
    }
  };

  const setNewAttempt = () => {
    if (newNumber) {
      setAttempt(parseInt(newNumber));
      setNewNumber(null);

      // Volver a enfocar tras limpiar
      setTimeout(() => {
        refInputNumber.current?.focus();
      }, 0);
    }
  };

  const existGame = () => {
    setName('');
    setNewNumber(null);
    resetGame();
  };

  const setClassButton = (valueInput: string) => {
    if (valueInput.trim()) {
      refInputNumber.current?.classList.toggle(style.inputNameOutFocus);
    }
  };

  return (
    <div className="flex flex-col p-4 rounded-2xl w-full gap-2 my-4 mx-2">
      <button className={style.buttonExit} onClick={existGame}>
        x
      </button>
      <small className="text-start">Try to guess the 4-digit number</small>
      <form onSubmit={handleSubmit} className="relative">
        <InputTextNumber
          placeholder="Let's go!"
          onChange={handleChange}
          onBlur={(e) => setClassButton(e.target.value)}
          onFocus={(e) => setClassButton(e.target.value)}
          value={newNumber?.toString() || ''}
          maxLength={4}
          ref={refInputNumber}
        />
        <button
          type="submit"
          disabled={newNumber?.length !== 4}
          className={`${!newNumber?.length ? 'hidden' : style.buttonPlay} absolute`}
        >
          Play
        </button>
      </form>
      <AttemptHistory />
    </div>
  );
}
