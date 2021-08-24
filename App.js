import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Details from "./components/Details";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/details" component={Details} /> */}
      </Switch>
      {/* </BrowserRouter> */}
    </div>
  );
}
export default App;
