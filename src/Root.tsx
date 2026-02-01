import { Composition } from "remotion";
import { FigmaLogo } from "./compositions/FigmaLogo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FigmaLogo"
        component={FigmaLogo}
        durationInFrames={90}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
