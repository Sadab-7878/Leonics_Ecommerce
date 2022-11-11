import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";

// import Cart from "./Components/Cart";
import Pcategory from "./Components/Categories/Pcategory";
import Fcategory from "./Components/Categories/Fcategory";
// import Ddeals from "./Components/Ddeals";



function App() {
  return (
    <div className="App">
     
      
      <Navbar />
      <Herosection />
     
      {/* <Cart /> */}
      <Pcategory />
      <Fcategory />
      {/* <Ddeals /> */}

    </div>
  );
}

export default App;
