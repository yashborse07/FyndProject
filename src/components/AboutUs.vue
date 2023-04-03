<template>
  <div class="about-us">
    <div class="about-text">
      <h2 style="font-size: larger;text-align: center;"><b>About Nashik Ploggers</b></h2><br>
      <p style="color:green">
        “Nashik Ploggers” is a non-profit/ non-government organization based in
        Nashik which started in 2019. This group has been founded by Mr. Tejas
        Talware. Plogging drives are conducted every weekend in the city area or
        sometimes outside the city. Along with plogging we actively participate
        in other activities such as tree plantation, food donations, cloth
        donations, wallpaintings, blood donations drives, etc. As of now, we
        have 30+ number of collaborators with whom we collab occasionally. This
        organization started with Mr. Tejas as it's first member and now is a
        group of 800+ registered members.We dream to achieve Litter Free public
        places and to upgrade Nashik City as a Pollution Free and Green City.
      </p>
    </div>
    <div class="vision-mission" style="display: flex; flex-direction: column">
      <div class="vision">
        <h3><b>Our Vision</b></h3>
        <p>
          The vision of Nashik Ploggers is to create a cleaner, greener, and
          healthier environment for the people of Nashik city, India. The
          organization aims to achieve this vision by promoting the habit of
          plogging, which is a combination of jogging and picking up litter.
          Nashik Ploggers aims to mobilize people from all walks of life to come
          together and take responsibility for the cleanliness of their city.
          The organization encourages citizens to participate in group plogging
          events, where they can not only clean up their neighborhoods but also
          connect with other like-minded individuals and build a sense of
          community. In addition to promoting plogging, Nashik Ploggers also
          focuses on creating awareness about the importance of waste
          management, recycling, and environmental sustainability. The
          organization believes that through education and community
          involvement, they can create a positive impact on the environment and
          the lives of people in Nashik city. Overall, Nashik Ploggers' vision
          is to create a cleaner, greener, and more sustainable future for
          Nashik city and its residents.
        </p>
      </div>
      <br />
      <div class="mission">
        <h3><b>Our Mission</b></h3>
        <p>
          The mission of Nashik Ploggers is to promote a cleaner and greener
          Nashik city by encouraging citizens to take an active role in waste
          management and environmental sustainability. To achieve this mission,
          Nashik Ploggers organizes regular plogging events and campaigns to
          create awareness about the importance of waste management, recycling,
          and reducing the use of single-use plastics. The organization aims to
          encourage citizens to adopt sustainable habits in their daily lives
          and to become more responsible towards their environment. Nashik
          Ploggers also works towards building a sense of community among
          citizens, with a focus on bringing people from different backgrounds
          and age groups together for a common cause. By doing so, the
          organization aims to create a strong network of like-minded
          individuals who can collectively work towards a cleaner and more
          sustainable future for the city. In addition to plogging events and
          awareness campaigns, Nashik Ploggers also collaborates with local
          government bodies, NGOs, and other organizations to create more
          significant and long-term impact on the environment. The organization
          aims to serve as a model for other cities and communities in India,
          inspiring them to take action towards a cleaner and greener future.
          Overall, Nashik Ploggers' mission is to create a cleaner, greener, and
          more sustainable Nashik city by promoting responsible environmental
          practices, building a sense of community, and collaborating with other
          organizations and stakeholders.
        </p>
      </div>
    </div>
    <div class="team-members">
      <div class="row">
        <div v-for="member in members" :key="member.id" class="col-sm-4">
          <div class="member">
            <img :src="member.photo" class="photo" :alt="member.name" />
            <div class="name">{{ member.name }}</div>
            <div class="position">{{ member.position }}</div><br><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: [
        {
          id: 1,
          name: 'Tejas Talware',
          position: 'Founder',
          photo: require('@/assets/aboutus/tejas1.jpg'),
        },
        {
          id: 2,
          name: 'Pranav Bagul',
          position: 'Vice-President [BOD]',
          photo: require('@/assets/aboutus/pranavbagul.jpg'),
        },
        {
          id: 3,
          name: 'Bhagyesh Lunavat',
          position: 'Secretary [BOD]',
          photo: require('@/assets/aboutus/bhagyesh.jpg'),
        },
        {
          id: 4,
          name: 'Saie Patil',
          position: 'President',
          photo: require('@/assets/aboutus/saie.jpg'),
        },
        {
          id: 5,
          name: 'Bhavana Tejwani',
          position: 'Research Team Head',
          photo: require('@/assets/aboutus/bhavana.jpg'),
        },
        {
          id: 6,
          name: 'Dipti Karade',
          position: 'Advisory',
          photo: require('@/assets/aboutus/diptik.jpg'),
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

.about-text {
  width: 60%;
  font-size: large;
  text-align: justify;
  margin-top: 50px;
  color: rgb(0, 58, 81);
  margin-top: 7%;
}

.vision-mission {
  width: 60%;

  text-align: justify;
  margin-top: 50px;
  color: green;
}

.vision,
.mission {
  margin-bottom: 50px;
  max-height: 60%;
}

.vision h3,
.mission h3 {
  margin-bottom: 10px;
  font-size: larger;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  
}

.vision p,
.mission p {
  text-align: justify;
  font-size: large;
}
.team-members {
  margin-top: 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
}

.name {
  margin-top: 10px;
  font-weight: bold;
}

.position {
  margin-top: 5px;
}
</style>
  