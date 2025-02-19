export default function StartGame() {

    return (
        <div className="flex flex-col bg-blue-500 p-2 w-full gap-2" >
            <h2>Guess Number</h2>
            <input type="text" placeholder="Enter your name" />
            <button>Start Game</button>
        </div>
    )

}