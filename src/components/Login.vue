<template>
    
     <div class="signup">
              <h1>Login</h1>
           <input type="text" v-model="email" placeholder="Email" />
           <input type="text" v-model="password" placeholder="Password" />
            <button @click="login">Login</button>
            <p>
                <router-link to="/SignUp">SignUp</router-link>
            </p>
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
                 this.$router.push({name:'Home'});
            }else {
                alert('Email Or Password Incorrect, please Enter Right One');
            }

            console.log(result)
        }
    },

}
</script>

