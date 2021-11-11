<template>
    <div class="">
        <Header />
        <div class="container">
            <h1 class="title">Hello, {{name}} Welcome on Homepage</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                </tr>

                <tr v-for="item in restaurant" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.address}}</td>
                    <td>{{item.contact}}</td>
                </tr>
            </table>
        </div>
  
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
   
    name: 'Home',
    components: {
        Header,
    },
    data() {
        return {
         name:'',
         restaurant: []
        }
    },
    methods: {
    
    },

  async mounted() {
        let user =  localStorage.getItem('user-info');

        this.name = JSON.parse(user).name;

        if (!user) {
            this.$router.push({name: 'Login'})
        }

        let result = await axios.get("http://localhost:3000/restaurant");
        this.restaurant = result.data;
    },

}
</script>

<style scoped>
table {
   width: 100%;
    border: 1px solid #cfcfcf;
    padding: 5px;
    border-radius: 10px;

}

tr td,
tr th{
    text-align: left;
    padding: 10px;
}
.container {
    width: 80%;
    margin: 0 auto;
}

tr:nth-child(odd) {
    background: #f0f0f0;
}
.title {
    margin-bottom: 0px;
    text-align: center;
}
</style>