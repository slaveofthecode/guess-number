/* eslint-disable no-undef */
import { useEffect, useRef } from 'react';
import { usePlayerStore, useGameStore } from '../../store';
import InputText from '../common/inputs/InputText';
import style from './style.module.css';

export default function StartGame() {
  const { setName, name } = usePlayerStore();
  const { setIsGameStarted, isGameStarted, setNumberToGuess } = useGameStore();

  const refInputName = useRef<HTMLInputElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (refInputName.current) {
      refInputName.current.focus();
    }
  }, []);

  if (isGameStarted) {
    return null;
  }

  const setStartGame = () => {
    setIsGameStarted(true);
    setNumberToGuess();
  };

  function setClassButton(valueInput: string) {
    if (valueInput.trim()) {
      refButton.current?.classList.toggle(style.showButtonOutFocus);
    }
  }

  return (
    <div className="flex p-2 rounded-[8px] w-full relative">
      <InputText
        ref={refInputName}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            setStartGame();
          }
        }}
        onBlur={(e) => {
          setClassButton(e.target.value);
        }}
        onFocus={(e) => {
          setClassButton(e.target.value);
        }}
        autoFocus={true}
        maxLength={24}
        classCss={style.inputName}
      />
      <button
        ref={refButton}
        onClick={setStartGame}
        className={`${!name.length ? 'hidden' : style.showButton} absolute`}
        disabled={!name.length}
      >
        Go!
      </button>
    </div>
  );
}
