import VueRouter from 'vue-router';
import Login from "./components/Login";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Update from "./components/Update";
import Add from "./components/Add";
import NotFound from "./components/NotFound";

const routes = [
    { name: 'Login', path: '/', component: Login },
    { name: 'Home', path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/signUp', component: SignUp },
    { name: 'Update', path: '/update', component: Update },
    { name: 'Add', path: '/add', component: Add },
    { path: "*", component: NotFound }
]
  
export default new VueRouter({
    base: process.env.NODE_ENV === "production" ? "/vue-pro" : "/",
    mode: 'history',
    routes
});