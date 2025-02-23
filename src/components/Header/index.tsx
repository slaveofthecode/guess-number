import LogoSVG from '../common/svg/LogoSVG';

const index = () => {
  return (
    <>
      <header>
        <div className="flex flex-col gap-1 justify-center items-center">
          <LogoSVG width={72} height={72} />
          <h2 className="text-3xl font-bold text-center">Guess Number</h2>
        </div>
      </header>
    </>
  );
};

export default index;
