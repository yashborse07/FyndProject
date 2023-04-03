<template>
  <main style="display: flex">
    <div class="feedback-container">
      <h1
        style="
          text-align: center;
          color: green;
          font-size: 250%;
          margin-top: 2%;
          margin-bottom: 4%;
          font-family: 'Times New Roman', Times, serif;
        "
      >
        HELP US DO BETTER
      </h1>
      <form novalidate @submit.prevent="submitFeedback">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="phone">Mobile No:</label>
          <input type="tel" id="phone" v-model="phone" required />
        </div>
        <div class="form-group">
          <label for="feedback">Feedback:</label>
          <textarea id="feedback" v-model="feedback" required></textarea>
        </div>
        <div v-if="submitted" class="success-message">
          Thanks for your feedback!
        </div>
        <button type="submit" class="donate-btn">Submit</button>
      </form>
    </div>
  </main>
</template>

  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      feedback: "",
      submitted: false,
    };
  },
  methods: {
    async submitFeedback() {
      if (this.name && this.email && this.phone && this.feedback) {
        // Submit feedback
        this.submitted = true;
      } else {
        // Show error message for empty fields
        this.submitted = true;
      }
      const feedbackData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        feedback: this.feedback,
      };
      try {
        const res = await axios.post(
          "https://projectnashikploggers.onrender.com/api/feedback-Data",
          feedbackData
        );
        console.log(res);

        //clear form fields
        this.name = "";
        this.email = "";
        this.phone = "";
        this.feedback = "";
        this.submitted = true;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
  
  <style scoped>
.feedback-container {
  max-width: 600px;
  margin: 0 auto;

  background-repeat: no-repeat;

  padding: 50px;

  margin-top: 5%;
}

h2 {
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
input[type="tel"],
textarea {
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 1rem;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
textarea:focus {
  border-bottom-color: #1abc9c;
}

.donate-btn {
  background-color: #1abc9c;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s;
}

.donate-btn:hover {
  background-color: #16a085;
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #2ecc71;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  animation: fadein 1s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
  