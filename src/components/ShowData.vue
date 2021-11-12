<template>
  <div>
    <h1>API post List</h1>
  <table class="table" style="width: 80%; margin: 0 auto;background: #f7f7f7;border-radious: 20px">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Passowrd</th>
    </tr>

    <tr v-for="item in list" :key="item.id">
       <td>{{item.id}}</td>
        <td>{{item.name}}</td>
      <td>{{item.email}}</td>
      <td>{{item.passowrd}}</td>
    </tr>
  </table>


  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowData',
  components: {
  
  },
  data() {
    return {
      list: [],
    }
  },

 async mounted() {
     let result = await axios.get("http://localhost:3000/users");
     this.list = result.data;
  },
}
</script>

