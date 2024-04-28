import './index.scss';

interface DualBarCircleProps {
  /** @default  0 */
  deg: number;
}
const DualBarCircle: React.FC<DualBarCircleProps> = ({ deg = 0 }) => {
  return (
    <section
      className="dual-bar-circle"
      style={{
        transform: `rotate(${deg}deg)`,
      }}
    >
      <div className="safe"></div>
      <div className="danger"></div>
      <div className="mid-safe"></div>
      <div className="danger"></div>
      <div className="safe"></div>
    </section>
  );
};

export default DualBarCircle;
