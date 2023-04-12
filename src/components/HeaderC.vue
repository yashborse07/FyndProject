<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/homepage/nplogo1.jpg" alt="Nashik Ploggers Logo" />
      </router-link>
    </div>
    <nav class="sticky-top">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="menu-icon"></span>
      </button>
      <ul class="menu" :class="{ 'is-active': isMenuActive }">
        <li>
          <router-link to="/" exact-active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/aboutus" exact-active-class="active">About Us</router-link>
        </li>
        <li>
          <router-link to="/proninit" exact-active-class="active">Initiatives</router-link>
        </li>
        <li>
          <router-link to="/image-gallery" exact-active-class="active">Gallery</router-link>
        </li>
        <li>
          <router-link to="/our-collaborators" exact-active-class="active">Collaborators</router-link>
        </li>
        <li>
          <router-link to="/AdminRegister" exact-active-class="active">Admin</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 10%;
  background-color: green;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  position: fixed;
  margin-bottom: 1%;
  font-size: larger;
  z-index: 10;
}
.active {
  color: skyblue; /* replace with your desired style */
}

.logo img {
  width: 25%;
  height: 25%;
  margin-left: 10px;
  border-radius: 50%;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 30px;
  margin-right: 0;
}

nav li:not(:last-child) {
  margin-right: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

nav a:hover {
  color: rgb(0, 80, 127);

  height: 100%;
}
/* Styling for the hamburger icon */
.menu-toggle {
  display: none;
  border: none;
  background: none;
  cursor: pointer;
}

.menu-icon {
  display: block;
  width: 25px;
  height: 5px;
  margin: 5px auto;
  background-color: #000;
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.menu-toggle.is-active .menu-icon {
  background-color: #fff;
}

/* Styling for the navigation menu */
nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav li {
  margin: 0 10px;
}

/* Hide the menu on small screens */
@media (max-width: 768px) {
  .logo {
    margin-right: auto;
  }

  .menu-toggle {
    display: block;
  }

  nav ul {
    display: none;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    margin-top: 10px;
    padding: 0;
  }

  nav li {
    margin: 10px 0;
  }

  /* Show the menu when the hamburger icon is clicked */
  .menu.is-active {
    display: flex;
  }
}
</style>
