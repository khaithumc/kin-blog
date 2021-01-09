import React from 'react';
import NavigationBar from './components/header/NavigationBar';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import Admin from "./pages/Admin";
import AddPost from "./pages/AddPost";
import PostDetail from "./pages/PostDetail";


function App() {;

  return (
      <div className="App">
        <Router>
          <NavigationBar/>
          <Switch>
            <Route path={'/home'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/products'} component={Products}/>
            <Route path={'/admin'} component={Admin}/>
            <Route path={'/add-post'} component={AddPost}/>
              <Route path={'/post'} component={PostDetail}/>
          </Switch>
            <Footer/>
        </Router>
      </div>
  );
}
export default App;
