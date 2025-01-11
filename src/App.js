import Nav from "./components/Nav";
import { Main } from "./components/Main";
import Menu from "./components/Menu";
import "./App.css"
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import OrderOnline from "./components/OrderOnline";
import CustomerDetails from "./components/CustomerDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
   <>
   <Nav/>
   <Main/>
   <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

    </Routes>
   <Menu/>
   <Footer/>
   </>
  );
}

export default App;
