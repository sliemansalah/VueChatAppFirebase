<template>
    <div class="container">
        <div class="row">
        <h2 v-if="log">Signin</h2>
        <h2 v-else>Register</h2>

        <div v-if="log" class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signIn">Signin</button>
            <button class="btn btn-danger" @click="log=false">Go to Register</button>

        </div>
        <div v-else class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
 <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signUp">Register</button>
            <button class="btn btn-danger" @click="log=true">Go to SignIn</button>

        </div>

    </div>
    </div>
</template>

<script>
import firebase from 'firebase';
    export default {
        name: 'SignIn',
        data () {
            return {
                log:true,
                formData:{
                    email:'',
                    password:''
                }
            }
        },
        methods: {
            signIn(){
                firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
                    .then((user)=>{
                        localStorage.setItem('user',this.formData.email)
                        this.$router.go(0)
                    })
                    .catch((e)=>{
                        alert(e.message)
                    })
            },
            signUp(){
                firebase.auth().createUserWithEmailAndPassword(this.formData.email,this.formData.password)
                    .then((user)=>{
                        this.$router.go(0)
                    })
                    .catch((e)=>{
                    alert('oops'+e.message);
                    })
            }
        },
        created(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        margin-top: 200px;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>