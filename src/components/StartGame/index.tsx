/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';
import { usePlayerStore, useGameStore } from '../../store';
import InputText from '../common/inputs/InputText';
import style from './style.module.css';

export default function StartGame() {
  const { setName, name } = usePlayerStore();
  const { setIsGameStarted, isGameStarted, setNumberToGuess } = useGameStore();

  const refInputName = useRef<HTMLInputElement>(null);

  useEffect(() => {
    refInputName.current?.focus();
  }, []);

  if (isGameStarted) return null;

  const setStartGame = () => {
    if (!name.trim()) return;
    setIsGameStarted(true);
    setNumberToGuess();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStartGame();
  };

  const setClassButton = (valueInput: string) => {
    if (valueInput.trim()) {
      refInputName.current?.classList.toggle(style.inputNameOutFocus);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-2 rounded-[8px] w-full relative"
    >
      <InputText
        ref={refInputName}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        onBlur={(e) => setClassButton(e.target.value)}
        onFocus={(e) => setClassButton(e.target.value)}
        autoFocus
        maxLength={24}
        classCss={style.inputName}
      />
      <button
        type="submit"
        className={`absolute ${name.length ? style.showButton : style.buttonDisabled}`}
        disabled={!name.length}
      >
        Go!
      </button>
    </form>
  );
}
