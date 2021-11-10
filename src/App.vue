<template>
  <div>
    <router-view />
  </div>
  
</template>

<script>
// import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
 
  }
 
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
    box-sizing: border-box;
}
 .signup {
        width: 40%;
     margin: auto;
        display: block;
        border-radius: 10px;
        border: 1px solid #ddd;
        padding: 30px;
    }
    .signup  input{
        width: 100%;
        height: 45px;
        padding: 10px;
        display: block;
        margin: 15px 0;
    }
    .signup input:focus {
        outline: 0;
    }
    button {
        width: 100%;
        height: 50px;
        font-size: 16px;
        color:#fff;
        background: rebeccapurple;
        border:none;
        border-radius: 5px;
    }
    h1 {
        margin-top: 0;
    }
</style>
