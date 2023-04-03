<template>
  <div class="social">
    <ul>
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
</template>

<style>
.social {
  position: fixed;
  top: 30%;
}

.social ul {
  list-style-type: none;
  padding: 10;
  transform: translatex(-270px);
}

.social ul li {
  display: block;
  margin: 5px;
  background-color: rgba(0, 207, 243, 0.5);
  width: 300px;
  text-align: right;
  padding: 20px;
  border-radius: 0 30px 30px 0;
  transition: all 1s;
}

.social ul li:hover {
  transform: translatex(100px);
}

.social ul li.twitter:hover {
  background-color: #55acee;
}
.social ul li.whatsapp:hover {
  background-color: #2cda1d;
}
.social ul li.facebook:hover {
  background-color: #3b5999;
}

.social ul li.instagram:hover {
  background-color: #e140e4;
}

.social ul li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.social ul li i {
  text-align: center;
  margin-left: 30px;
  color: rgb(0, 0, 0);
  padding-right: 15px;
  border-radius: 50%;
  width: 15px;
  height: 20px;
  font-size: 30px;
  transform: rotate(0deg);
}

.social ul li:hover i {
  transform: rotate(360deg);
  transition: all 1s;
  width: 1px;
}
</style>
