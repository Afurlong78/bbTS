import { createElement, useEffect, useState, ReactNode } from "react";
import "./Background-Styles.scss";
import { icons } from "../../../utils/homePageIcons";
import { CustomElement } from "./Element";

function Background() {
  const [reactIconElements, setReactIconElements] = useState<ReactNode[]>([]);

  useEffect(() => {
    const array: ReactNode[] = [];
    const n = 15;

    for (let i = 0; i < n; i++) {
      let x = Math.floor(Math.random() * 91) + 2;
      let y = Math.floor(Math.random() * 81) + 5;

      let delay = Math.floor(Math.random() * 20) + 1;

      const element = createElement(CustomElement, {
        icon: icons[i],
        x: x,
        y: y,
        delay: delay,
      });

      array.push(element);
    }

    setReactIconElements(array);
  }, []);

  return (
    <div>
      {reactIconElements.map((item, index) => (
        <div key={index} className="main-container">
          {item}
        </div>
      ))}
    </div>
  );
}

export default Background;
