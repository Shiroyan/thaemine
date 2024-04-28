import './index.scss';

interface RippleCircleProps {
  deg: number;
}
const RippleCircle: React.FC<RippleCircleProps> = ({ deg = 0 }) => {
  return (
    <section
      className="ripple-circle"
      style={{
        transform: `rotate(${deg}deg)`,
      }}
    >
      {Array(12)
        .fill(1)
        .map((_, idx) => (
          <div className="stripe" key={idx}></div>
        ))}
    </section>
  );
};

export default RippleCircle;
