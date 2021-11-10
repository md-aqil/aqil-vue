import VueRouter from 'vue-router'
import Login from "./components/Login";
import About from "./components/About";


const routes = [
    { path: '/', component: Login },
    { path: '/about', component: About }
]
  
export default new VueRouter({
    mode: 'history',
    routes
});