<template>
  <div class="formdiv">
    <h1>Admin Section</h1>
    <table class="table table-success table-striped">
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminPage',
  data() {
    return {
      formData: []
    };
  },
  mounted() {
    axios.get('https://projectnashikploggers.onrender.com/api/all-form-data')
      .then(response => {
        this.formData = response.data;
        console.log(this.formData)
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.formdiv{
  margin-top:10%;
}
</style>
