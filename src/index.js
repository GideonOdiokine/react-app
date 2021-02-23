import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import  './index.css'
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateArticle from './components/CreateArticle';
import Login from './components/Login';
import Register from './components/Register';
import SingleArticle from './components/singleArticle'



const Home =()=>{
    return <div><h1>This the home page</h1></div>
}



ReactDOM.render
(<BrowserRouter>
   <div>
        <Navbar />
        <Route exact path="/" component={Welcome} />
        <Route  path="/articles/create" component={CreateArticle} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/single/:slug" component={SingleArticle}/>
        <Footer/>
    </div>
</BrowserRouter>, document.getElementById('root'))
