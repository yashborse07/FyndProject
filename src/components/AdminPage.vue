<template>
  <main>
  <div class="formdiv" style="margin-left: 3%;">
    <h1>Admin Section</h1>
    
    <!-- Table for Form Data -->
    <h1
        style="
          text-align: center;
          color: green;
          font-size: 250%;
          margin-top: 5%;
          font-family: 'Times New Roman', Times, serif;
        "
      >
       Membership Form
      </h1>
    <table class="table table-success table-striped" style="margin-top: 5%;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>College</th>
          <th>Friend</th>
          <th>Views</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in formData" :key="item._id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.college }}</td>
          <td>{{ item.friend }}</td>
          <td>{{ item.views }}</td>
        </tr>
      </tbody>
    </table>
    
    <!-- Table for Donation Data -->
    <h1
        style="
          text-align: center;
          color: green;
          font-size: 250%;
          margin-top: 5%;
          font-family: 'Times New Roman', Times, serif;
        "
      >
      Donation Form
      </h1>
    <table class="table table-success table-striped" style="margin-top: 5%;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Amount</th>
          <th>Suggestions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in donationData" :key="item._id">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.suggestions }}</td>
        </tr>
      </tbody>
    </table>
    
    <!-- Table for Feedback Data -->
    <h1
        style="
          text-align: center;
          color: green;
          font-size: 250%;
          margin-top: 5%;
          font-family: 'Times New Roman', Times, serif;
        "
      >
     Feedback Form
      </h1>
    <table class="table table-success table-striped" style="margin-top: 5%;">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in feedbackData" :key="item._id">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.feedback }}</td>
        </tr>
      </tbody>
    </table>
    
  </div></main>
</template>


<script>
import axios from 'axios';

export default {
  name: 'AdminPage',
  data() {
    return {
      formData: [],
      donationData: [],
      feedbackData: []
    };
  },
  mounted() {
    Promise.all([
      axios.get('https://projectnashikploggers.onrender.com/api/all-form-data'),
      axios.get('https://projectnashikploggers.onrender.com/api/all-donation-Data'),
      axios.get('https://projectnashikploggers.onrender.com/api/all-feedback-Data')
    ])
    .then(([formDataResponse, donationDataResponse, feedbackDataResponse]) => {
      this.formData = formDataResponse.data;
      this.donationData = donationDataResponse.data;
      this.feedbackData = feedbackDataResponse.data;
      console.log(this.formData, this.donationData, this.feedbackData);
    })
    .catch(error => {
      console.log(error);
    });
  }
}
</script>

<style scoped>
</style>
