import { usePlayerStore, useGameStore } from '../../store';
import InputText from '../common/inputs/InputText';

export default function StartGame() {
  const { setName, name } = usePlayerStore();
  const { setIsGameStarted, isGameStarted, setNumberToGuess } = useGameStore();

  if (isGameStarted) {
    return null;
  }

  const setStartGame = () => {
    setIsGameStarted(true);
    setNumberToGuess();
  };

  return (
    <div className="flex flex-col p-4 rounded-2xl w-full gap-2 shadow-2xl shadow-black my-4 mx-2">
      <InputText
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
