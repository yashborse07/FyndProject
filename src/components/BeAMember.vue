<template>
  <main style="display: flex">
    <MemberCounter />
    <div class="be-a-member">
      <h1
        style="
          text-align: center;
          color: green;
          font-size: 250%;
          margin-top: 5%;
          font-family: 'Times New Roman', Times, serif;
        "
      >
        BE A MEMBER
      </h1>

      <form @submit.prevent="submitForm" method="post">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="name" required />
        </div>

        <div class="form-group">
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" v-model="age" required />
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <textarea
            id="address"
            name="address"
            v-model="address"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="college">College Name:</label>
          <input
            type="text"
            id="college"
            name="college"
            v-model="college"
            required
          />
        </div>
        <div class="form-group">
          <label for="friend">Any Plogger Friend:</label>
          <input type="text" id="friend" name="friend" v-model="friend" />
        </div>
        <div class="form-group">
          <label for="views">Your Views on Nashik Ploggers:</label>
          <textarea id="views" name="views" v-model="views" required></textarea>
        </div>
        <div style="color: green; text-align: center" v-if="successMessage">
          {{ successMessage }}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>
  
  
  <script>
import axios from "axios";
import MemberCounter from "./MemberCounter.vue";
export default {
  components: {
    MemberCounter,
  },
  data() {
    return {
      name: "",
      age: "",
      address: "",
      college: "",
      friend: "",
      views: "",
      successMessage: false,
    };
  },
  methods: {
    async submitForm() {
      this.successMessage= "Welcome aboard Nashik Ploggers, Together, we create change."
      const formData = {
        name: this.name,
        age: this.age,
        address: this.address,
        college: this.college,
        friend: this.friend,
        views: this.views,
      };

      try {
        const res = await axios.post(
          "https://projectnashikploggers.onrender.com/api/form-data",
          formData
        );
        console.log(res);

        // Clear form fields
        this.name = "";
        this.age = "";
        this.address = "";
        this.college = "";
        this.friend = "";
        this.views = "";

        // Show success message
        this.successMessage = "Form submitted successfully!";
      } catch (e) {
        console.log(e);
      }
    },
    
  },
};
</script>
<style scoped>
.be-a-member {
 width:600px;
  margin-right: 20%;
  margin-left: 2%;
  padding: 1rem;
  background-color: #ffffff00;
  border-radius: 5px;
  margin-top: 5%;
}

h2 {
  margin-bottom: 1rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea {
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 1rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
textarea:focus {
  border-bottom-color: #1abc9c;
}

button[type="submit"] {
  background-color: #1abc9c;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s;
}

button[type="submit"]:hover {
  background-color: #16a085;
}
</style>
<!-- mongodb://localhost:27017 -->
