<template>
  <main style="display: flex">
    <div class="donate-container">
      <h1
        style="
          text-align: center;
          color: green;
          font-size: 250%;
          margin-top: 5%;
          font-family: 'Times New Roman', Times, serif;
        "
      >
        MAKE A DONATION
      </h1>
      <form @submit.prevent="submitForm" method="post">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            v-model="amount"
            required
          />
        </div>
        <div class="qr-code">
          <img
            src="../assets/donateus/qr.jpg"
            alt="Nashik Ploggers PhonePe Account QR Code"
          />
        </div>
        <div class="form-group">
          <label for="suggestions">Any Suggestions:</label>
          <textarea
            id="suggestions"
            name="suggestions"
            v-model="suggestions"
          ></textarea>
        </div>
        <p
          v-if="showThanks"
          style="color: green; font-weight: bold; text-align: center"
        >
          Thanks for your help!
        </p>
        <button class="donate-btn" type="submit">Donate Now</button>
      </form>
    </div>
    <div class="donationimg">
      <img src="../assets/donateus/donation1.png" />
      <p class="donationtext">
        Your money donation is valuable as it helps us carry out charitable
        initiatives such as clothes donation, tree plantation drives,
        cleanliness campaigns, and wall paintings. These initiatives require
        materials like clothes, saplings, cleaning equipment, and painting
        supplies. Your donation enables us to purchase these materials, allowing
        us to create a positive impact on the community. We provide clothing to
        the less fortunate, plant trees to combat climate change, create
        hygienic environments, and beautify public spaces. Your contribution
        helps us achieve our goals and make a positive impact. We appreciate
        your support in continuing our initiatives.
      </p>
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
      amount: "",
      suggestions: "",
      showThanks: false, // new property to show thanks message
    };
  },
  methods: {
    async submitForm() {
      this.showThanks = true;
      const donationData = {
        name: this.name,
        email: this.email,
        amount: this.amount,
        suggestions: this.suggestions,
      };
      try {
        const res = await axios.post(
          "http://localhost:3000/api/donation-Data",
          donationData
        );
        console.log(res);

        //clear form fields
        this.name = "";
        this.email = "";
        this.amount = "";
        this.suggestions = "";
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
  
<style scoped>
.donate-container {
  max-width: 600px;
  margin: 0 auto;
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

.donate-btn {
  background-color: #1abc9c;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s;
  margin-bottom: 5%;
}

.donate-btn:hover {
  background-color: #16a085;
}

.qr-code {
  display: flex;
  justify-content: center;
}

.qr-code img {
  max-width: 300px;
}

.donationimg {
  height: 25%;
  width: 20%;
  margin-left: 10%;
  margin-right: 20%;
  margin-top: 10%;
  border-radius: 20px;
}

.donationtext {
  margin-left: -30%;
  width: 500px;
  height: 60%;
  color: green;
  justify-content: space-between;
  text-align: justify;
  font-family: cursive;
  font-size: larger;
  margin-top: 10%;
}

/* Media queries */

@media screen and (max-width: 768px) {
  .main {
    display: flex;
    flex-direction: column;
  }

  .donate-container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form-group {
    width: 100%;
  }

  .donationimg {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .donationtext {
    margin-left: 0;
    width: 100%;
    margin-top: 5%;
  }
}

@media screen and (max-width: 480px) {
  input[type="text"],
  input[type="email"],
  input[type="number"],
  textarea {
    font-size: 0.9rem;
  }

  .donate-btn {
    font-size: 1rem;
  }

  .qr-code img {
    max-width: 200px;
  }
}
</style>

 