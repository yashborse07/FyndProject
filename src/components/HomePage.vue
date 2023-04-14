<template>
  <main class="mainpage">
    <div class="home">
      <div class="main">
        <div><img class="logoimg" src="../assets/homepage/nplogo.png" /></div>
        <div class="MAIN_TEXT">
          NASHIK PLOGGERS
          <h1 style="font-size: 40px; color: black">We Plog To Conserve...!!</h1>
        </div>
      </div>

      <br />
      <h1 class="ploggingquestion">What is Plogging?</h1>
      <div class="plogging">
        <p class="ploggingtext">
          Plogging is a new trend that combines jogging with picking up litter
          to help keep the environment clean. It's a great way to exercise while
          also doing good for the planet. You can do it alone or with friends to
          make the experience more enjoyable. Not only does plogging help reduce
          litter, but it also promotes awareness about environmental issues.It
          is an eco-friendly and sustainable activity that helps to reduce waste
          and pollution. Plogging can be done in various locations, such as
          parks, beaches, and neighborhoods. It is a simple and accessible way
          to contribute to the health and well-being of the planet.
        </p>
        <img class="ploggingimg" src="../assets/homepage/plogging1.png" />
      </div>
      <h1 class="plasticquestion">Why "NO" plastic?</h1>
      <div class="plastic">
        <img class="plasticimg" src="../assets//homepage/plastic.png" />
        <p class="plastictext">
          Plastic is a material that has become ubiquitous in our lives.
          However, it is also one of the most harmful substances to the
          environment. Plastic can take hundreds of years to break down, and
          during that time, it can release harmful chemicals into the soil and
          water, harming wildlife and ecosystems. Plastic also contributes to
          the pollution of the oceans, causing harm to marine animals and
          threatening their habitats.It is important to avoid using plastic as
          much as possible to reduce its negative impact on the environment.
          This can be done by choosing reusable alternatives like cloth bags,
          metal water bottles, and glass food containers.
        </p>
      </div>

      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        style="background-color: green"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" style="border-radius: 12%">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="../assets/homepage/home2.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../assets/homepage/home4.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../assets/homepage/home3.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <h1 class="donationquestion">Why Donation?</h1>
      <div class="donation">
        <p class="donationtext">
          Clothes donation is an important aspect of giving back to the
          community and helping those in need. By donating clothes that are in
          good condition but no longer needed, you can provide a valuable
          resource to individuals and families who may not have the means to
          purchase new clothes. Donating clothes also has environmental
          benefits, as it reduces the amount of clothing that ends up in
          landfills. Your financial contributions allow us to continue
          organizing events and initiatives that promote environmental
          sustainability and community involvement. With your help, we can
          provide resources and education to encourage others to take action in
          their own communities. Thank you for considering a donation to Nashik
          Ploggers, and for your commitment to making a positive difference in
          the world.
        </p>
        <img class="donationimg" src="../assets/homepage/clothesdonation.png" />
      </div>
    </div>
  </main>
</template>
  
  <script>
export default {
  components: {},
};
</script>
  
  <style scoped>
.mainpage {
  /* background-image: url("../assets/bgimg.jpg"); */
  background-repeat: repeat;
  background-size: cover;
}
.main {
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: beige;

  /* height:80vh; */
}
.logoimg {
  display: flex;
  border-radius: 50%;
  margin-left: 50%;
  margin-top: 25%;
  margin-bottom: 20%;
  width: 65%;
  height: 65%;
}
.MAIN_TEXT {
  color: green;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 70px;
  margin-left: 10%;
  margin-top: 13%;
  font-family: "Times New Roman", Times, serif;
}
#carouselExampleIndicators {
  bottom: 10px; /* changed to px */
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  height: 300px;
  margin-bottom: 2%;
  margin-top: 0%;
  display: flex;
  z-index: 0;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3); /* added box shadow */
  border-radius: 10px; /* added rounded edges */
  background-color: beige;
}

.plastic {
  display: flex;
  margin-top: 1%;
}
.plasticimg {
  width: 60%;
  height: 50%;
  margin-left: 15%;
  margin-bottom: 10%;
  transition: transform 0.2s ease-in-out;
}
.plasticimg:hover {
  transform: scale(1.1);
}
.plastictext {
  margin-right: 15%;
  margin-left: 11%;
  right: 50%;
  height: 60%;
  color: rgb(0, 80, 127);
  justify-content: space-between;
  text-align: justify;
  font-family: cursive;
  font-size: larger;
}
.plasticquestion {
  margin-left: 55%;
  margin-top: 3%;
  left: 50%;
  height: 60%;
  color: green;
  justify-content: space-between;
  text-align: justify;
  font-family: cursive;
  font-size: xx-large;
}
.plogging {
  display: flex;
  margin-top: 1%;
}
.ploggingimg {
  width: 30%;
  height: 30%;
  margin-right: 12%;
  margin-left: 7%;
  transition: transform 0.2s ease-in-out;
}

.ploggingimg:hover {
  transform: scale(1.1);
}

.ploggingtext {
  margin-left: 15%;

  left: 50%;
  height: 60%;
  color: green;
  justify-content: space-between;
  text-align: justify;
  font-family: cursive;
  font-size: larger;
}
.ploggingquestion {
  margin-left: 22%;
  margin-top: 3%;
  left: 50%;
  height: 60%;
  color: rgb(0, 80, 127);
  justify-content: space-between;
  text-align: justify;
  font-family: cursive;
  font-size: xx-large;
}

.donation {
  display: flex;
  margin-top: 1%;
}
.donationimg {
  width: 30%;
  height: 40%;
  margin-right: 12%;
  margin-left: 7%;
  transition: transform 0.2s ease-in-out;
}

.donationimg:hover {
  transform: scale(1.1);
}

.donationtext {
  margin-left: 15%;

  left: 50%;
  height: 60%;
  color: green;
  justify-content: space-between;
  text-align: justify;
  font-family: cursive;
  font-size: larger;
}
.donationquestion {
  margin-left: 22%;
  margin-top: 3%;
  left: 50%;
  height: 60%;
  color: rgb(0, 80, 127);
  justify-content: space-between;
  text-align: justify;
  font-family: cursive;
  font-size: xx-large;
}
</style>
  