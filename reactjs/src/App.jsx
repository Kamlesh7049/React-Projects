
import Container from "react-bootstrap/Container";
import TopBanner from "./components/TopBanner";
import Topmenu from "./components/Topmenu";
import StuCards from "./components/StuCards";

const App = () => {
  return (
    <>
      {/* <Container> */}
        <Topmenu />
        <TopBanner />
        <StuCards />
      {/* </Container> */}
    </>
  );
};
export default App;
