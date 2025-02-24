import { useGameStore } from '../../store';

export default function AttemptHistory() {
  const { attempts } = useGameStore();

  return (
    <div>
      <hr />
      {!attempts.length && <small>No guesses yet. Start guessing!</small>}
      {attempts.map((attempt, index) => (
        <ul key={index}>
          <li>
            <p>
              {attempt.number} : ( <strong>{attempt.match}</strong> )
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
}
