<template>
  <form>
    <br /><br /><br /><br /><br /><br /><br />
    <label for="email">Email:</label>
    <input type="email" v-model="email" id="email" />

    <label for="password">Password:</label>
    <input type="password" v-model="password" id="password" />

    <button type="submit" @click.prevent="login">Login</button>
  </form>
</template>
  
  <script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // console.log(auth.signInWithEmailAndPassword)
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            // await firebase.auth.signInWithEmailAndPassword(this.email, this.password)
            if (
              this.email == "yashborse7601@gmail.com" &&
              this.password == "123456789"
            ) {
              this.$router.replace("/AdminPage");
            }
          });
        // this.$router.push('/admin')
      } catch (error) {
        console.log("hello");
        // Show error message to user
      }
    },
  },
};
</script>
  