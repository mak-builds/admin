interface Properties {
  width?: number;
  height?: number;
  color?: string;
  style?: React.CSSProperties;
}

const LogoIconComponent = ({
  width = 20,
  height = 20,
  color = "white.900",
  style,
}: Properties) => {
  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.70142 11.874L11.8601 8.71531V0.670532H8.70142V11.874Z"
        fill="#6B92C9"
      />
      <path
        d="M8.70131 11.874L11.86 8.71533L19.9048 8.71533L19.9048 11.874L8.70131 11.874Z"
        fill="#918FCA"
      />
      <rect
        x="0.508545"
        y="8.66602"
        width="8.19287"
        height="3.20805"
        fill="#81B87E"
      />
      <rect
        x="8.6521"
        y="20.0669"
        width="8.19287"
        height="3.20805"
        transform="rotate(-90 8.6521 20.0669)"
        fill={color}
      />
    </svg>
  );
};

export default LogoIconComponent;
