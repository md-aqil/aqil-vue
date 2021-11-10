<template lang="">
    <div>
       <div class="signup">
              <h1>SignUp</h1>
           <input type="text" v-model="name" placeholder="Name"  />
           <input type="text" v-model="email" placeholder="Email" />
           <input type="text" v-model="password" placeholder="Password" />
            <button @click="signUp">SignUp</button>
           
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        
        }
    },
    methods: {
       async signUp() {

            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
           
            console.log(result.data);

            if (result.status ==201) {
                alert('Sign Up Success !')
            }
            localStorage.setItem("user-info", JSON.stringify(result.data));
        }
    },
    
}
</script>
