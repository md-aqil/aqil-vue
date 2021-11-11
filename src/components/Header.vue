<template>
    <nav class="navbar">
        <router-link to="/Home">Home</router-link>
        <router-link to="/add">Add</router-link>
        <router-link to="/update">Update</router-link>
          <a href="#" @click="logOut">Logout</a>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logOut() {
            alert('loged out');
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    },
}

</script>

<style>
  .navbar {
      background: #000;
      display: flex;
      padding-left: 135px;
      padding-right: 135px;
      margin-bottom: 30px;
  }
   .navbar a {
       color: #fff;
       display: block;
       text-decoration: none;
      padding: 15px 10px;
   }
</style>