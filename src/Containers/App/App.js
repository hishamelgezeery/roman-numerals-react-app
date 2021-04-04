import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Components/Header/index";
import Converter from "../Converter";

function App() {
  return (
    <div className="App">
      <Header
        navbarLink="#"
        navbarText="RN Converter"
        style={{ backgroundColor: "#FDEECD" }}
        expandType={"lg"}
        variantType={"light"}
      />
      <div className="App">
        <Converter />
      </div>
    </div>
  );
}

export default App;
