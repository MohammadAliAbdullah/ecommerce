import './App.css';
import Header from './components/partials/Header'
import Search from './components/partials/Search'
import Menu from './components/partials/Menu'
import Footer from './components/partials/Footer';
import Home from './views/web/Home';
import Shop from './views/web/Shop';
import MenuTwo from './components/partials/MenuTwo';
import Checkout from './views/web/Checkout';
import Cart from './views/web/Cart';
import Details from './views/web/Details';
import Contact from './views/web/Contact';
function App() {
  return (
    <div>
      {/* Topbar Start */}
      <Header />
      {/* Topbar End */}
      {/* Navbar Start */}
      <Menu />
      {/* <MenuTwo /> */}
      {/* Navbar End */}
      {/* pages */}
      <Home />
      {/* <Contact /> */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>


  );
}

export default App;
