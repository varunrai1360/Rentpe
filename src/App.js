import {BrowserRouter as Router , Routes , Route, Link} from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute';

import Explore from "./pages/Explore";
import Navba from './components/Navbar';
import Profile from "./pages/Profile";
import Category from './pages/Category';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import CreateListing from './pages/CreateListing';
import EditListing from './pages/EditListing';
import Offers from "./pages/Offers";
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import About from './pages/Aboutus';

import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    
    <Router>
    <Navba/>
    <Routes>
    <Route path='/' element={<Explore/>} />
    <Route path='/offers' element={<Offers/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/category/:categoryName' element={<Category/>} />
    <Route path='/profile' element={<PrivateRoute/>}>
    <Route path='/profile' element={<Profile/>} />
    </Route>
    <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
    <Route path='/forgot-password' element={<ForgotPassword/>} />
    <Route path='/create-listing' element={<CreateListing/>} />
    <Route path='/edit-listing/:listingId' element={<EditListing />} />
    <Route path='/category/:categoryName/:listingId' element={<Listing/>} />
    <Route path='/contact/:landlordId' element={<Contact />} />
    </Routes>
    
    <footer class="footer-distributed">

    <div class="footer-right">

      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
      <a href="#"><i class="fa fa-github"></i></a>

    </div>

    <div class="footer-left">

      <p class="footer-links">
        
        <Link style={{textDecoration:"none"}} to="/about">About us</Link>
      </p>

      <p>RentPe &copy; 2022 (K Rd, Mahanagar Extension, Mahanagar, Lucknow, Uttar Pradesh 226006)</p>
    </div>

  </footer>



    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
