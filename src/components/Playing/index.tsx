import { useState } from 'react';
import { useGameStore, usePlayerStore } from '../../store';
import AttemptHistory from '../AttemptHistory';
import InputText from '../common/inputs/InputText';
import ExitSVG from '../common/svg/ExitSVG';

export default function Playing() {
  const { isGameStarted, setAttempt, resetGame } = useGameStore();
  const { setName } = usePlayerStore();

  const [newNumber, setNewNumber] = useState<number | null>(null);

  if (!isGameStarted) {
    return null;
  }

  const setNewAttempt = () => {
    if (newNumber) {
      setAttempt(newNumber);
      setNewNumber(null);
    }
  };

  const existGame = () => {
    setName('');
    setNewNumber(null);
    resetGame();
  };

  return (
    <div className="flex flex-col p-4 rounded-2xl w-full gap-2 shadow-2xl shadow-black my-4 mx-2">
      <small className="text-start">
        Try to guess the 4-digit number
        {/* <strong className="text-white"> :: {numberToGuess}</strong> */}
      </small>
      <div className="flex gap-2">
        <InputText
          placeholder="Enter your guess number"
          onKeyUp={(e) => {
            if (e.key === 'Enter' && newNumber?.toString().length === 4) {
              setNewAttempt();
            }
          }}
          onChange={(e) => setNewNumber(e.currentTarget.value)}
          maxLength={4}
          minLength={4}
          value={newNumber?.toString() || ''}
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
