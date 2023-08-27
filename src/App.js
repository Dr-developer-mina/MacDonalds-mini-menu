import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { items } from "./Components/data";
import { useState } from "react";
import Buttons from "./Components/Buttons";
import Menu from "./Components/Menu";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // const [buttons, setButtons] = useState([]);

  const filter = (categoryButton) => {
    const filteredData = items.filter((item) => {
      return item.category === categoryButton;
    });
    setMenuItems(filteredData);
  };

  const allData = (items) => {
    items.map((item) => {
      return <Menu />;
    });
    setMenuItems(items);
  };
  return (
    <>
      <NavBar />

      <div className="App container text-center">
        <Buttons filter={filter} allData = {allData}/>
        <Menu menuItems={menuItems} />
      </div>
      <Footer />
    </>
  );
}

export default App;
