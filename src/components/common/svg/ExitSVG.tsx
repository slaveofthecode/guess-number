interface Props {
  width?: number;
  height?: number;
  color?: string;
}
const ExitSVG = ({ width = 32, height = 32, color = '#000000' }: Props) => {
  const size = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        fill={color}
        version="1.1"
        id="Icons"
        viewBox="0 0 32 32"
        // xml:space="preserve"
        height={size.height}
        width={size.width}
      >
        <path d="M30.9,13.6c-0.1-0.1-0.1-0.2-0.2-0.3l-4-4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l2.3,2.3H22v-3V3c0-0.6-0.4-1-1-1H4  c0,0,0,0,0,0C3.9,2,3.7,2,3.6,2.1c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0C3.2,2.4,3.1,2.5,3.1,2.6  c0,0,0,0,0,0.1C3,2.8,3,2.9,3,3v22c0,0.4,0.2,0.8,0.6,0.9l9,4C12.7,30,12.9,30,13,30c0.2,0,0.4-0.1,0.5-0.2c0.3-0.2,0.5-0.5,0.5-0.8  v-3h7c0.6,0,1-0.4,1-1V15h5.6l-2.3,2.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l4-4c0.1-0.1,0.2-0.2,0.2-0.3  C31,14.1,31,13.9,30.9,13.6z M10,21c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1V21z M20,10v14h-6V7  c0-0.4-0.2-0.8-0.6-0.9L8.7,4H20V10z" />
      </svg>
    </>
  );
};

export default ExitSVG;
