import { usePlayerStore, useGameStore } from '@store';
import { LogoSVG } from '@svg';

const index = () => {
  const { name } = usePlayerStore();
  const { isGameStarted } = useGameStore();

  return (
    <>
      <header className="relative flex flex-col p-4 rounded-2xl w-full gap-2 my-4">
        <div className="flex flex-col gap-1 justify-center items-center pb-2">
          <LogoSVG width={72} height={72} />
          <h2 className="text-3xl font-bold text-center">Guess Number</h2>
        </div>
        {isGameStarted && (
          <small className="absolute bottom-1 right-4 text-gray-400">
            Let's go <strong className="text-white">{name}</strong>!
          </small>
        )}
      </header>
    </>
  );
};

export default index;
