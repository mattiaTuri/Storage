import { animated, useSpring } from "react-spring";

function AnimatedCheck() {
  const aa = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
  });

  return (
    <animated.svg
      style={aa}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="#4daa57"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          stroke-dasharray="60"
          stroke-dashoffset="60"
          d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="60;0"
          />
        </path>
        <path
          stroke-dasharray="14"
          stroke-dashoffset="14"
          d="M8 12L11 15L16 10"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="14;0"
          />
        </path>
      </g>
    </animated.svg>
  );
}

export default AnimatedCheck;
