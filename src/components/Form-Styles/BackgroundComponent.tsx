import { useEffect, useState } from "react";
import { Image1, Image2, Image3, Image4, Image5 } from "./Backgrounds";
import "./Form-Styles.scss";

function BackgroundComponent() {
  const [delay, setDelay] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (delay >= 5) {
        setDelay(1);
      } else if (delay <= 5) {
        setDelay(delay + 1);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  return (
    <div className="div-wrapper shade">
      <Image1 index={delay} />
      <Image2 index={delay} />
      <Image3 index={delay} />
      <Image4 index={delay} />
      <Image5 index={delay} />
    </div>
  );
}

export default BackgroundComponent;
