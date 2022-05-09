import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ContactUs from './Pages/ContactUs/ContactUs/ContactUs';
import Blog from './Pages/Blog/Blog/Blog';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails/InventoryDetails';
import ManageInventory from './Pages/ManageInventory/ManageInventory/ManageInventory';
import AddInventory from './Pages/AddInventory/AddInventory/AddInventory';
import MyInventory from './Pages/MyInventory/MyInventory/MyInventory';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetails></InventoryDetails>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>
        <Route path='/addinventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/myinventory' element={
          <RequireAuth>
            <MyInventory></MyInventory>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
