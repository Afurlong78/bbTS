import { useEffect } from "react";
import { useComparisonContext } from "../../context/ComparisonProvider";
import Start from "./Start";
import End from "./End";
import "./Compare-Styles.scss";

function Compare() {
  const { getData } = useComparisonContext();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="comparison-container">
      <Start />
      <End />
    </div>
  );
}

export default Compare;
