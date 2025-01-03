import Slides from "../../../src/components/Slides";
import StaticSlide from "../../../src/components/StaticSlide";

const App = () => {
  return (
    <>
      <Slides />
      <div className="center-title">
        <h1>Plants In Sale</h1>
      </div>
      <StaticSlide />
    </>
  );
};

export default App;
