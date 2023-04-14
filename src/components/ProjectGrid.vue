<template>
  <div class="project-grid">
    <div v-for="(project, index) in projects" :key="index" :class="{'project-card': true, 'margin-top-7': index < 3, 'margin-top-4': index >= 3}" >
      <img :src="project.image" alt="Project Image">
      <h3>{{ project.title }}</h3>
      <p style="text-align: justify;">{{ project.description }}</p>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: 'ProjectGrid',
    props: {
      projects: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .project-grid {
    display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: space-around;

}

  
  
  .project-card {
    width: 30%;
    justify-content: space-between;
  /* margin-bottom: 30px; */
  box-shadow: 10 10 20px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 30px;
  background-color: white;
  margin-top: 7%;
  }
  
  .project-card img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 30px;
  }
  
  .project-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
  text-align: justify;
  text-align: center;
  }
  
  .project-card p {
    font-size: 16px;
    margin-bottom: 20px;
    justify-content: end;
  }
  
  .project-card a {
    display: inline-block;
    font-size: 16px;
    padding: 10px 20px;
    background-color: #0099ff;
    color: #fff;
    border-radius: 5px;
    text-decoration: none;
    box-shadow: 10 10 20px rgba(0, 0, 0, 0.2);

  }
  .margin-top-7 {
  margin-top: 7%;
}

.margin-top-4 {
  margin-top: 2%;
}
  </style>
  