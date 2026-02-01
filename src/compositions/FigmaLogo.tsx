import { AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate } from "remotion";

export const FigmaLogo: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, 30], [0.8, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Img
        src={staticFile("figma-logo.svg")}
        style={{
          opacity,
          transform: `scale(${scale})`,
          maxWidth: "80%",
          maxHeight: "80%",
        }}
      />
    </AbsoluteFill>
  );
};
