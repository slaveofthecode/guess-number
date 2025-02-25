import { useEffect, useRef } from 'react';
import { usePlayerStore, useGameStore } from '../../store';
import InputText from '../common/inputs/InputText';

export default function StartGame() {
  const { setName, name } = usePlayerStore();
  const { setIsGameStarted, isGameStarted, setNumberToGuess } = useGameStore();

  // eslint-disable-next-line no-undef
  const refInputName = useRef<HTMLInputElement>(null);

  if (isGameStarted) {
    return null;
  }

  const setStartGame = () => {
    setIsGameStarted(true);
    setNumberToGuess();
  };

  useEffect(() => {
    refInputName?.current?.focus();
  }, []);

  return (
    <div className="flex flex-col p-4 rounded-2xl w-full gap-2 shadow-2xl shadow-black my-4 mx-2">
      <InputText
        ref={refInputName}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            setStartGame();
          }
        }}
      />
      <button
        onClick={setStartGame}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        disabled={!name.length}
      >
        Start
      </button>
    </div>
  );
}
