<!-- <template>
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
   -->
   <template>
    <div>
      <h1>Admin Section</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>College</th>
            <th>Plogger Friend</th>
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
 
  </style>
  