<template>
  <div class="counter-container">
    <p class="countertext">We are a team of 800+ volunteers now</p>
    <h1 class="subtext">
      The Nashik Ploggers, a community initiative aimed at promoting
      environmental awareness and cleanliness, has grown from humble beginnings
      to a team of 800 volunteers and counting. What started as a mission of a
      single founder has now become a full-fledged movement, with individuals
      from all walks of life coming together to create a cleaner, healthier
      environment for the people of Nashik. With their tireless efforts, the
      Nashik Ploggers have been able to raise awareness about the need for
      sustainable practices, while also inspiring others to take action in their
      own communities. It is a testament to the power of collective action and
      the impact that a dedicated group of individuals can have on their
      surroundings.
    </h1>
    <div class="counter">
  
      <div class="counter-value" v-text="counter"></div>
      <div class="counter-animation">
        <div class="counter-animation-inner" :style="animationStyle"></div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      counter: 0,
      animationStyle: "",
      animationDuration: 4000, // 2 seconds
    };
  },
  mounted() {
    const increment = 1;
    const endValue = 800;
    const steps = (endValue - this.counter) / increment;
    const delay = this.animationDuration / steps;
    let currentStep = 0;
    let animation = setInterval(() => {
      if (currentStep < steps) {
        this.counter += increment;
        currentStep++;
      } else {
        clearInterval(animation);
      }
    }, delay);
    this.animationStyle = `animation-duration: ${this.animationDuration}ms`;
  },
};
</script>
  
  <style scoped>
.counter-container {
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  margin-left: 18%;
  margin-right: 0%;
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100px;
  font-size: 5em;
  font-weight: bold;
  color: rgb(0, 183, 255);
  background-color: #ffffff00;
  position: relative;
  margin-top: 3%;
}

.counter-value {
  position: absolute;
  outline: auto;
}

.counter-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

}

.counter-animation-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation-name: count;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  z-index: -1;
}
.countertext {
  font-size: 250%;
  margin-top: 6%;
  margin-bottom: 0%;
  text-align: left;
  width: 100%;
  max-width: 600px;
  font-family: cursive;
  color: green;
  margin-left: -20%;
}
.subtext{
    font-size: larger;
  margin-top: 2%;
  margin-bottom: 0%;
  text-align: left;
  width: 100%;
  max-width: 600px;
  font-family: cursive;
  color: black;
  margin-left: -20%;
  text-align: justify;
}
@keyframes count {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>
  