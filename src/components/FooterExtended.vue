<template>
  <div class="d-flex flex-column h-100">
    <!-- FOOTER -->
    <footer class="w-100 py-4 flex-shrink-0" style="background-color: beige">
      <div class="container py-4">
        <div class="row gy-4 gx-5">
          <div class="col-lg-4 col-md-6">
            <h5 class="h1 text-green">Nashik Ploggers</h5>
            <p class="small text-muted">
              An organization based in Nashik dedicated to promoting
              environmental wellness.
            </p>
            <p class="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.<br />Designed by Yash
              Borse.

              <a class="text-primary" href="#">yashborse7601@gmail.com</a>
            </p>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-black mb-3">Quick links</h5>
            <ul class="list-unstyled text-muted">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/aboutus">About Us</router-link></li>
              <li><router-link to="/proninit">Our Initiatives</router-link></li>
              <li>
                <router-link to="/image-gallery">Image Gallery</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-black mb-3">Quick links</h5>
            <ul class="list-unstyled text-muted">
              <li><router-link to="/BeAMember">Join Us</router-link></li>
              <li><router-link to="/DonateUs">Donate</router-link></li>
              <li>
                <router-link to="/FeednSuggestion">Feedbacks</router-link>
              </li>
              <li>
                <a href="https://www.instagram.com/tejas_talware/"
                  >Our Founder</a
                >
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-6">
            <h5 class="text-black mb-3">Connect us on</h5>
            <ul class="list-unstyled text-muted">
              <li class="twitter">
                <a href="https://twitter.com/NashikPloggers"
                  >Twitter<i class="fab fa-twitter"></i
                ></a>
              </li>
              <li class="facebook">
                <a href="https://www.facebook.com/nashikploggers/"
                  >Facebook<i class="fab fa-facebook-f"></i
                ></a>
              </li>
              <li class="whatsapp">
                <a href="https://chat.whatsapp.com/L5uOw6zzTZz18YfAEwlnHh"
                  >WhatsApp<i class="fab fa-whatsapp"></i
                ></a>
              </li>
              <li class="instagram">
                <a href="https://www.instagram.com/nashikploggers/"
                  >Instagram<i class="fab fa-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5 class="text-black mb-3">Upcoming Campaigns</h5>
            <ul class="list-unstyled text-muted">
              <li>Chalk of Awareness</li>
              <li>Food Donation</li>
              <li>Buy it Big</li>
              <li>Clean Godavari</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik&display=swap");

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover,
a:focus {
  text-decoration: none;
}

footer {
  background: #212529;
}
.media_links {
}
</style>