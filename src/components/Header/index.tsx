import LogoSVG from '../common/svg/LogoSVG';
import { usePlayerStore } from '../../store/playerStore';

const index = () => {
  const { name } = usePlayerStore();

  return (
    <>
      <header>
        <div className="flex flex-col gap-1 justify-center items-center">
          <LogoSVG width={72} height={72} />
          <h2 className="text-3xl font-bold text-center">Guess Number</h2>
        </div>
        {name && (
          <small>
            Let's go <strong>{name}</strong>!
          </small>
        )}
      </header>
    </>
  );
};

export default index;
