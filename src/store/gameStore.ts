/* eslint-disable no-unused-vars */
import { create } from 'zustand';

export interface AttemptState {
  number: number;
  match: number;
}

interface GameState {
  isGameStarted: boolean;
  attempts: AttemptState[];
  numberToGuess: number | null;
  // actions
  setIsGameStarted: (isGameStarted: boolean) => void;
  setAttempt: (number: number) => void;
  setNumberToGuess: () => void;
  resetGame: () => void;
}

const initState = {
  isGameStarted: false,
  attempts: [],
  numberToGuess: null,
};

export const useGameStore = create<GameState>((set, get) => ({
  ...initState,
  setIsGameStarted: (isGameStarted) => set({ isGameStarted }),
  setAttempt: (number: number) => {
    const state = get();
    const match = calculateMatch(number, state.numberToGuess);
    set((state) => ({ attempts: [...state.attempts, { number, match }] }));
  },
  setNumberToGuess: () => {
    const number = Math.floor(1000 + Math.random() * 9000);
    set({ numberToGuess: number });
  },
  resetGame: () => set(initState),
}));

function calculateMatch(number: number, numberToGuess: number | null) {
  if (numberToGuess === null) {
    return 0;
  }

  const numberArr = number.toString().split('');
  const numberToGuessArr = numberToGuess.toString().split('');

  let match = 0;
  numberArr.forEach((num, index) => {
    if (num === numberToGuessArr[index]) {
      match++;
    }
  });

  return match;
}
