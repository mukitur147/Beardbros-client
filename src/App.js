
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Contacts from './Components/Contacts/Contacts';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Header/Banner';
import Navigation from './Components/Header/Navigation';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Products from './Components/Products/Products';
import Shop from './Components/Shop/Shop';
import SingleBlogs from './Components/SingleBlogs/SingleBlogs';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Context/PrivateRoute';



function App() {
  return (
    <div className="App">
    
    <AuthProvider>
    <BrowserRouter>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <Route  path="/shop">
        <Shop></Shop>
      </Route>
      <Route  path="/blogs">
        <Blogs></Blogs>
      </Route>
      <Route  path="/about">
        <Contacts></Contacts>
      </Route>
      <Route  path="/login">
        <Login></Login>
      </Route>
      <Route  path="/register">
        <Register></Register>
      </Route>
      <PrivateRoute  path="/singleProduct/:id">
        <SingleProduct></SingleProduct>
      </PrivateRoute>
      <Route  path="/singleBlogs/:id">
        <SingleBlogs></SingleBlogs>
      </Route>
     </Switch>
    
     </BrowserRouter>
    </AuthProvider>
     
    </div>
  );
}

export default App;
