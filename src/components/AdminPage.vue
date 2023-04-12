<template>
    <div>
      <h1>Admin Section</h1><br><br><br><br><br><br>
      <ul>
        <li v-for="item in formData" :key="item._id">
          {{ item.name }} - {{ item.age }} - {{ item.address }} - {{ item.college }} - {{ item.friend }} - {{ item.views }}
        </li>
      </ul><br><br><br><br><br>
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
  /* Add custom styles here */
  </style>
  