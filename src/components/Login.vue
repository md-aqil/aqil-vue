<template>
    
     <div class="signup">
              <h1>Login</h1>
           <input type="text" v-model="email" placeholder="Email" />
           <input type="text" v-model="password" placeholder="Password" />
            <button @click="login">Login</button>
           
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
       async login() {
          
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            
            if (result.status ==200 && result.data.length > 0 ) {

                 localStorage.setItem("user-info", JSON.stringify(result.data[0]));

                alert('Login Success !')
            }

            console.log(result)
        }
    },

}
</script>

