import './index.scss';

interface ThreeQuaterCircleProps {
  className?: string;
  deg: number;
}

const ThreeQuaterCircle: React.FC<ThreeQuaterCircleProps> = ({ deg = 0 }) => {
  return (
    <section
      className="three-quarters-circle"
      style={{
        transform: `rotateZ(${deg}deg)`,
      }}
    ></section>
  );
};
export default ThreeQuaterCircle;
