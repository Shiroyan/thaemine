import { useState } from "react";
import L2RWaveCircle from "../base-pattern/l2r-circle";
import "./index.scss";
import ThreeQuaterCircle from "../base-pattern/three-quater-circle";
import RippleCircle from "../base-pattern/ripple-circle";
import DualBarCircle from "../base-pattern/dual-bar-circle";

type PatternType = "l2f" | "ripple" | "dual_bar" | "3/4";
type Pattern = {
  type: PatternType;
  deg?: number;
};

const BLINK_INTERVAL = 600;
const ANIMATE_INTERVAL = 800;
const ANIMATE_TYPES: PatternType[] = ["l2f", "ripple"];
const L2R: Pattern[] = [
  {
    type: "l2f",
  },
  {
    type: "3/4",
    deg: 180,
  },
];

const EXPAND: Pattern[] = [
  {
    type: "ripple",
    deg: 0,
  },
  {
    type: "dual_bar",
    deg: 180,
  },
  {
    type: "dual_bar",
    deg: 90,
  },
];

const CLOCKWISE: Pattern[] = [
  {
    type: "3/4",
    deg: 0,
  },
  {
    type: "3/4",
    deg: -90,
  },
  {
    type: "dual_bar",
    deg: 90,
  },
  {
    type: "3/4",
    deg: -90,
  },
];

const CLOCK: Pattern[] = [
  {
    type: "dual_bar",
    deg: 0,
  },
  {
    type: "3/4",
  },
  {
    type: "3/4",
    deg: 90,
  },
  {
    type: "dual_bar",
    deg: 90,
  },
];
const PATTERN_SET = [L2R, EXPAND, CLOCK, CLOCKWISE];

const Index = () => {
  const [visbility, setVisibility] = useState<Record<PatternType, boolean>>({
    "3/4": false,
    dual_bar: false,
    l2f: false,
    ripple: false,
  });
  const [animationEnd, setAnimationEnd] = useState(true);

  const [deg, setDeg] = useState(0);

  const wait = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const renderPattern = async (pattern: Pattern[]) => {
    if (!animationEnd) {
      // eslint-disable-next-line no-alert
      alert("请等待动画执行完成");
      return;
    }
    setAnimationEnd(false);
    const initialDeg = [0, 45, 90, 135, 180, 225, 270, 315, 360][
      Math.floor(Math.random() * 10)
    ];
    for (const item of pattern) {
      setDeg(initialDeg + (item.deg || 0));
      setVisibility((visbility) => ({ ...visbility, [item.type]: true }));
      await wait(
        ANIMATE_TYPES.includes(item.type) ? ANIMATE_INTERVAL : BLINK_INTERVAL
      );
      setVisibility((visbility) => ({ ...visbility, [item.type]: false }));
    }
    setAnimationEnd(true);
  };

  return (
    <div className="main">
      <div className="menu">
        <ul className="pattern">
          <span>模式：</span>
          <div className="btn-group">
            <button
              className="pattern-btn"
              disabled={!animationEnd}
              onClick={() => renderPattern(L2R)}
            >
              单开门
            </button>
            <button
              className="pattern-btn"
              disabled={!animationEnd}
              onClick={() => renderPattern(EXPAND)}
            >
              双开门
            </button>
            <button
              className="pattern-btn"
              disabled={!animationEnd}
              onClick={() => renderPattern(CLOCK)}
            >
              顺时针
            </button>
            <button
              className="pattern-btn"
              disabled={!animationEnd}
              onClick={() => renderPattern(CLOCKWISE)}
            >
              逆时针
            </button>
            <button
              className="pattern-btn"
              disabled={!animationEnd}
              onClick={() => {
                renderPattern(PATTERN_SET[Math.floor(Math.random() * 4)]);
              }}
            >
              随机
            </button>
          </div>
        </ul>
        {/* <ul className="settings">🚧 施工中</ul> */}
      </div>
      <article className="battle-field">
        {visbility.l2f && <L2RWaveCircle deg={deg} />}
        {visbility.dual_bar && <DualBarCircle deg={deg} />}
        {visbility["3/4"] && <ThreeQuaterCircle deg={deg} />}
        {visbility.ripple && <RippleCircle deg={deg} />}
      </article>
    </div>
  );
};

export default Index;
