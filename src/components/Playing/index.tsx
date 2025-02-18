import AttemptHistory from "../AttemptHistory";

export default function Playing (){

    return (
        <div>
            <h2>Welcome, <i>Mile</i>!</h2>
            <small>Try to guess the 4-digit number</small>
            <div>
                <input type="number" maxLength={4} minLength={4} max={9999} />
                <button>Guess!</button>
            </div>
            <button>End Game</button>
            <AttemptHistory />
        </div>
    )

}