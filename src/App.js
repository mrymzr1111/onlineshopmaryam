
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import Nav from './components/nav';
import { ShopConext, ShopConextProvider } from './context/shopcontext';
import Welcome from './components/welcome';


const App = () => {
 
  return (
    <div>
      <ShopConextProvider>
      <Router>
        <Nav /> {/* Include your Nav component */}
        <Welcome/>
        <Routes>
          <Route path="/Shop" element={<Shop />} /> {/* Use element instead of component */}
          <Route path="/Cart" element={<Cart />} />
          {/* Default route for the root URL */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </ShopConextProvider>
    </div>
  );
}

// Define your Home component
function Home() {
  return (
    <div>
      <h1>Welcome to the Home page</h1>
     
    </div>
  );
}

export default App;
