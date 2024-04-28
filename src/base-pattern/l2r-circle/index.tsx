import './index.scss';

interface L2RWaveCircleProps {
  deg?: number;
}
const L2RWaveCircle: React.FC<L2RWaveCircleProps> = ({ deg = 0 }) => {
  return (
    <section
      className="l2f-circle"
      style={{
        transform: `rotate(${deg}deg)`,
      }}
    >
      {Array(12)
        .fill(1)
        .map((_, idx) => (
          <div
            className="stripe"
            key={idx}
            style={{
              left: `calc(100% / 12 * ${idx})`,
              width: 'calc(100% / 12)',
            }}
          ></div>
        ))}
    </section>
  );
};

export default L2RWaveCircle;
