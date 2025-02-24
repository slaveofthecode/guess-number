import { useState } from 'react';
import { useGameStore } from '../../store';
import AttemptHistory from '../AttemptHistory';
import InputText from '../common/inputs/InputText';

export default function Playing() {
  const { isGameStarted, setAttempt } = useGameStore();
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
        <button className="flex-1/2 text-red-500">End Game</button>
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
