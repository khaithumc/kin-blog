import React, {Component} from 'react';
import NavigationBar from './components/header/NavigationBar';
import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import AdminPost from "./pages/AdminPost";
import AddPost from "./pages/AddPost";
import PostDetail from "./pages/PostDetail";
import axios from "axios";
import Register from "./pages/Register";
import Profile from "./pages/Profile";


class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts : []
        };
    }

    componentDidMount() {
        this.findAllPosts()
    }

    findAllPosts() {
        axios.get("http://localhost:8085/post")
            .then(res => {
                const posts = res.data;
                this.setState({posts});
            })
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <NavigationBar/>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/products'} component={Products}/>
                        <Route path={'/admin-post'} component={AdminPost}/>
                        <Route path={'/add-post'} component={AddPost}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={this.state.posts.urlDetail} component={PostDetail}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        );
    }
}
export default App;
