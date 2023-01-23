import "./Loader-Styles.scss";

function Loader() {
  return (
    <div className="spinner-container">
      <div className="red-spinner" />
      <div className="blue-spinner" />
      <div className="green-spinner" />
      Loading...
    </div>
  );
}

export default Loader;
