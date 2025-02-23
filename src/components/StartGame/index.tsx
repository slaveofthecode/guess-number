import { usePlayerStore } from '../../store/playerStore';

export default function StartGame() {
  const { setName } = usePlayerStore();

  return (
    <div className="flex flex-col p-2 w-full gap-2 bg-slate-800 shadow-2xl shadow-black my-6 mx-2">
      <input
        type="text"
        placeholder="Enter your name"
        maxLength={25}
        className="bg-white px-2 py-2.5 text-black border-none rounded-md"
        onChange={(e) => setName(e.target.value)}
      />
      <button>Start Game</button>
    </div>
  );
}
