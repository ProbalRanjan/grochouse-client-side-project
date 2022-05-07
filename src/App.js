import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import ManageItems from './Pages/ManageItems/ManageItems/ManageItems';
import AddItems from './Pages/AddItems/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems/MyItems';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ContactUs from './Pages/ContactUs/ContactUs/ContactUs';
import Blog from './Pages/Blog/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
