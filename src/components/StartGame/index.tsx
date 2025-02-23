export default function StartGame() {
  return (
    <div className="flex flex-col p-2 w-full gap-2 bg-slate-800 shadow-2xl shadow-black my-6 mx-2">
      <h2>Guess Number</h2>
      <input type="text" placeholder="Enter your name" />
      <button>Start Game</button>
    </div>
  );
}
