<template>
<div >
    <form   >
      <h1
        style="
          text-align: center;
          color: green;
          font-size: 250%;
         
          font-family: 'Times New Roman', Times, serif;
        "
      >
        Admin Register
      </h1>
      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" class="form-control" />

      <label for="password">Password:</label>
      <input
        type="password"
        v-model="password"
        id="password"
        class="form-control"
      />

      <button type="submit" @click.prevent="login" class="btn btn-primary">
        Login
      </button>
    </form>
  </div>
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
<style scoped>
  form {
    height: 90vh;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    box-shadow: #212529;
    justify-content: center; /* add this line to center the form */
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
  
  }

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
  color: #fff;
  background-color: #1abc9c;
  border-color: black;
  margin-top: 2%;
}
</style>
